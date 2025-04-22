"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  User,
  Briefcase,
  Wrench,
} from "lucide-react";
import Head from "next/head";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiPrisma,
} from "react-icons/si";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white text-black font-sans scroll-smooth">
        <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 font-montserrat">
          <div className="text-2xl font-bold pl-4 tracking-tight">
            Samiul Islam
          </div>
          <nav className="flex space-x-6 pr-6">
            <a
              href="#about"
              className="hover:text-gray-300 transition"
              aria-label="About"
            >
              <User size={20} />
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300 transition"
              aria-label="Projects"
            >
              <Briefcase size={20} />
            </a>
            <a
              href="#skills"
              className="hover:text-gray-300 transition"
              aria-label="Skills"
            >
              <Wrench size={20} />
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition"
              aria-label="Contact"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/samiul16"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/samiul-islam-7a66211b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </nav>
        </header>

        {/* First section - minimized height */}
        <section className="text-center px-8 py-16 flex flex-col justify-center items-center bg-gray-50 opacity-0 [animation-fill-mode:forwards] font-playfair">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            <span className="block mb-2">&quot;Strive for progress,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              not perfection.&quot;
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 italic font-light">
            &quot;The best way to predict the future is to create it.&quot;
          </h2>
        </section>

        {/* Hero section - reduced height */}
        <section
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 py-16 opacity-0 [animation-fill-mode:forwards] font-montserrat"
          id="hero"
        >
          <div className="md:w-1/2 pl-8">
            <h1 className="text-3xl font-bold mb-2 tracking-tighter">
              DESIGNER
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Full stack developer with a flair for clean UI and UX.
            </p>
          </div>
          <div className="md:w-1/2 relative flex justify-center my-4 md:my-0">
            <div className="relative group">
              <Image
                src="/avatar.png"
                alt="Samiul Avatar"
                width={180}
                height={180}
                className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2 pr-8">
            <h1 className="text-3xl font-bold mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              &lt;CODER&gt;
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Building scalable apps using Next.js, Node.js, Express,
              PostgreSQL, MongoDB, and more.
            </p>
          </div>
        </section>

        {/* Projects section - compact layout */}
        <section
          id="projects"
          className="px-8 py-16 bg-gray-100 opacity-0 [animation-fill-mode:forwards]"
        >
          <h2 className="text-center text-3xl font-bold mb-8 font-playfair tracking-tight">
            My Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { id: 1, image: "uniteliving.png", title: "Uniteliving" },
              { id: 2, image: "payrun.png", title: "Payrun" },
              { id: 3, image: "easydesk.png", title: "Easydesk" },
              { id: 4, image: "uniteliving.png", title: "Uniteliving" },
              { id: 5, image: "uniteliving.png", title: "Uniteliving" },
              { id: 6, image: "uniteliving.png", title: "Uniteliving" },
            ].map((project) => (
              <Card
                key={project.id}
                className="hover:scale-[1.02] transition duration-300 overflow-hidden group h-full"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={`/${project.image}`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
                    Brief description of project and technologies used.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About section - compact */}
        <section
          id="about"
          className="px-8 py-16 opacity-0 [animation-fill-mode:forwards] max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 font-playfair tracking-tight">
            About Me
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed font-montserrat">
            <p>
              Full Stack Developer with 6+ years experience at Gain Solution
              Limited and Aimsbay Solutions.
            </p>
            <p>
              Specializing in <span className="font-medium">Next.js</span>,{" "}
              <span className="font-medium">React</span>,{" "}
              <span className="font-medium">Node.js</span>, and database
              technologies.
            </p>
            <p>Graduate of Ahsanullah University of Science and Technology.</p>
          </div>
        </section>

        {/* Skills section - compact */}
        <section
          id="skills"
          className="px-8 py-16 bg-gray-100 opacity-0 [animation-fill-mode:forwards]"
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-playfair tracking-tight">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
              {
                name: "React",
                icon: <SiReact className="w-6 h-6 text-blue-500" />,
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="w-6 h-6 text-green-500" />,
              },
              {
                name: "Express",
                icon: <SiExpress className="w-6 h-6 text-gray-800" />,
              },
              {
                name: "PostgreSQL",
                icon: <SiPostgresql className="w-6 h-6 text-blue-700" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="w-6 h-6 text-green-600" />,
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
              },
              {
                name: "Git",
                icon: <SiGit className="w-6 h-6 text-orange-600" />,
              },
              {
                name: "Prisma",
                icon: <SiPrisma className="w-6 h-6 text-blue-900" />,
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow flex flex-col items-center gap-2"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {skill.icon}
                </div>
                <p className="font-medium text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section - minimal */}
        <section
          id="contact"
          className="px-8 py-16 opacity-0 [animation-fill-mode:forwards] max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 font-playfair tracking-tight">
            Contact
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-blue-600" />
              <a
                href="tel:+8801601076098"
                className="text-gray-700 text-base hover:text-blue-600 transition"
              >
                +8801601076098
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-blue-600" />
              <a
                href="mailto:samiul.saad@gmail.com"
                className="text-gray-700 text-base hover:text-blue-600 transition"
              >
                samiul.saad@gmail.com
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white text-center py-4 font-montserrat text-sm">
          © 2025 Samiul Islam. All rights reserved.
        </footer>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }

          section {
            scroll-margin-top: 70px;
          }
        `}</style>
      </main>
    </>
  );
}
