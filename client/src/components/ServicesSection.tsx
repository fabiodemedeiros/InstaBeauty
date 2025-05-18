
import ServiceDetailModal from "./ServiceDetailModal";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Hand, 
  Paintbrush, 
  Heart, 
  Clock, 
  UserRound,
  Scan,
  UserCircle
} from "lucide-react";
import { Service } from "@/lib/services";

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { id: "all", name: "Todos", icon: null },
    { id: "Mãos e Pés", name: "Mãos e Pés", icon: <Hand size={16} /> },
    { id: "Estética Facial", name: "Estética Facial", icon: <UserCircle size={16} /> },
    { id: "Depilação", name: "Depilação", icon: <Scissors size={16} /> },
    { id: "Cabelos", name: "Cabelos", icon: <Paintbrush size={16} /> },
    { id: "Maquiagem", name: "Maquiagem", icon: <Paintbrush size={16} /> },
    { id: "Bem-estar", name: "Bem-estar", icon: <Heart size={16} /> },
    { id: "Corporal", name: "Corporal", icon: <Scan size={16} /> }
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count on category change
  };

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.categoria === activeCategory);

  const visibleServices = filteredServices.slice(0, visibleCount);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Nossos Serviços</h2>
          <p className="text-neutral-900/70 max-w-xl mx-auto">
            Descubra nossa variedade de serviços profissionais personalizados para realçar sua beleza natural.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id 
                  ? "bg-primary text-accent" 
                  : "bg-secondary text-accent hover:bg-primary"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services grid */}
        {services.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleServices.map((service, index) => {
                const [isModalOpen, setIsModalOpen] = useState(false);
                return (
                  <div key={index}>
                    <div 
                      className="service-card bg-secondary rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-display text-xl font-semibold">{service.nome}</h3>
                          <span className="bg-primary text-accent text-sm font-medium px-3 py-1 rounded-full">
                            R$ {service.preco}
                          </span>
                        </div>
                        <p className="text-neutral-900/70 mb-4 text-sm">{service.descricao}</p>
                        <div className="flex justify-between items-center text-sm text-neutral-900/60">
                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {service.duracao} min
                          </span>
                          <span className="flex items-center gap-1">
                            <UserRound size={16} />
                            {service.profissional}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ServiceDetailModal
                      service={service}
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    />
                  </div>
                );
              })}
              ))}
            </div>

            {/* View more button */}
            {visibleCount < filteredServices.length && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="text-accent border border-accent hover:bg-accent hover:text-white rounded-full"
                  onClick={handleViewMore}
                >
                  Ver mais serviços
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <p>Carregando serviços...</p>
          </div>
        )}
      </div>
    </section>
  );
}
