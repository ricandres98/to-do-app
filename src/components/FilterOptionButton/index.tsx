import "./FilterOptionButton.css";

const FilterOptionButton = ({
  id,
  text,
  defaultValue = false,
  setFilter,
  filter,
  quantity,
}) => {
  const onChange = () => {
    setFilter(id);
    console.log("Filtro seleccionado:", filter);
  };

  return (
    <label className="FilterOptionButton">
      <input
        type="radio"
        name="filter"
        id={id}
        defaultChecked={defaultValue}
        onClick={onChange}
      />
      {`${text} (${quantity})`}
    </label>
  );
};

export { FilterOptionButton };
