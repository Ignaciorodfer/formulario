import { useParams } from 'react-router-dom';

const SillaDetalle = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">Detalles de la Silla de Ruedas</h2>
      <p className="text-lg text-center mx-auto max-w-2xl">Mostrando detalles para la silla con ID: {id}</p>
    </div>
  );
};

export default SillaDetalle;
