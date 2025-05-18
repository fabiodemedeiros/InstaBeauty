import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'} transition-all duration-300 z-50`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#inicio" className="text-accent font-display font-semibold text-2xl md:text-3xl">
          Estúdio Inara
        </a>

        <nav className="hidden md:flex space-x-8 text-neutral-900">
          <a href="#inicio" className="font-medium hover:text-accent transition">
            Início
          </a>
          <a href="#servicos" className="font-medium hover:text-accent transition">
            Serviços
          </a>
          <a href="#profissionais" className="font-medium hover:text-accent transition">
            Profissionais
          </a>
          <a href="#agendamento" className="font-medium hover:text-accent transition">
            Agendamento
          </a>
          <a href="#contato" className="font-medium hover:text-accent transition">
            Contato
          </a>
        </nav>

        <button 
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="#inicio"
              className="font-medium hover:text-accent transition"
              onClick={closeMobileMenu}
            >
              Início
            </a>
            <a
              href="#servicos"
              className="font-medium hover:text-accent transition"
              onClick={closeMobileMenu}
            >
              Serviços
            </a>
            <a
              href="#profissionais"
              className="font-medium hover:text-accent transition"
              onClick={closeMobileMenu}
            >
              Profissionais
            </a>
            <a
              href="#agendamento"
              className="font-medium hover:text-accent transition"
              onClick={closeMobileMenu}
            >
              Agendamento
            </a>
            <a
              href="#contato"
              className="font-medium hover:text-accent transition"
              onClick={closeMobileMenu}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
