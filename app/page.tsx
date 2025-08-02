"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Yaswanth - Full Stack Developer";
  const [textIndex, setTextIndex] = useState(0);
  // Contact form state - commented out for now
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    setIsLoaded(true);

    const timer = setInterval(() => {
      if (textIndex < fullText.length) {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [textIndex]);

  // Contact form handlers - commented out for now
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // EmailJS form submission - commented out for now
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus("");

  //   try {
  //     // Initialize EmailJS with your public key
  //     emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

  //     const result = await emailjs.send(
  //       "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  //       "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         message: formData.message,
  //         to_name: "Yaswanth",
  //       }
  //     );

  //     if (result.status === 200) {
  //       setSubmitStatus("success");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       setSubmitStatus("error");
  //     }
  //   } catch (error) {
  //     console.error("Email sending failed:", error);
  //     setSubmitStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Avatar placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-26 h-26 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-black text-4xl font-bold animate-pulse">
            Y
          </div>
        </div>

        {/* Name with typewriter effect */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 animate-fade-in">
            {currentText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-xl text-gray-400 animate-fade-in-delay">
            Building digital experiences with code
          </p>
        </div>

        {/* Bio section */}
        <div className="max-w-2xl text-center mb-12 animate-fade-in-delay-2">
          <p className="text-lg text-gray-300 mb-2 leading-relaxed">
            I&apos;m a passionate full-stack developer who loves creating
            elegant solutions to complex problems. When I&apos;m not coding,
            you&apos;ll find me exploring new technologies and contributing to
            open source.
          </p>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full animate-fade-in-delay-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-center">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/Yaswanth1320"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-green-400 group-hover:text-green-300">
                  →
                </span>{" "}
                GitHub.com/Yaswanth1320
              </a>
              <a
                href="https://www.linkedin.com/in/yashwanth-paravathala-380028322/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-blue-400 group-hover:text-blue-300">
                  →
                </span>{" "}
                LinkedIn.com
              </a>
              <a
                href="mailto:hello@yourdomain.com"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-yellow-400 group-hover:text-yellow-300">
                  →
                </span>{" "}
                hello@yourdomain.com
              </a>
              <a
                href="https://stackoverflow.com/users/31198912/yaswanth"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-orange-400 group-hover:text-orange-300">
                  →
                </span>{" "}
                StackOverflow.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-center">Projects</h3>
            <div className="space-y-3">
              <a
                href="https://ai-resume-analyzer-ten-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-purple-400 group-hover:text-purple-300">
                  →
                </span>{" "}
                AI Resume Analyzer
              </a>
              <a
                href="https://pitchstack.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-cyan-400 group-hover:text-cyan-300">
                  →
                </span>{" "}
                Pitch Stack
              </a>
              <a
                href="https://github.com/Yaswanth1320/utilityBox"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-red-400 group-hover:text-red-300">→</span>{" "}
                Utility Box(Github Repo)
              </a>
              <a
                href="https://dropzonr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-600 hover:border-white transition-all duration-300 hover:bg-white/5 group"
              >
                <span className="text-purple-400 group-hover:text-purple-300">
                  →
                </span>{" "}
                DropZone
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl w-full mb-12 animate-fade-in-delay-4">
          <h3 className="text-2xl font-bold mb-6 text-center mt-20">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "AWS",
              "Git",
              "Tailwind CSS",
            ].map((tech, index) => (
              <div
                key={tech}
                className="p-3 border border-gray-600 text-center hover:border-white transition-all duration-300 hover:bg-white/5 group"
                style={{ animationDelay: `${2 + index * 0.1}s` }}
              >
                <span className="group-hover:text-green-400 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="max-w-4xl w-full mb-12 animate-fade-in-delay-5">
          <h3 className="text-2xl font-bold mb-6 text-center">Resume</h3>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Want to know more about my experience and skills?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1yLe52-zjRH3iMIGQ-NUkFjyDEIkyzpBu/view?usp=sharing" // Replace with your resume link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
              >
                📄 View Resume
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1yLe52-zjRH3iMIGQ-NUkFjyDEIkyzpBu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-300"
              >
                ⬇️ Download PDF
              </a>
            </div>
          </div>

          {/* Community Contributions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-4">
              💻 I mostly contribute on GitHub and Stack Overflow
            </p>
            <div className="flex justify-center gap-6 text-xs text-gray-500 mb-4">
              <span>🔧 Open Source Projects</span>
              <span>•</span>
              <span>📚 Code Reviews</span>
              <span>•</span>
              <span>💡 Technical Solutions</span>
            </div>
            <div className="flex justify-center gap-6 text-xs text-gray-500">
              <span>❤️ Problem Solving</span>
              <span>•</span>
              <span>🚀 Building Tools</span>
              <span>•</span>
              <span>🎯 Clean Code</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl w-full mb-12 animate-fade-in-delay-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Me</h3>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">
              Interested in working together or just want to say hello?
            </p>
            <a
              href="mailto:yashwanth.paravathala@gmail.com"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              📧 yashwanth.paravathala@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 animate-fade-in-delay-7">
          <p className="text-sm">
            Built with Next.js • TypeScript • Tailwind CSS
          </p>
          <p className="text-xs mt-2 opacity-75">
            © 2024 Yaswanth. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
