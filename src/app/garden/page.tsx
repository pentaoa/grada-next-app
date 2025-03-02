import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '花园',
  description: '数字花园',
};

export default async function BlogPage() {
  return (
    <section>
      <div className="font-semibold my=5 text-stone-500">博客与存档</div>
      <div className="font-semibold border-dashed p-3 my-8 text-center border-2 border-teal-600 rounded-lg">
        注：旧文章还在迁移中，有一部分未能移动到这里。
      </div>

      <div id="video"></div>

      <div className="group my-5">
        <Link href="/garden/chongqing">
          <div className="relative rounded-xl w-full object-cover shadow-xl dark:hover:shadow-stone-800 transition group-hover:drop-shadow-2xl">
            <Image
              src="/images/trip_to_chongqing.jpg"
              alt="重庆之旅"
              layout="responsive"
              width={600}
              height={336}
              className="rounded-xl"
            />
          </div>
        </Link>

        <div className="p-3">
          <div className="text-xl font-medium text-gray-900 dark:text-zinc-400">
            重庆之旅
          </div>
          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            一个鸽了2个月的视频，高三暑假的毕业旅行。
          </div>
        </div>
      </div>

      <div className="group my-5">
        <Link href="/garden/englishpre">
          <div className="relative rounded-xl w-full object-cover shadow-xl dark:hover:shadow-stone-800 transition group-hover:drop-shadow-2xl">
            <Image
              src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/grdoc/gpt.png"
              alt="早八传奇"
              layout="responsive"
              width={600}
              height={336}
              className="rounded-xl"
            />
          </div>
        </Link>

        <div className="p-3">
          <div className="text-xl font-medium text-gray-900 dark:text-zinc-400">
            早八传奇
          </div>
          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            英语 Pre ，但是 Minecraft。
          </div>
        </div>
      </div>

      <div id="article"></div>

      <Link
        className="flex flex-col space-y-1 m-5"
        href={`/garden/izumi`}
      >
        <div className="p-3 w-full rounded-lg border-solid">
          <div className="text-xl font-medium">和风细雨咏清泉</div>
          <div className="text-gray-500">Izumi</div>
          <div className="text-gray-500 text-sm/relaxed">2023-05-04</div>
        </div>
      </Link>
    </section>
  );
}
