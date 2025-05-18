
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/services";
import { motion } from "framer-motion";

interface ServiceDetailModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  const whatsappNumber = "554736448287";
  const message = encodeURIComponent(
    `Olá, gostaria de agendar um horário para o serviço ${service.nome} com a profissional ${service.profissional}. Pode me informar a disponibilidade?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const getCategoryIcon = (categoria: string) => {
    switch (categoria) {
      case "Mãos e Pés":
        return "💅";
      case "Estética Facial":
        return "👩";
      case "Depilação":
        return "✨";
      case "Cabelos":
        return "💇‍♀️";
      case "Maquiagem":
        return "💄";
      case "Bem-estar":
        return "🧘‍♀️";
      case "Corporal":
        return "💆‍♀️";
      default:
        return "✨";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="p-6"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{getCategoryIcon(service.categoria)}</span>
              <h2 className="text-2xl font-display font-semibold">{service.nome}</h2>
            </div>
            <p className="text-sm text-neutral-600">{service.categoria}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Descrição</h3>
            <p className="text-neutral-700">{service.descricao}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Benefícios</h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li>Atendimento personalizado</li>
              <li>Produtos de alta qualidade</li>
              <li>Ambiente acolhedor e relaxante</li>
              <li>Resultado duradouro</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium mb-1">Duração</h3>
              <p className="text-neutral-700">{service.duracao} minutos</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Preço</h3>
              <p className="text-neutral-700">R$ {service.preco}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-1">Profissional</h3>
            <p className="text-neutral-700">{service.profissional}</p>
          </div>

          <Button 
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-white"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
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
              Agendar esse serviço
            </a>
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
