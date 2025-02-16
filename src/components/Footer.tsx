"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { Home, Ship, Flower } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navItems = {
  "/": { name: "主页", icon: Home },
  "/port": { name: "港口", icon: Ship },
  "/garden": { name: "花园", icon: Flower },
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-between items-center shadow-lg w-5/6 mx-auto 
                    bg-stone-300 dark:bg-stone-700 bg-opacity-60 dark:bg-opacity-50 
                    backdrop-filter backdrop-blur-lg my-3 rounded-lg dark:border dark:border-stone-500">
      
      {/* 左侧 Logo */}
      <div className="w-8 my-2 ml-4 hidden sm:block">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>

      {/* 中间导航 */}
      <LayoutGroup>
        <div className="flex flex-row px-4 my-2 fade w-full justify-center">
          {Object.entries(navItems).map(([path, { name, icon: Icon }]) => {
            const isActive = path === pathname;
            return (
              <button
                key={path}
                onClick={() => router.push(path)}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex flex-col items-center px-3
                  ${isActive ? "font-bold" : "text-neutral-600 dark:text-neutral-300"}`}
              >
                <div className="relative flex items-center py-1 px-3">
                  <Icon className="w-5 h-5 mb-1 hidden sm:block" />
                  <span className="mx-1">{name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-neutral-100 dark:bg-stone-500 rounded-full z-[-1]"
                      layoutId="active-indicator"
                      transition={{ type: "spring", stiffness: 444, damping: 30 }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* 右侧 主题切换 */}
      <div className="w-8 my-auto mr-4 hidden sm:block">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
