import About from "./sections/about/About";
import { Dashboard } from "./sections/dashboard/Dashboard";
import Events from "./sections/events/Events";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import Stats from "./sections/stats/Stats";
import ProblemStatement from './sections/problemStatement/ProblemStatement'
import Timeline from "./sections/timeline/Timeline";
import TimelineMobile from "./sections/timeline/TimelineMobile";
import WhySection from "./sections/whySection/WhySection";

export const HomeRoute = () => {
  return (
    <div className="w-full min-h-screen bg-[#131313]">

      <section id="home">
        <Dashboard />
      </section>

      <section id="why">
        <WhySection />
      </section>

      <section id="problem">
        <ProblemStatement />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="events">
        <Events />
      </section>

      <div className="h-[30vh]" />

      <section id="about">
        <About />
      </section>

      <section id="timeline" className="hidden md:block">
        <Timeline />
      </section>

      <section id="timeline-mobile" className="block md:hidden lg:hidden">
        <TimelineMobile />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </div>
  );
};