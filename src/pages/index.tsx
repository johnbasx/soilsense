import { CallToAction } from "@/components/CTA/CallToAction";
import Carousel from "@/components/carousel/Carousel";
import MonitorAndControl from "@/components/CTA/MonitorAndControl";
import OurAppsSteps from "@/components/CTA/OurAppsSteps";
import PersonalisedFarming from "@/components/CTA/PersonalisedFarming";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero/Hero";
import ReviewSection from "@/components/reviews/ReviewSection";
// import { Hero } from '@components/Hero'
// import { Pricing } from '@components/Pricing'
// import { PrimaryFeatures } from '@components/PrimaryFeatures'
// import { Reviews } from '@components/Reviews'
// import { SecondaryFeatures } from '@components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <title>SoilSense</title>
      <meta
        name='description'
        content='By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.'
      />

      <Header dark={false} carousel />
      <main>
        {/* <Carousel /> */}
        <Hero />
        <PersonalisedFarming />
        <MonitorAndControl />
        <OurAppsSteps />
        <ReviewSection />
        <CallToAction />
        {/*<PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  );
}
