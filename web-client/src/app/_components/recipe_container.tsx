import Link from "next/link";

export default function RecipeContainer(props: {
  path: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={props.path}
      className="m-4 cursor-pointer rounded-lg bg-gray-400 p-4 hover:bg-gray-400/70"
    >
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-lg">{props.description}</p>
    </Link>
  );
}
