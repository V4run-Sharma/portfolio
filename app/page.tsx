import { links } from "@/lib/data";

export default function Home() {
  return (
    <main className="text-5xl font-black">
      {links.map((link) => (
        <p>{link.name}</p>
      ))}
    </main>
  );
}
