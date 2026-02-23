import { Glow } from "./Glow";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full overflow-x-clip py-20 text-center">
      <Glow
        className="top-40 -rotate-40
          sm:top-30
          md:top-20 
          lg:top-0"
      />
      
      <Glow
        className="-bottom-40 right-40 rotate-40
          sm:-bottom-30
          lg:-bottom-60"
      />

      <div className="z-20 space-y-6">
        <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed dark:text-slate-400">
          {description}
        </p>
      </div>
    </section>
  );
};

export { Hero };
