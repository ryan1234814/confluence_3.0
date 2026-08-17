import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Program from "./components/Program/Program.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import Register from "./components/Register/Register.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Hero />
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
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
