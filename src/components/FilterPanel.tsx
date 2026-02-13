const FilterPanel = ({ children }: React.PropsWithChildren) => {

  return (
    <div 
      className="flex flex-wrap gap-2.5 lg:flex-nowrap"
    >
      {children}
    </div>
  );
};

export { FilterPanel };
