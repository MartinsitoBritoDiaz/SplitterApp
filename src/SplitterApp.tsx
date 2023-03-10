import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CardCarculator } from "./components/CardCarculator";

function SplitterApp() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <CardCarculator />
      </div>

      <Footer />
    </div>
  );
}

export default SplitterApp;
