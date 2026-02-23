/**
 * 
 * @param className - The element is position absolute, so you need to provide the position with this prop
 * @returns 
 */
const Glow = ({ className }: {className: string}) => {
  return (
    <div
      aria-hidden="true"
      className={`
          absolute z-10 rounded-full pointer-events-none
          bg-linear-(--gradient-attention-horizontal) opacity-10 
          h-50 w-27 blur-xl
          xs:h-72 xs:w-40
          sm:h-72 sm:w-40 sm:blur-3xl sm:opacity-20
          md:h-100 md:w-55 
          lg:h-120 lg:w-65
					${className}
          `}
    ></div>
  );
};

export { Glow };
