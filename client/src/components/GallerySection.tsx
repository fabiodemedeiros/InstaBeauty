export default function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Interior do salão Estúdio Inara",
      className: "col-span-2 row-span-2"
    },
    {
      url: "https://pixabay.com/get/g8d9cb4e881d11af8d463e102bda6bd757bbc6bdc6d6833c8f59ba698e5193921af929b528deafc10c74c9eb6f923fdbe7c3ce960e324e700f5d118e202dc3171_1280.jpg",
      alt: "Serviço de manicure",
      className: ""
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Tratamento facial",
      className: ""
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Estação de cabelo",
      className: ""
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Serviço de penteado",
      className: ""
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Nosso Espaço</h2>
          <p className="text-neutral-900/70 max-w-xl mx-auto mb-8">
            Um ambiente elegante e acolhedor projetado para seu conforto e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative aspect-square overflow-hidden rounded-lg shadow-md ${image.className}`}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
