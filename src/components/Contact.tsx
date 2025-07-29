import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (event) => {
    // In a real implementation, this would update state
    console.log("Input changed:", event.target.name, event.target.value);
  };
  
  const handleSubmit = () => {
    // In a real implementation, this would submit the form
    console.log("Form submitted");
    alert("Message sent successfully!");
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 content-center">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-muted-foreground">
          Have a project in mind or want to collaborate? Feel free to reach out to me through the contact form below or via email.
        </p>
        
        <div className="content-center grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:anandhandevdarshan@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    anandhandevdarshan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+919865645563" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 98656 45563
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Coimbatore, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {/* GitHub Link */}
                <div className="relative" style={{ zIndex: 20 }}>
                  <a 
                    href="https://github.com/Devdarshananandhan" 
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-card hover:bg-primary hover:text-white p-3 rounded-full border border-border transition-colors cursor-pointer"
                    aria-label="GitHub Profile"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                
                {/* LinkedIn Link */}
                <div className="relative" style={{ zIndex: 20 }}>
                  <a 
                    href="https://www.linkedin.com/in/devdarshan-a-416654291/" 
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-card hover:bg-primary hover:text-white p-3 rounded-full border border-border transition-colors cursor-pointer"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}