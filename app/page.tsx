import Navbar          from "@/components/Navbar";
import Hero            from "@/components/sections/Hero";
import WhyROASWrong    from "@/components/sections/WhyROASWrong";
import Problem         from "@/components/sections/Problem";
import Solution        from "@/components/sections/Solution";
import LensOS          from "@/components/sections/LensOS";
import Output          from "@/components/sections/Output";
import HowItWorks      from "@/components/sections/HowItWorks";
import Differentiation from "@/components/sections/Differentiation";
import IdealCustomer   from "@/components/sections/IdealCustomer";
import CTA             from "@/components/sections/CTA";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ① Hero — decisioning OS positioning with live budget decision widget */}
        <Hero />

        {/* ② Why legacy measurement fails — the market gap */}
        <WhyROASWrong />

        {/* ③ The concrete problem — conflicting signals, no confident decision */}
        <section id="problem">
          <Problem />
        </section>

        {/* ④ The architecture — Measure → Validate → Simulate → Decide loop */}
        <Solution />

        {/* ⑤ Platform — five integrated capabilities */}
        <section id="lensos">
          <LensOS />
        </section>

        {/* ⑥ What the output looks like — per-channel decisions with evidence */}
        <Output />

        {/* ⑦ Technical foundation — built differently from the ground up */}
        <HowItWorks />

        {/* ⑧ Competitive differentiation — LensOS vs legacy commercial intelligence */}
        <Differentiation />

        {/* ⑨ Who it's for — enterprise growth teams */}
        <IdealCustomer />

        {/* ⑩ CTA — enterprise close */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
