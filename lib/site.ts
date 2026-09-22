export const clinic = {
  name: "Odonto Center - Chapecó",
  phoneDisplay: "(49) 99192-7373",
  phoneE164: "+5549991927373",
  whatsappNumber: "5549991927373",
  whatsappMessage:
    "Olá! Vim pelo site da Odonto Center e gostaria de agendar uma avaliação.",
  rating: "5,0",
  reviewCount: 179,
  city: "Chapecó",
  state: "SC",
} as const;

export const whatsappUrl = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
  clinic.whatsappMessage,
)}`;

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Odonto%20Center%20Chapec%C3%B3&query_place_id=ChIJe-BoIqm15JQRkUPZPZc6qjc";

export const navigation = [
  { label: "A Clínica", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
] as const;
