const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

export { ProjectCard };
