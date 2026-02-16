import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
		<div className="px-5">
			<div
				className={`
					container my-18 mx-auto py-2.5 px-5
					bg-purple-white rounded-2xl
			`}
			>
				{children}
			</div>
		</div>
  );
}
