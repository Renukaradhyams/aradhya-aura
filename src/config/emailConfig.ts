// EmailJS Configuration
// Edit these values with your EmailJS credentials

export const emailConfig = {
  SERVICE_ID: "aradhyanextgen", // Replace with your EmailJS service ID
  TEMPLATE_ID: "aradhyanextgen", // Replace with your EmailJS template ID
  PUBLIC_KEY: "JtOYPhAK_C4TXDTmq", // Replace with your EmailJS public key
  RECEIVER_EMAIL: "aradhyanextgen@gmail.com",
};

// WhatsApp Configuration
export const whatsappConfig = {
  PHONE_NUMBER: "916360076463", // +91 6360076463
  DEFAULT_MESSAGE: "Hello Aradhya NextGen Team 👋\nI am interested in building a website. Please contact me with details.",
};

// Generate WhatsApp URL
export const getWhatsAppUrl = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || whatsappConfig.DEFAULT_MESSAGE);
  return `https://wa.me/${whatsappConfig.PHONE_NUMBER}?text=${message}`;
};
