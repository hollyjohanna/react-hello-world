//Key react dependencies
import ReactDOM from "react-dom/client";
//Import our components
import Hero from "./components/Hero";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import FirstUseState from "./components/FirstUseState";
import Counter from "./components/Counter";
import Modals from "./components/Modals";
import Footer from "./components/Footer";
import Props from "./components/Props";
import Dinosaurs from "./components/Dinosaurs";
import MapSomeData from "./components/MapSomeData";
//Import our styles
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Hero />
    <Message />
    <Gallery />
    <FirstUseState />
    <Counter />
    <Modals />
    <Props />
    <Dinosaurs />
    <MapSomeData />
    <Footer />
  </>
);
