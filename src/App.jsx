import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Program from "./components/Program/Program.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import Register from "./components/Register/Register.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AdvisoryBoard from "./components/AdvisoryBoard/AdvisoryBoard.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Tickets from "./components/Tickets/Tickets.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Workshop from "./components/Workshop/Workshop.jsx";
import FindWorkshopPage from "./components/FindWorkshop/FindWorkshop.jsx";
import Day1Page from "./components/Day1/Day1.jsx";
import Day2Page from "./components/Day2/Day2.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Hero />
      <div style={{ display: "flex", justifyContent: "center", padding: "2.5rem 1rem" }}>
        <Link to="/tickets" className="hero__cta" style={{ position: "static", transform: "none" }}>
          <Ticket className="hero__cta-icon" />
          Get Summit Pass
        </Link>
      </div>
      <Program />
      <Countdown />
      <Register />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // When arriving from another page with a section target (e.g. clicking a
  // section link while on /contact), scroll to that section once it renders.
  useEffect(() => {
    if (!location.state?.scrollTo) return;
    const id = location.state.scrollTo;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [location.state?.scrollTo]);

  // Scroll to top on route change, unless a section scroll was requested.
  useEffect(() => {
    if (!location.state?.scrollTo) window.scrollTo(0, 0);
  }, [location.pathname, location.state?.scrollTo]);

  // Legacy in-page anchors (e.g. "#workshops") are plain hrefs that the hash
  // router would otherwise treat as routes. Intercept them: scroll directly
  // when the section is on the current page, otherwise navigate home first.
  useEffect(() => {
    function handleClick(event) {
      const anchor = event.target.closest('a[href^="#"]:not([href^="#/"])');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      event.preventDefault();
      if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-paper-50 font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/venue" element={<FindWorkshopPage />} />
          <Route path="/day1" element={<Day1Page />} />
          <Route path="/day2" element={<Day2Page />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
