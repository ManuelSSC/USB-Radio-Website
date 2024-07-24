import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { SwiperCards } from "./components/SwiperCards";
import { Footer } from "./components/Footer";
import "./Styles/App.css";

export function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <SwiperCards />
        </section>
        <section>
          <Layout />
        </section>
      </main>
      <Footer />
    </div>
  );
}
