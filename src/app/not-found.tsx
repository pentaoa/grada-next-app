import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className="flex flex-col items-center mt-7 md:mt-20 lg:mt-32 max-w-3xl min-w-0 mx-3 lg:mx-auto">
      <div className="my-9">
        <img src="images/404.png"></img>
      </div>
      <p className="font-semibold my=5 text-stone-500">恭喜你找到了不存在的页面!</p>
      <Link href="/" className="my-5 text-lg text-teal-800">点我回到主页</Link>
    </section>
  )
}