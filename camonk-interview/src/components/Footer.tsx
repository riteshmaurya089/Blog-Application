import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg mt-12">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">CA Monk Blog</h2>
          <p className="mt-2 text-blue-100 text-sm">
            A modern blogging platform to read, create and explore amazing content.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="p-2 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-100 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-100 cursor-pointer transition">Create Blog</li>
            <li className="hover:text-blue-100 cursor-pointer transition">All Blogs</li>
            <li className="hover:text-blue-100 cursor-pointer transition">About</li>
          </ul>
        </div>

        {/* COPYRIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Built With</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["React", "TypeScript", "Tailwind CSS", "TanStack Query"].map((tech) => (
              <span
                key={tech}
                className="bg-white text-blue-600 px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm mt-6 text-blue-100">
            © {new Date().getFullYear()} CA Monk Blog. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
