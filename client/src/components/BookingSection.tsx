import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

export default function BookingSection() {
  const whatsappNumber = "5500000000000"; // Replace with the actual number
  const prefilledMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Inara");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <section id="agendamento" className="py-20 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Agende seu Horário</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Reserve seu momento de cuidado e bem-estar em poucos cliques.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-8 text-neutral-900">
          <div className="text-center mb-6">
            <CalendarIcon className="mx-auto h-10 w-10 text-accent mb-3" />
            <h3 className="font-display text-xl font-semibold">Agendamento Simplificado</h3>
            <p className="text-neutral-900/70 text-sm mt-2">
              Escolha seu serviço, profissional e horário de preferência.
            </p>
          </div>

          <Button 
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-white font-medium rounded-full"
            size="lg"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
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
              Agendar via WhatsApp
            </a>
          </Button>

          <div className="text-center text-xs text-neutral-900/60 mt-4">
            <p>Nosso horário de atendimento:</p>
            <p className="mt-1">Segunda a Sábado: 9h às 19h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
