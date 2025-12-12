import Contenedor from "../components/contenedor.jsx";
import SillaRuedas from "../components/silla.jsx";
import listasillas from '../data/sillas.js';


function App() {



  return (
<Contenedor>
      <h1 className="h1_movileacces">
        Catálogo de Sillas de Ruedas
      </h1>
      <p>Explora nuestra selección completa de sillas de ruedas</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full
mt-8">
        {listasillas.map((silla) => (
          <SillaRuedas
            key={silla.id}
            nombre={silla.nombre}
            imagen={silla.imagen}
            descripcion={silla.descripcion}
          />
        ))}
      </div>
    </Contenedor>
  );
}

export default App;