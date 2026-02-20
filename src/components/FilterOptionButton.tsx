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
          lg:flex-nowrap
          ${
            isSelected
              ? `bg-gray-200  text-gray-900
               hover:bg-gray-200  hover:text-gray-900
               dark:bg-gray-700 dark:text-slate-50 
               dark:hover:bg-gray-700 dark:hover:text-slate-50
               `
              : "hover:bg-gray-100 dark:hover:bg-gray-900"
          }
          dark:text-slate-50`}
      >
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
