export default function Title({
  children,
  isCentered,
}: {
  children: React.ReactNode;
  isCentered?: boolean;
}) {
  return (
    <h1
      className={`px-5 py-8 ${isCentered ? "text-center" : "text-left"} text-title text-4xl md:p-10`}
    >
      {children}
    </h1>
  );
}
