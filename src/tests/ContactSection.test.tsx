import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from '../components/ContactSection';
import { emailComposeUrl, profile } from '../data/portfolio';
import emailjs from '@emailjs/browser';

vi.mock('@emailjs/browser', () => ({ default: { sendForm: vi.fn() } }));

describe('ContactSection Component', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'test-service');
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'test-template');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'test-public-key');
  });

  it('should render contact form with all fields', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('should open a Gmail compose window from the email links', () => {
    render(<ContactSection />);

    const emailLinks = screen.getAllByRole('link').filter((link) => link.textContent?.includes(profile.email));
    expect(emailLinks.length).toBeGreaterThan(0);
    emailLinks.forEach((link) => expect(link).toHaveAttribute('href', emailComposeUrl(profile.email)));
  });

  it('opens a prefilled email draft when EmailJS is not configured', async () => {
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', '');
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', '');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', '');
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/nom/i), 'Virang');
    await user.type(screen.getByLabelText(/email/i), 'visitor@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello there');
    await user.click(screen.getByRole('button', { name: /open email draft/i }));

    expect(openSpy).toHaveBeenCalledOnce();
    expect(openSpy.mock.calls[0][0]).toContain('mail.google.com');
    openSpy.mockRestore();
  });

  it('should validate name field to accept only letters', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const nameInput = screen.getByLabelText(/nom/i) as HTMLInputElement;
    await user.type(nameInput, 'John123');
    
    // Numbers should be filtered out
    expect(nameInput.value).toBe('John');
  });

  it('should have required attributes on form fields', () => {
    render(<ContactSection />);
    
    const nameInput = screen.getByLabelText(/nom/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(messageInput).toHaveAttribute('required');
  });

  it('should have proper ARIA labels for accessibility', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText(/entrez votre nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/entrez votre adresse email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/entrez votre message/i)).toBeInTheDocument();
  });

  describe('envoi', () => {
    // Réponse d'EmailJS que le test déclenche quand il veut
    const pendingSend = () => {
      let resolve!: () => void;
      vi.mocked(emailjs.sendForm).mockReturnValue(
        new Promise((r) => { resolve = () => r({ status: 200, text: 'OK' }); }),
      );
      return () => resolve();
    };
    const form = () => screen.getByRole('button', { name: /envoyer/i }).closest('form')!;

    beforeEach(() => {
      vi.mocked(emailjs.sendForm).mockReset();
      vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'test-service');
      vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'test-template');
      vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'test-public-key');
    });

    it("n'envoie qu'une fois même si on valide deux fois pendant l'envoi", async () => {
      const respond = pendingSend();
      render(<ContactSection />);

      fireEvent.submit(form());
      fireEvent.submit(form());

      expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('button', { name: /envoyer/i })).toBeDisabled();
      await act(async () => respond());
      expect(screen.getByRole('button', { name: /envoyer/i })).toBeEnabled();
    });

    it('masque le message 3 s après la réponse, même si elle arrive tard', async () => {
      vi.useFakeTimers();
      try {
        const respond = pendingSend();
        render(<ContactSection />);
        fireEvent.submit(form());

        // EmailJS répond au bout de 5 s : le message doit tout de même s'afficher
        await act(async () => { vi.advanceTimersByTime(5000); });
        await act(async () => respond());
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        await act(async () => { vi.advanceTimersByTime(3000); });
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      } finally {
        vi.useRealTimers();
      }
    });
  });
});
