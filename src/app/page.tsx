import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-red-500 flex  justify-between p-2 ">
      <p>This is the Root Page</p>
      <Link href={{ pathname: "/login" }}>Login</Link>
    </main>
  );
}
