import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "A Camila é maravilhosa! Meu cabelo nunca ficou tão bonito. O ambiente do estúdio é super aconchegante e elegante.",
      author: "Maria Lima",
      initials: "ML",
      client_since: "Cliente desde 2021"
    },
    {
      text: "As unhas em gel da Isabela são perfeitas! Duram muito e sempre recebo muitos elogios. Atendimento impecável!",
      author: "Carolina Santos",
      initials: "CS",
      client_since: "Cliente desde 2022"
    },
    {
      text: "A massagem relaxante é incrível! Saí renovada e já agendei meu próximo horário. O Estúdio Inara é referência em qualidade.",
      author: "Juliana Pereira",
      initials: "JP",
      client_since: "Cliente desde 2020"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">O que nossos clientes dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex text-primary mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current" size={16} />
                ))}
              </div>
              <p className="text-neutral-900/70 mb-4 text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-xs text-neutral-900/60">{testimonial.client_since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
