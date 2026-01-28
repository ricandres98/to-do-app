import { FilterOptionButton } from "../FilterOptionButton";
import "./FilterPanel.css";

const FilterPanel = ({ filter, setFilter, tasks }) => {

  const filteredQuantity = (filter) => {
    return tasks.filter((task) => task.status === filter).length;
  }

  return (
    <div className="FilterPanel">
      <FilterOptionButton
        id="all"
        text="Todas"
        defaultValue={true}
        setFilter={setFilter}
        filter={filter}
        quantity={tasks.length}
      />
      <FilterOptionButton
        id="active"
        text="Pendientes"
        setFilter={setFilter}
        filter={filter}
        quantity={filteredQuantity("active")}
      />
      <FilterOptionButton
        id="completed"
        text="Completadas"
        setFilter={setFilter}
        filter={filter}
        quantity={filteredQuantity("completed")}
      />
    </div>
  );
};

export { FilterPanel };
