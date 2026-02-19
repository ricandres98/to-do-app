const FilterPanel = ({ children }: React.PropsWithChildren) => {

  return (
    <ul 
      className="flex flex-wrap gap-2.5"
    >
      {children}
    </ul>
  );
};

export { FilterPanel };
