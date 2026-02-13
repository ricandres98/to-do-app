import Link from "next/link";

const AbsolutePositionLink = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      title={title}
      className={`
          absolute left-2.5 top-2.5 z-10
          text-purple-white font-bold text-lg
          hover:underline`}
    >
      {children}
    </Link>
  );
};

export { AbsolutePositionLink };
