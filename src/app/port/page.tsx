import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '港口',
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl min-w-0 mx-3 lg:mx-auto mt-7 md:mt-20 lg:mt-32">
      <h1 className="font-bold text-3xl my-4">港口</h1>
      <div className="font-semibold my=5 text-stone-500">出发!</div>
      
      <div className="group my-6">
        <a href="https://gpt.grada.pro"> 
          <img
            src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/grdoc/gpt.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl dark:hover:shadow-stone-900 transition group-hover:drop-shadow-2xl"
          />
        </a>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-900 dark:text-zinc-300">
              ChatGPT 服务
            </div>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-zinc-400">
              支持 GPT-4。
            </div>
          </div>
      </div>
      
      <div className="group my-6">
        <Link href="/event/mc"> 
          <img
            src="/images/ph.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl dark:hover:shadow-stone-900 transition group-hover:drop-shadow-2xl"
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
        <img
        alt="Macos"
        src="/images/github.png"
        className="h-56 w-full rounded-xl object-cover shadow-xl dark:hover:shadow-stone-900 transition group-hover:drop-shadow-2xl"
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
