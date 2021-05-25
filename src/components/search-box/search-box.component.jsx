import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handlerChange, props }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handlerChange}
    />
    // <input
    //   className="search"
    //   type="search"
    //   placeholder={placeholder}
    //   onChange={(e) => {
    //     this.setState({ searchField: e.target.value });
    //   }}
    // />
  );
};
