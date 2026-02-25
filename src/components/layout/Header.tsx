import Link from "next/link";
import { BookOpen, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Cavalcade</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-8">
            <Link href="/books" className="text-gray-700 hover:text-blue-600">
              Books
            </Link>
            <Link
              href="/research"
              className="text-gray-700 hover:text-blue-600"
            >
              Research
            </Link>
            <Link href="/authors" className="text-gray-700 hover:text-blue-600">
              Authors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100 md:hidden">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
