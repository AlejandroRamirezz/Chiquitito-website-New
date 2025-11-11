import { TextPressure } from "react-bits";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-foam)] flex flex-col items-center justify-center text-[var(--color-text)]">
      {/* Nav (optional placeholder) */}
      <header className="absolute top-0 w-full flex justify-between px-16 py-6 bg-white/70">
        <img src="/logo.webp" alt="Logo Chiquitito" className="h-8" />
        <nav className="flex items-center justify-around gap-8 font-sans text-lg font-semibold tracking-wide">
          <a href="#">Inicio</a>
          <a href="#">Los Cafés</a>
          <a href="#">Menú</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-[60vh] w-full bg-[url('/coffee_shop.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-6xl font-playfair mb-4 drop-shadow-md">
          Chiquitito Café
        </h1>
        <p className="text-lg font-sans max-w-md leading-relaxed drop-shadow-md">
          Meticulous Quality. Local Soul.
        </p>
      </section>

      {/* Best Sellers */}
      <section
        id="best_sellers"
        className="w-[80%] mx-auto h-40 pt-24 text-center"
      >
        <TextPressure speed={0.05} power={2}>
          <h2 className="text-5xl font-bebas text-[var(--color-espresso)]">
            Nuestros Best Sellers
          </h2>
        </TextPressure>
      </section>
    </div>
  );
}

export default App;
