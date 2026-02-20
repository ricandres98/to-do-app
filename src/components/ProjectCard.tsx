const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
};

export { ProjectCard };
