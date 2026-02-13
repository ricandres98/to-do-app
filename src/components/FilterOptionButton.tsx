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

  return (
    <label className="inline-block p-2 py-1 px-2.5 rounded-md cursor-pointer border border-bright-color-1 text-nowrap lg:flex-nowrap">
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
  );
};

export { FilterOptionButton };
