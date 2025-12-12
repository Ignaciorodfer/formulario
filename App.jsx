import { Routes, Route } from "react-router-dom";
import NavBar from './src/components/navbar';
import Inicio from './src/components/Inicio';
import SillasPage from './src/pages/sillaspage.jsx';
import SillaDetalle from "./src/pages/SillaDetalle";
import DiscosPage from "./src/pages/DiscosPage";

function App() {
  return (
    <>

    <header>
      <NavBar />
      </header>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sillas" element={<SillasPage />} />
          <Route path="/sillas/:id" element={<SillaDetalle />} />
          <Route path="/discos" element={<DiscosPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
