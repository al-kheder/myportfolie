import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-32 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Ali</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate software engineer with a strong interest in web
            development, I craft beautiful and functional web experiences. By
            leveraging advanced AI tools, I Significantly boost productivity and
            deliver high-quality solutions efficiently.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
