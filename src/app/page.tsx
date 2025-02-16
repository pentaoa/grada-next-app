import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default async function HomePage() {
  return (
    <section className="mt-7 md:mt-20 lg:mt-32 max-w-3xl min-w-0 mx-3 lg:mx-auto">
      <header>
        <h1 className="font-bold text-4xl">Grada - 个人网站</h1>
      </header>

      <section className="my-2 text-zinc-400">
        118°10'48" E  25°04'12" N
      </section>

      <section className="my-9">
        <div
          className="text-right py-3 rounded-lg text-8xl font-extrabold italic text-cyan-900 shadow-2xl"
          style={{
            backgroundImage: 'url(/images/suda.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          欢迎！
        </div>
      </section>

      <div className="my-14">
        <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-amber-500">
          重庆之旅
        </div>
        <Link href="/garden/chongqing">
          <p className="underline my-5 text-2xl italic text-slate-900 dark:text-zinc-400">
            观看视频
          </p>
        </Link>
      </div>
      
      <div className="my-14">
        <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-cyan-600">
          泉州之旅
        </div>
        <p className="my-5">
          6月17日到19日，一场小小的毕业旅行。
        </p>
        <Link href="/garden/2023-06-21">
          <p className="underline my-5 text-2xl italic text-slate-900 dark:text-zinc-400">
            查看照片墙
          </p>
        </Link>
      </div>

      <div className="my-14">
        <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-teal-800">
          盛夏新冒险，人生新旅程！
        </div>
        <div className="my-5 text-2xl font-semibold italic text-slate-900 dark:text-zinc-400">
          欢迎来到 Grdoc 的 V0.3 船新版本！
        </div>
        自主开发设计（有一定缺陷）！使用电脑访问，效果更佳。
      </div>

    </section>
  );
}