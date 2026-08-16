import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Program from "./components/Program.jsx";
import Countdown from "./components/Countdown.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Program />
        <Countdown />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
