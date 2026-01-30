import "./FilterPanel.css";

const FilterPanel = ({ children }: React.PropsWithChildren) => {

  return (
    <div className="FilterPanel">
      {children}
    </div>
  );
};

export { FilterPanel };
