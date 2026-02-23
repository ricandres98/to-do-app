const FilterPanel = ({ children }: React.PropsWithChildren) => {

  return (
    <ul 
      className="max-w-sm flex justify-between lg:flex-wrap lg:gap-2.5 
      rounded-md bg-gray-100 dark:bg-gray-900 dark:lg:bg-transparent lg:bg-transparent"
    >
      {children}
    </ul>
  );
};

export { FilterPanel };
