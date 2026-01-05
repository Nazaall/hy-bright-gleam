import whatsappIcon from "@/assets/whatsapp-icon.png";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917902472230&text=Hi+OZO%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 object-contain" />
    </a>
  );
};
