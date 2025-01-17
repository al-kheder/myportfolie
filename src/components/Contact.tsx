"use client";
import { Mail, MapPin, Phone } from "lucide-react";


export default function Contact() {
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mx-auto">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <a href="mailto:alkhdyyr@gmail.com">alkhdyyr@gmail.com</a>
              </div>
              <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <a href="tel:+4915901184486">+49 (159) 01184486 </a>
              </div>
              <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <span>Germany, Berlin</span>
              </div>
            </div>
            </div>
       
        </div>
      </div>
    </section>
  );
}
