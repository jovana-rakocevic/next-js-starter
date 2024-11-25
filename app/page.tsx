import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 flex justify-center">
      <span>
        See repository on Github ✨
        <Link
          href={"https://github.com/jovana-rakocevic/next-js-starter"}
          className="text-blue-400 underline">
          here
        </Link>
        ✨
      </span>
    </div>
  );
}
