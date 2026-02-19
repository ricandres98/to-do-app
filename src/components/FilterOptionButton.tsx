import type { filter } from "@/types/filter";

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

  const isSelected = filter === id;

  return (
    <li>
      <label 
        className={`
          inline-block px-3 py-2
          text-sm
          rounded-md cursor-pointer 
          hover:bg-gray-100
          ${isSelected ? "bg-gray-200 text-gray-900" : ""}
          lg:flex-nowrap`}>
        <input
          className="mr-2.5"
          type="radio"
          name="filter"
          id={id}
          defaultChecked={defaultValue}
          onClick={onChange}
        />
        {`${text} (${quantity})`}
      </label>
    </li>
  );
};

export { FilterOptionButton };
