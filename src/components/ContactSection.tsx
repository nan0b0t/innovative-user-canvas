import React, { useRef, useEffect, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

// Define the types for our contact form
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);

    // Using the provided EmailJS credentials
    const serviceId = 'service_ho33o2b';
    const templateId = 'template_6l9xete';
    const userId = 'FcDbzGGqWNRPRfIYg';

    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId).then(() => {
      toast.success('Message sent successfully!');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }).catch(error => {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
  };
  return <section id="contact" ref={sectionRef} className="py-20 bg-portfolio-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:olayinkashittu2003@gmail.com" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">olayinkashittu2003@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-portfolio-light/70">Kaduna, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">+2349121212672
                </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4">Let's connect</h3>
              <p className="text-portfolio-light/70 mb-4">
                I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something, or just want to say hello, then get in touch.
              </p>
            </div>
          </div>
          
          <div ref={formContainerRef} className="opacity-0">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50 transition-all duration-300" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50 transition-all duration-300" placeholder="Your email" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent/50 transition-all duration-300 resize-none" placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className={cn("w-full flex items-center justify-center gap-2 bg-gradient-to-r from-portfolio-accent to-portfolio-highlight text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-portfolio-accent/30 transition-all duration-300", isSubmitting && "opacity-70 cursor-not-allowed")}>
                {isSubmitting ? <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </> : <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;