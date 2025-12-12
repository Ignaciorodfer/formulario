function Contenedor({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-white flex
flex-col items-center justify-center p-8">

      {children}
    </div>
  );
}

export default Contenedor;