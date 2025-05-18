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
    const phoneNumber = "5500000000000"; // Substitua pelo número real
    const message = encodeURIComponent(
      `Olá, gostaria de agendar um horário para o serviço ${service.nome} com a profissional ${service.profissional}. Pode me informar a disponibilidade?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const benefits = getBenefits(service.categoria, service.nome);
  const emoji = getServiceEmoji(service.categoria, service.nome);
  const imageUrl = getServiceImage(service.categoria, service.nome);

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