// Contact Information - Edit this file to update contact details

export const contactInfo = {
  email: "aradhyanextgen@gmail.com",
  displayEmail: "hello@aradhyanextgen.com",
  phone: "+91 6360076463",
  phoneClean: "916360076463",
  location: "Bangalore, India",
  
  // Business hours
  hours: {
    weekdays: "9:00 AM - 6:00 PM IST",
    weekends: "By Appointment",
  },
};

export const whatsappConfig = {
  phoneNumber: "916360076463",
  defaultMessage: "Hi Aradhya NextGen, I visited your website and I'm interested in your services. Please contact me with details.",
  proposalMessage: "Hello Aradhya NextGen Team 👋\nI would like to get a proposal for my project. Please reach out to discuss.",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || whatsappConfig.defaultMessage);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${message}`;
};

export const getPhoneUrl = () => `tel:${contactInfo.phone.replace(/\s/g, '')}`;
export const getEmailUrl = () => `mailto:${contactInfo.email}`;
