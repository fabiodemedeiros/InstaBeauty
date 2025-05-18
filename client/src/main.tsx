import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta tags for SEO
document.title = "Estúdio de Beleza Inara | Desperte sua beleza natural";

// Create meta description
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Estúdio de Beleza Inara - Serviços profissionais de manicure, pedicure, estética facial, depilação e unhas em gel. Agende seu horário hoje!";
document.head.appendChild(metaDescription);

// Create Open Graph meta tags
const ogTags = [
  { property: "og:type", content: "website" },
  { property: "og:url", content: window.location.href },
  { property: "og:title", content: "Estúdio de Beleza Inara | Desperte sua beleza natural" },
  { property: "og:description", content: "Descubra serviços de beleza profissionais para realçar sua beleza natural no Estúdio Inara." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80" },
];

ogTags.forEach(tag => {
  const meta = document.createElement("meta");
  meta.property = tag.property;
  meta.content = tag.content;
  document.head.appendChild(meta);
});

// Add Google Fonts
const fontLink = document.createElement("link");
fontLink.rel = "preconnect";
fontLink.href = "https://fonts.googleapis.com";
document.head.appendChild(fontLink);

const fontGstaticLink = document.createElement("link");
fontGstaticLink.rel = "preconnect";
fontGstaticLink.href = "https://fonts.gstatic.com";
fontGstaticLink.crossOrigin = "";
document.head.appendChild(fontGstaticLink);

const fontFamily = document.createElement("link");
fontFamily.rel = "stylesheet";
fontFamily.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap";
document.head.appendChild(fontFamily);

createRoot(document.getElementById("root")!).render(<App />);
