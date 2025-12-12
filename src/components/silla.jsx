import React from 'react'


const SillaRuedas = (props) => {
  const { nombre, imagen, descripcion } = props;

  return (
    <article
      tabIndex="0"
      className="flex flex-col items-start gap-3 p-4 rounded-lg w-[361px] h-[548px] border border-solid border-[var(--colecci-n-variable-gris1)]"
    >
      {/* Imagen */}
      <figure className="w-full">
        <img
          src={imagen}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover rounded-md "
        />
        <figcaption className="sr-only">{nombre}</figcaption>
      </figure>

      <header className="w-full">
        <h2 className="text-xl font-bold">
          <strong>{nombre}</strong>
        </h2>
        <p className="mt-2">{descripcion}</p>
      </header>
      
      <p className="text-sm leading-relaxed">
        {props.children}
      </p>
    </article>
  );
};
export default SillaRuedas;