import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left */}
        <Link href="/" className="text-xl font-semibold">
          Cent
        </Link>

        {/* Center */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-black">Send money</Link>
          <Link href="#" className="hover:text-black">Pricing</Link>
          <Link href="#" className="hover:text-black">Help</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline">
            Log in
          </Link>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700">
            Get started
          </button>
        </div>

      </div>
    </header>
  );
}
