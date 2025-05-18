import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Link 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactInfo = {
    address: "Rua das Flores, 123 - Centro\nSão Paulo - SP",
    hours: "Segunda a Sexta: 9h às 19h\nSábado: 9h às 17h",
    phone: "(11) 9999-9999",
    email: "contato@estudioinara.com.br",
    map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975886195436!2d-46.65390688502324!3d-23.564611384683725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635508915936!5m2!1spt-BR!2sbr"
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            alert('Link copiado para a área de transferência!');
          })
          .catch(err => {
            console.error('Erro ao copiar link: ', err);
          });
        break;
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Entre em Contato</h2>
            <p className="text-neutral-900/70 mb-8">
              Estamos disponíveis para tirar suas dúvidas e receber seu feedback.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Endereço</h3>
                  <p className="text-neutral-900/70 text-sm whitespace-pre-line">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent shrink-0">
                  <Clock size={18} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Horário de Funcionamento</h3>
                  <p className="text-neutral-900/70 text-sm whitespace-pre-line">{contactInfo.hours}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Telefone</h3>
                  <p className="text-neutral-900/70 text-sm">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={18} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-neutral-900/70 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-3">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href={`https://wa.me/${5500000000000}`} 
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-colors"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5C11.667 16 14.3 15 14.5 13.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-80 bg-secondary rounded-xl overflow-hidden shadow-md mb-6">
              <iframe 
                src={contactInfo.map_url} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa de localização do Estúdio Inara"
              ></iframe>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Compartilhe:</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-full bg-secondary text-accent hover:bg-primary transition-colors"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook size={16} className="mr-2" /> Facebook
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-full bg-secondary text-accent hover:bg-primary transition-colors"
                  onClick={() => handleShare('whatsapp')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5C11.667 16 14.3 15 14.5 13.5" />
                  </svg> WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-full bg-secondary text-accent hover:bg-primary transition-colors"
                  onClick={() => handleShare('copy')}
                >
                  <Link size={16} className="mr-2" /> Copiar Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
