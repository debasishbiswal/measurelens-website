import Navbar          from "@/components/Navbar";
import Hero            from "@/components/sections/Hero";
import WhyROASWrong    from "@/components/sections/WhyROASWrong";
import Problem         from "@/components/sections/Problem";
import Solution        from "@/components/sections/Solution";
import LensOS          from "@/components/sections/LensOS";
import HowItWorks      from "@/components/sections/HowItWorks";
import Output          from "@/components/sections/Output";
import Differentiation from "@/components/sections/Differentiation";
import IdealCustomer   from "@/components/sections/IdealCustomer";
import CTA             from "@/components/sections/CTA";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ① Above the fold — immediate value + curiosity */}
        <Hero />

        {/* ② Hook — why every ROAS number is structurally wrong */}
        <WhyROASWrong />

        {/* ③ The concrete problem — four platforms, four answers */}
        <section id="problem">
          <Problem />
        </section>

        {/* ④ The solution — triangulation, evidence scoring */}
        <Solution />

        {/* ⑤ LensOS — the agentic AI reasoning engine */}
        <section id="lensos">
          <LensOS />
        </section>

        {/* ⑥ How it works — simple 4-step flow */}
        <HowItWorks />

        {/* ⑦ Output — tangible per-channel decisions */}
        <Output />

        {/* ⑧ Differentiation — vs dashboards, MTA, MMM */}
        <Differentiation />

        {/* ⑨ Ideal customer — who this is built for */}
        <IdealCustomer />

        {/* ⑩ CTA — request access */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
