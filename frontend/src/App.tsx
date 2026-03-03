import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";


const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Events = lazy(() => import("./pages/Events"));
const DynamicRegister = lazy(() => import("./pages/DynamicRegister"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TeamDashboard = lazy(() => import("./pages/TeamDashboard "));
const HackathonForm = lazy(() => import("./components/HackathonForm"));
const HackathonBoard = lazy(() => import("./components/HackathonBoard"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register/:event" element={<DynamicRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hackathon" element={<HackathonForm />} />
        <Route path="/team" element={<TeamDashboard />} />
        <Route path="/hackathonboard" element={<HackathonBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
