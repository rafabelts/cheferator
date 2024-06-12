import Link from "next/link";

export default function RecipeContainer(props: {
  path: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={props.path}
      className="bg-container
      hover:bg-container/70
      m-4
      cursor-pointer
      rounded-lg
      p-4"
    >
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-lg">{props.description}</p>
    </Link>
  );
}
