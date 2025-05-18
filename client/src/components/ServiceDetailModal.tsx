import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/services";
import { X } from "lucide-react";

interface ServiceDetailModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  const handleWhatsAppBooking = () => {
    const phoneNumber = "554736448287"; // Estúdio Inara WhatsApp number
    const message = encodeURIComponent(
      `Olá, gostaria de agendar um horário para o serviço ${service.nome} com a profissional ${service.profissional}. Pode me informar a disponibilidade?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Função para obter emoji para a categoria do serviço
  const getEmoji = () => {
    switch (service.categoria) {
      case 'Mãos e Pés': return '💅';
      case 'Estética Facial': return '✨';
      case 'Depilação': return '✂️';
      case 'Cabelos': return '💇‍♀️';
      case 'Maquiagem': return '💄';
      case 'Bem-estar': return '💆‍♀️';
      case 'Corporal': return '🧖‍♀️';
      default: return '✨';
    }
  };

  // Função para obter imagem para a categoria do serviço
  const getImage = () => {
    switch (service.categoria) {
      case 'Mãos e Pés':
        return 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800';
      case 'Estética Facial':
        return 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800';
      case 'Depilação':
        return 'https://images.unsplash.com/photo-1625441896755-6814c030367c?q=80&w=800';
      case 'Cabelos':
        return 'https://images.unsplash.com/photo-1560869713-2cc18de5a456?q=80&w=800';
      case 'Maquiagem':
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800';
      case 'Bem-estar':
        return 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800';
      case 'Corporal':
        return 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800';
      default:
        return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800';
    }
  };

  // Função para obter benefícios para a categoria do serviço
  const getBenefits = () => {
    switch (service.categoria) {
      case 'Mãos e Pés':
        return [
          'Aparência renovada e bem cuidada',
          'Hidratação intensiva',
          'Remoção de cutículas com segurança',
          'Bem-estar instantâneo'
        ];
      case 'Estética Facial':
        return [
          'Pele mais radiante e saudável',
          'Redução de imperfeições',
          'Revitalização facial completa',
          'Relaxamento e bem-estar'
        ];
      case 'Depilação':
        return [
          'Pele lisa por mais tempo',
          'Processo com menor desconforto',
          'Redução gradativa dos pelos',
          'Higiene e frescor prolongados'
        ];
      case 'Cabelos':
        return [
          'Cabelos mais saudáveis e brilhantes',
          'Corte personalizado ao seu estilo',
          'Tratamento específico para seu tipo de cabelo',
          'Aparência renovada e moderna'
        ];
      case 'Maquiagem':
        return [
          'Produtos de alta qualidade',
          'Técnicas profissionais exclusivas',
          'Valorização dos seus traços naturais',
          'Durabilidade garantida'
        ];
      case 'Bem-estar':
        return [
          'Alívio de tensões e estresse',
          'Relaxamento profundo',
          'Melhora da circulação',
          'Sensação de renovação e bem-estar'
        ];
      case 'Corporal':
        return [
          'Pele mais hidratada e renovada',
          'Relaxamento muscular',
          'Sensação de leveza',
          'Bem-estar por todo o corpo'
        ];
      default:
        return [
          'Atendimento personalizado',
          'Profissionais experientes',
          'Produtos de alta qualidade',
          'Experiência completa de bem-estar'
        ];
    }
  };
  
  const emoji = getEmoji();
  const imageUrl = getImage();
  const benefits = getBenefits();

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={`Serviço de ${service.nome}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-display font-semibold flex items-center">
                      {emoji} {service.nome}
                    </h2>
                    <p className="text-white/80 text-sm mt-1">
                      {service.categoria}
                    </p>
                  </div>
                </div>
                <DialogClose className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm text-white">
                  <X size={18} />
                </DialogClose>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-neutral-900 mb-2">Descrição detalhada</h3>
                  <p className="text-neutral-900/70 text-sm">
                    {service.descricao}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-neutral-900 mb-2">Benefícios</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span className="text-sm text-neutral-900/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div>
                    <span className="text-neutral-900/60 block mb-1">Duração</span>
                    <span className="font-medium">{service.duracao} minutos</span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-900/60 block mb-1">Preço</span>
                    <span className="font-medium text-accent text-lg">R$ {service.preco}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-neutral-900/60 text-sm block mb-1">Profissional responsável</span>
                  <span className="font-medium">{service.profissional}</span>
                </div>

                <Button
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-6 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
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
                  Agendar esse serviço
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}