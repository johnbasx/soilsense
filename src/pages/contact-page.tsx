import ContactSection from "@/components/contact/ContactSection";
import GetInTouch from "@/components/contact/GetInTouch";
import LookingForCareer from "@/components/contact/LookingForCareer";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Header />
      {/* Header */}

      {/* Contact Section */}
      <ContactSection />
      {/* <GetInTouch /> */}

      {/* CTA Section */}
      <LookingForCareer />
      <Footer />
    </div>
  );
};

export default ContactPage;
