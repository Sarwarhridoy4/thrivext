import links from "@/data/links.json"; // Adjust path as needed
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Document</h1>
      <ul className="grid grid-cols-2 gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={`${link.color} hover:underline`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
