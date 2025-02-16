import type { Metadata } from 'next';
import { Github } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于',
};

export default async function AboutPage() {
  return (
    <section className="mt-7 md:mt-20 lg:mt-32 max-w-3xl min-w-0 mx-3 lg:mx-auto">
      <div className="flex justify-center my-3">
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className="flex justify-center my-9">
        <p className="text-2xl font-semibold">Grada - 个人网站</p>
      </div>

      <div className="flex justify-center my-3">
        <p>© 2024 鲲鹏</p>
      </div>
      <div className="flex justify-center my-3 items-center">
        <Github size={24} />
        <a href="https://github.com/pentaoa" className="ml-2">Github</a>
      </div>
    </section>
  );
}
