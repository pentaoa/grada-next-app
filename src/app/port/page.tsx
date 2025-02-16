import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '港口',
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl min-w-0 mx-3 lg:mx-auto mt-7 md:mt-20 lg:mt-32">
      <h1 className="font-bold text-3xl my-4">港口</h1>
      <div className="font-semibold my=5 text-stone-500">出发!</div>
      
      <div className="group my-6">
        <Link href="/event/mc"> 
          <Image
            src="/images/ph.png"
            alt="Minecraft 服务器"
            width={600}
            height={336}
            className="h-56 w-full rounded-xl object-cover shadow-xl dark:hover:shadow-gray-900 transition group-hover:drop-shadow-2xl"
          />
        </Link>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-900 dark:text-zinc-300">
              Minecraft 服务器
            </div>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-zinc-400">
              喝电子汽水，看赛博大海，过二进制夏天！
            </div>
          </div>
      </div>

      <div className="group my-6">
        <a href="https://github.com/pentaoa/grdocapp/commit/main"> 
          <Image
            alt="更新日志"
            src="/images/github.png"
            width={600}
            height={336}
            className="h-56 w-full rounded-xl object-cover shadow-xl dark:hover:shadow-gray-900 transition group-hover:drop-shadow-2xl"
          />
        </a>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-300">
            更新日志
          </h3>
          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-zinc-400">
            网站的各个时间节点
          </div>
        </div>
      </div>

    </section>
  );
}
