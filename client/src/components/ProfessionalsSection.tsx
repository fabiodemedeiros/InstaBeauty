export default function ProfessionalsSection() {
  const professionals = [
    {
      name: "Camila Duarte",
      specialty: "Especialista em Cabelos e Mãos e Pés",
      image: "https://images.unsplash.com/photo-1567894340315-735fa3686c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Cortes", "Coloração", "Manicure", "Pedicure"]
    },
    {
      name: "Isabela Nogueira",
      specialty: "Especialista em Estética, Depilação e Bem-estar",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Unhas em Gel", "Sobrancelhas", "Depilação", "Massagens"]
    }
  ];

  return (
    <section id="profissionais" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Nossos Profissionais</h2>
          <p className="text-neutral-900/70 max-w-xl mx-auto">
            Conheça nossa equipe de especialistas dedicados a proporcionar a melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {professionals.map((professional, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md flex">
              <div 
                className="w-1/3 bg-cover bg-center" 
                style={{ backgroundImage: `url('${professional.image}')` }}
                aria-label={`Foto de ${professional.name}`}
              ></div>
              <div className="w-2/3 p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{professional.name}</h3>
                <p className="text-neutral-900/70 mb-4 text-sm">{professional.specialty}</p>
                <div className="flex flex-wrap gap-2">
                  {professional.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-secondary text-accent-light px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
