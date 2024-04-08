const Buscador = ({ search, onChange }) => {
  return (
    <>
      <form className="d-flex text-white" role="search">
        <input
          className="form-control me-2 my-3"
          type="search"
          placeholder="Buscar Colaborador"
          aria-label="Search"
          value={search}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default Buscador;
