// Page-level metadata to hide from sidebar
export const metadata = {
  title: "Thrivext", // Title displayed in browser tab

  display: "hidden", // Hides this page from sidebar
};

import Logo from "@/assets/logo";
import next from "@/public/assets/nextlogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Docs() {
  const courses = [
    {
      id: 1,
      href: "/0_gettingstarted",
      label: "Next Level Web Development",
      des: "Next Level Web Development",
      color: "text-gray-300",
    },
  ];

  return (
    <div className="min-h-screen w-full z-50 flex items-center justify-center bg-[var(--color-background)] text-[var(--foreground)]">
      <div className="space-y-4 text-center items-center flex flex-col">
        <div className="flex flex-col items-center">
          <div className="h-32 rounded-full overflow-hidden relative">
            <Logo className="w-32 bg-white" />
          </div>
          <h1 className="text-2xl font-semibold">Course Docs</h1>
        </div>

        {courses.map((course) => (
          <Link
            href={course.href}
            key={course.id}
            className="rounded-xl flex items-center justify-center bg-[#0D0E1F]"
          >
            <Image
              alt="next"
              width={80}
              height={80}
              className="w-20 p-3"
              src={next}
            />
            <div
              className={`${course.color} text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:underline p-3.5 ps-0 rounded-lg hover:bg-white transition-all duration-300 inline-block`}
            >
              {course.des}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// This will prevent the layout from being applied globally if you need a custom layout
export const useLayout = () => null;
