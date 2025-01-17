import Link from "next/link";
import { Menu, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">DesoCode</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900">
              Skills
            </Link>
            <Link
              href="#timeline"
              className="text-gray-700 hover:text-gray-900"
            >
              Timeline
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://github.com/al-kheder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-al-kheder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
