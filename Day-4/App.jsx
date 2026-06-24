import { useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProgramCard from "./ProgramCard";
import StatStrip from "./StatStrip";
import TestimonialCard from "./TestimonialCard";
import WhyUs from "./WhyUs";
import Contact from "./Contact";
import ApplyModal from "./ApplyModal";
import LearnMoreModal from "./LearnMoreModal";
import PageFooter from "./PageFooter";

import programsData from "./programs";
import testimonials from "./testimonials";

import "./App.css";

function App() {
  const [showApply, setShowApply] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [programs, setPrograms] = useState(programsData);

  return (
    <>
      <Navbar
        onApply={() => setShowApply(true)}
      />

      <Hero
        onApply={() => setShowApply(true)}
        onLearnMore={() => setShowLearnMore(true)}
      />

      <StatStrip />

      <Section id="programs">
        <SectionHeading
          eyebrow="ACADEMICS"
          title="Our Programs"
          subtitle="Explore our engineering programs."
        />

        <div className="grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.code}
              program={program}
              onApply={() => setShowApply(true)}
            />
          ))}
        </div>
      </Section>

      <WhyUs />

      <Section id="testimonials">
        <SectionHeading
          eyebrow="SUCCESS STORIES"
          title="Student Testimonials"
          subtitle="Hear from our alumni."
        />

        <div className="grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Section>

      <Contact />

      <PageFooter />

      {showApply && (
        <ApplyModal
          programs={programs}
          setPrograms={setPrograms}
          onClose={() => setShowApply(false)}
        />
      )}

      {showLearnMore && (
        <LearnMoreModal
          onClose={() => setShowLearnMore(false)}
          onApply={() => {
            setShowLearnMore(false);
            setShowApply(true);
          }}
        />
      )}
    </>
  );
}

export default App;