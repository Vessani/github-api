"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeaderTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erro de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex flex-row items-center bg-white dark:bg-slate-900 mt-[31px] ml-6 mr-6 justify-between w-80 h-9 md:w-[573px] md:h-9">
      <p className="text-gray-800 text-2xl font-bold dark:text-white">
        DEVFINDER
      </p>

      <div
        className="flex text-slate-500 dark:text-white font-bold gap-4 items-center cursor-pointer"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <p className="text-xs tracking-[2.50px]">
          {isDark ? "LIGHT" : "DARK"}
        </p>
        <Image
          src={isDark ? "/assets/icon-sun.svg" : "/assets/icon-moon.svg"}
          alt="Theme Toggle"
          height={20}
          width={20}
          className="object-contain"
        />
      </div>
    </div>
  );
}
