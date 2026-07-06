import { Mail, MapPin, Phone, PhoneCall, Send } from 'lucide-react'
import React, { useState } from 'react'
import { BsDiscord } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { LiaGithub, LiaGithubSquare, LiaLinkedin } from 'react-icons/lia'
import { cn } from '@/lib/utils'
import { useToast } from '../hooks/use-toast'
import emailjs from '@emailjs/browser'

export const ContactSection = () => {

  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )




  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        e.target.reset(); // Clear the form
      })
      .catch(() => {
        toast({
          title: "Failed to Send",
          description: "Oops! Something went wrong. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id='Contact'
      className=' py-24  pxq 4 relative bg-secondary/30'

    >
      <div className='app-container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'> Touch</span>
        </h2>
        <p className='text-center text-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new ideas and opportunities.
        </p>

        <div className=' grid grid-cols- md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6' > Contact Information</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href="mailto:hello@gmail.com"
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    ayush33kumar3@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href="tel:+912345678901"
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +91 8287220698
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <a
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    New Delhi, India
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space x-4 justify-center gap-4'>
                <a href="https://www.linkedin.com/in/ayush-kumar-457578307/" target="_blank">
                  <FaLinkedinIn size={30} />
                </a>
                <a href="https://github.com/Ayushkumar290" target="_blank">
                  <LiaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sd">
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor="name"
                  className='block text-sm fornt-medium mb-2'
                >
                  Your Name

                </label>
                <input
                  type="text"
                  id='name'
                  value={formData.name}
                  name="name"
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outlind-hidden focus:ring-2 focus:ring-primary '
                  placeholder='Rust Cohle'
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className='block text-sm fornt-medium mb-2'
                >
                  Your Email

                </label>
                <input
                  type="email"
                  id='email'
                  value={formData.email}
                  name="email"
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outlind-hidden focus:ring-2 focus:ring-primary '
                  placeholder='John@gmail.com'
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className='block text-sm fornt-medium mb-2'
                >
                  Message

                </label>
                <textarea

                  id='message'
                  name="message"
                  value={formData.message}
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder='Hi, I did like to talk about...  '
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",

                )}
              >
                {isSubmitting ? "Sending..." : "Send Massage"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  )
}
