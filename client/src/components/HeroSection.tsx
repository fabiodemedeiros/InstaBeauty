import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-neutral-900/40"></div>
      <div className="relative container mx-auto px-6 py-20 pt-28 text-center text-white z-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          Desperte sua beleza natural <br className="hidden md:block" />no Estúdio Inara
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-white/90">
          Cuidados personalizados para realçar sua beleza em um ambiente acolhedor e elegante.
        </p>
        <Button
          asChild
          className="bg-primary text-accent hover:bg-primary/90 font-medium px-8 py-6 rounded-full shadow-lg"
          size="lg"
        >
          <a href="#agendamento">Agende agora</a>
        </Button>
      </div>
    </section>
  );
}
