import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const publicKey = 'WnkY3vrZmkxisp5Mf'
  const serviceId = 'service_op8rvvl'
  const templateId = 'template_81hculp'
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current!, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast({
            title: "Inquiry Sent!",
            description: "We'll get back to you soon.",
          });
          form.current?.reset();
        },
        (error) => {
          toast({
            title: "Failed to send",
            description: "Please try again later.",
            variant: "destructive",
          });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
              Let's Work Together
            </h2>
            <p className="text-base md:text-xl text-muted-foreground px-2">
              Ready to start your next project? Get in touch with our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Email</div>
                    <a href="mailto:info@ozobags.com" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base break-all">
                      info@ozobags.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Phone</div>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base">
                      00 91 755 9886665
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Location</div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      48/1016 A <br />
                      Karugapilly Junction<br />
                      Desabhimani Rd, Cochin -682026<br />
                      Kerala - India<br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-4 md:p-6 rounded-lg mb-4">
                <h4 className="font-display font-semibold text-primary mb-2 text-sm md:text-base">
                  Order Quantity
                </h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  We accommodate any amount of units. Contact us for your custom requirements.
                </p>
              </div>

              <div className="bg-accent/5 p-4 md:p-6 rounded-lg">
                <h4 className="font-display font-semibold text-primary mb-2 text-sm md:text-base">
                  Delivery Coverage
                </h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  Kerala and across India. We also export internationally to meet global demand.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      required
                      className="w-full h-11 md:h-12 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="user_company"
                      placeholder="Company name"
                      required
                      className="w-full h-11 md:h-12 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                    className="w-full h-11 md:h-12 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="user_mobile"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full h-11 md:h-12 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 h-12 md:h-14 text-base font-semibold"
                >
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

