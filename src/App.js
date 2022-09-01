import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DestinationsPage from "./pages/DestinationsPage";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import PartnerPage from "./pages/PartnerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='destination' element={<DestinationsPage />}></Route>
        <Route path='about' element={<AboutPage />}></Route>

        <Route path='faq' element={<FAQ />}></Route>
        <Route path='partners' element={<PartnerPage />}></Route>
        <Route path='terms' element={<PartnerPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
