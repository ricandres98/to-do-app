import Link from "next/link";

type AnchorNativeTypes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = {
  href: string;
  title: string;
  children: React.ReactNode;
} & AnchorNativeTypes;

const AbsolutePositionLink = ({
  href,
  title,
  children,
  ...linkProps
}: Props) => {
  return (
    <Link
      href={href}
      title={title}
      {...linkProps}
      className={`
          absolute left-2.5 top-2.5 z-10 w-fit
          font-bold text-lg
          hover:underline ${linkProps.className}`}
    >
      {children}
    </Link>
  );
};

export { AbsolutePositionLink };
