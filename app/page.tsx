import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Statement from "./components/Statement";
import Platform from "./components/Platform";
import Testimonials from "./components/Testimonials";
import Visuals from "./components/Visuals";
import Workflow from "./components/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Visuals />
      <Divider />
      <Logos />
      <Divider />
      <Statement />
      <Divider />
      <Platform />
      <Divider variant="dark" />
      <Workflow />
      <Divider variant="dark" />
      <Testimonials />
      <Divider variant="dark" />
      <ForWho />
      <Divider />
      <Faq />
      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
