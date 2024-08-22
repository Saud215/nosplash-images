import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    setSearchText(searchValue);
  };

  return (
    <section>
      <h2 className="title">Nosplash images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
