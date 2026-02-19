const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="py-20 text-center space-y-6">
      <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">{title}</h1>

      <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export { Hero };
