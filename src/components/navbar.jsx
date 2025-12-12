import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative p-4 bg-blue-600 shadow-lg ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-white">
          Sillas de Ruedas
        </h1>

        <div className="flex items-center gap-6">
          {/* Botón hamburguesa */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú de navegación"
              className="text-3xl text-white p-2"
            >
              ☰
            </button>
          )}

          {/* Menú lateral */}
          {open && (
            <div className="flex gap-6">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Inicio
              </NavLink>

              <NavLink
                to="/sillas"
                onClick={() => setOpen(false)}
                className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Sillas
              </NavLink>

              <NavLink
                to="/discos"
                onClick={() => setOpen(false)}
                className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Discos
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
