export const PageTitle = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <h1 className="font-bold text-xl">{children}</h1>;
};
