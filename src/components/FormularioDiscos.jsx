import { useState } from 'react';

const musicTypes = ["rock", "progressive", "punk", "trash"];

const FormularioDiscos = () => {
  const [formData, setFormData] = useState({
    nombreDisco: '',
    grupo: '',
    anoPublicacion: '',
    tipoMusica: '',
    localizacion: '',
    prestado: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.nombreDisco.trim().length < 5) {
      newErrors.nombreDisco = 'El nombre del disco debe tener al menos 5 caracteres.';
    }

    if (formData.grupo.trim().length < 5) {
      newErrors.grupo = 'El grupo o intérprete debe tener al menos 5 caracteres.';
    }

    if (!/^\d{4}$/.test(formData.anoPublicacion)) {
      newErrors.anoPublicacion = 'El año de publicación debe ser un número de 4 dígitos.';
    }

    if (!formData.tipoMusica) {
        newErrors.tipoMusica = 'Debe seleccionar un tipo de música.';
    }

    if (!/^ES-\d{3}[A-Z]{2}$/.test(formData.localizacion)) {
      newErrors.localizacion = 'El formato de localización debe ser ES-001AA.';
    }
    
    return newErrors;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
   
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Añadir Nuevo Disco</h2>
      <div className="mb-4">
        <label htmlFor="nombreDisco" className="block font-bold mb-1">Nombre del Disco</label>
        <input
          type="text"
          id="nombreDisco"
          name="nombreDisco"
          value={formData.nombreDisco}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.nombreDisco && <p className="text-red-500 text-xs italic">{errors.nombreDisco}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="grupo" className="block font-bold mb-1">Grupo o Intérprete</label>
        <input
          type="text"
          id="grupo"
          name="grupo"
          value={formData.grupo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.grupo && <p className="text-red-500 text-xs italic">{errors.grupo}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="anoPublicacion" className="block font-bold mb-1">Año de Publicación</label>
        <input
          type="text"
          id="anoPublicacion"
          name="anoPublicacion"
          value={formData.anoPublicacion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.anoPublicacion && <p className="text-red-500 text-xs italic">{errors.anoPublicacion}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="tipoMusica" className="block font-bold mb-1">Tipo de Música</label>
        <select
          id="tipoMusica"
          name="tipoMusica"
          value={formData.tipoMusica}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>Seleccione un tipo</option>
          {musicTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.tipoMusica && <p className="text-red-500 text-xs italic">{errors.tipoMusica}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="localizacion" className="block font-bold mb-1">Localización (Estantería)</label>
        <input
          type="text"
          id="localizacion"
          name="localizacion"
          value={formData.localizacion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="ES-001AA"
        />
        {errors.localizacion && <p className="text-red-500 text-xs italic">{errors.localizacion}</p>}
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="prestado"
          name="prestado"
          checked={formData.prestado}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="prestado" className="font-bold">Prestado</label>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Guardar Disco
      </button>
    </form>
  );
};

export default FormularioDiscos;