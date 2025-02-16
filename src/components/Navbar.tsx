import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">花园</div>
        <div className="ml-8">
          <a href="/garden#video" className="text-gray-600 hover:text-gray-800">视频</a>
          <a href="/garden#article" className="ml-4 text-gray-600 hover:text-gray-800">文章</a>
        </div>
      </div>
      <div>
        <Link href="/about" className="text-gray-600 hover:text-gray-800">关于</Link>
      </div>
    </nav>
  );
}