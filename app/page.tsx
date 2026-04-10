import Navbar               from "@/components/Navbar";
import Hero                 from "@/components/sections/Hero";
import WhyROASWrong         from "@/components/sections/WhyROASWrong";
import Solution             from "@/components/sections/Solution";
import SignalReconciliation  from "@/components/sections/SignalReconciliation";
import CapabilitySummary    from "@/components/sections/CapabilitySummary";
import CTA                  from "@/components/sections/CTA";
import Footer               from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ① Hero — decisioning OS positioning */}
        <Hero />

        {/* ② Market pain — why legacy measurement fails */}
        <WhyROASWrong />

        {/* ③ Decisioning loop — primary visual centerpiece */}
        <Solution />

        {/* ④ Signal reconciliation — one proof section, no misleading comparison */}
        <section id="reconciliation">
          <SignalReconciliation />
        </section>

        {/* ⑤ Capability summary — four integrated capabilities, no loop repetition */}
        <section id="capabilities">
          <CapabilitySummary />
        </section>

        {/* ⑥ CTA */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
