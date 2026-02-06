import type { filter } from "../../types/task";
import "./FilterOptionButton.css";

type Props = {
  id: filter,
  text: string,
  setFilter: React.Dispatch<React.SetStateAction<filter>>,
  filter: filter,
  quantity: number
  defaultValue?: boolean
}

const FilterOptionButton = ({
  id,
  text,
  defaultValue = false,
  setFilter,
  filter,
  quantity,
}: Props) => {
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
