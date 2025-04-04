import Link from 'next/link';
import React from 'react';

export default async function HomePage() {
  return (
    <section className="mt-7 md:mt-20 lg:mt-32 max-w-3xl mx-3 lg:mx-auto">
      <header>
        <h1 className="font-bold text-4xl noto-serif-sc">Grada - 个人网站</h1>
      </header>

      <section className="my-2 text-zinc-400 noto-serif-sc">
         118&deg;10&apos;48&quot; E  25&deg;04&apos;12&quot; N
      </section>

      <section className="my-9">
        <div
          className="text-right py-3 rounded-lg text-8xl font-extrabold italic text-cyan-900 shadow-2xl noto-serif-sc"
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
          关于我
        </div>
        <p className="my-5 text-lg text-slate-900 dark:text-zinc-400">
          一个来自中国的大二学生，喜欢音乐和计算机，喜欢编程和设计，喜欢旅行和摄影。
        </p>
        <p className="my-5 text-lg text-slate-900 dark:text-zinc-400">
          研究方向：人工智能与计算神经科学
        </p>
        <p className="my-5 text-lg text-slate-900 dark:text-zinc-400">
          视觉解码、表征学习、可控生成与闭环神经调控，探索智能实验范式及人机交互优化方法。
        </p>
      </div>
      
      <div className="my-14">
        <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-cyan-600">
          旅行
        </div>
        <p className="my-5">
          下次去哪里呢？
        </p>
        <Link href="/garden/2023-06-21">
          <p className="underline my-5 text-2xl italic text-slate-900 dark:text-zinc-400">
            泉州之旅
          </p>
        </Link>
        <Link href="/garden/chongqing">
          <p className="underline my-5 text-2xl italic text-slate-900 dark:text-zinc-400">
            重庆之旅
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
      </div>

      <div className="my-14 text-center">
        <Link href="/about">
          <p className="text-gray-600 dark:text-gray-400 text-sm underline">
            关于本站
          </p>
        </Link>
      </div>
      
    </section>
  );
}