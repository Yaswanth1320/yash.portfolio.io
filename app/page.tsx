"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Globe, MessageSquare } from "lucide-react"; // icons
import { motion } from "framer-motion";
import { MdOutlineEventNote } from "react-icons/md";
import { Puzzle, Grid3x3 } from "lucide-react";
import {
  SiOpenai,
  SiBookstack,
  SiNotion,
  SiGooglemeet,
  SiGithub,
} from "react-icons/si";
import {
  FaRobot,
  FaNotesMedical,
  FaHeartbeat,
  FaToolbox,
  FaRegLightbulb,
  FaGamepad,
  FaPiggyBank,
  FaRegStickyNote,
} from "react-icons/fa";

import {
  SiExpo,
  SiSanity,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import FragmentCanvas from "@/components/FragmentCanvas";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Yaswanth - Full Stack Developer";
  const [textIndex, setTextIndex] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Typewriter effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (textIndex < fullText.length) {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [textIndex]);

  // Contact form handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono">
      {/* Glow overlay */}
      <FragmentCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Typewriter Name */}
        <h1 className="text-2xl md:text-6xl mt-5 font-bold mb-6 pt-6 animate-fade-in">
          {currentText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 animate-fade-in-delay">
          Building digital experiences with code
        </p>

        {/* 🌐 Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <a
            href="https://github.com/Yaswanth1320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-white hover:border-gray-400"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-paravathala-380028322/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-400"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            href="https://blogs-pi-swart.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg transition-all duration-300 hover:bg-green-600 hover:text-white hover:border-green-400"
          >
            <Globe className="w-5 h-5" /> Blog
          </a>
          <a
            href="https://stackoverflow.com/users/31198912/yaswanth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-400"
          >
            <MessageSquare className="w-5 h-5" /> Stack Overflow
          </a>
        </div>

        {/* Bio */}
        <div className="max-w-2xl text-center mb-20 animate-fade-in-delay-2">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a passionate full-stack developer who loves creating
            elegant solutions to complex problems. When I&apos;m not coding,
            I&apos;m exploring new technologies and contributing to open source.
          </p>
        </div>

        {/* Projects */}
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-20">
          {[
            {
              title: "EventNest",
              desc: "EventNest is a modern events finding platform built with Next.js and Firebase. It allows users to create, manage, and explore events nearby.",
              link: "https://event-nest-xi.vercel.app/",
              icon: <MdOutlineEventNote className="text-blue-400" />,
            },
            {
              title: "AI Resume Analyzer",
              desc: "Analyze resumes with AI to give feedback & improve job chances.",
              link: "https://ai-resume-analyzer-ten-brown.vercel.app/",
              icon: <SiOpenai className="text-purple-400" />,
            },
            {
              title: "AI Notes App",
              desc: "Smart note-taking app with AI summaries & search.",
              link: "https://ai-notes-app-iota-sage.vercel.app/",
              icon: <SiNotion className="text-white" />,
            },
            {
              title: "Expense Tracker",
              desc: "A modern interactive expense tracker built with Next.js, TypeScript, Prisma.",
              link: "https://expense-tracker-nine-orcin-69.vercel.app",
              icon: <FaPiggyBank className="text-yellow-600" />,
            },
            {
              title: "QuickNotes",
              desc: "QuickNotes is a modern, full-stack note-taking application built with Next.js, offering a seamless and performant user experience.",
              link: "https://quick-note-phi.vercel.app/",
              icon: <FaRegStickyNote className="text-green-400" />,
            },
            {
              title: "Companion AI",
              desc: "An AI-powered companion to assist with tasks and conversations.",
              link: "https://companion-ai-eta.vercel.app/",
              icon: <FaRobot className="text-green-400" />,
            },
            {
              title: "IdeaHub",
              desc: "IdeaHub is a modern idea-sharing and ranking platform built with Next.js 15 and React 19.",
              link: "https://idea-hub-self.vercel.app/",
              icon: <FaRegLightbulb className="text-yellow-400" />,
            },
            {
              title: "Pitch Stack",
              desc: "Tool for startups to build and share investor-ready pitch decks.",
              link: "https://pitchstack.vercel.app/",
              icon: <SiBookstack className="text-yellow-400" />,
            },
            {
              title: "Medipilot",
              desc: "MediPilot is an intelligent clinical assistant that acts as a secure co-pilot for doctors, nurses, and medical staff.",
              link: "https://github.com/Yaswanth1320/medipilot",
              icon: <FaNotesMedical className="text-red-400" />,
            },
            {
              title: "Connect4",
              desc: "A modern, interactive Connect Four game built with React, Next.js, and TypeScript.",
              link: "http://connect4-omega-lilac.vercel.app/",
              icon: <Puzzle className="text-green-400 w-6 h-6" />,
            },
            {
              title: "Hangman Game",
              desc: "A simple hangman game built with Nextjs.",
              link: "https://hm-game.vercel.app",
              icon: <FaGamepad className="text-green-400" />,
            },
            {
              title: "FitBotX",
              desc: "FitBotX is a sleek and simple fitness tracking app built for beginners",
              link: "https://github.com/Yaswanth1320/FitBotX",
              icon: <FaHeartbeat className="text-pink-500" />,
            },
            {
              title: "Utility Box",
              desc: "A collection of useful developer utilities in one place.",
              link: "https://github.com/Yaswanth1320/utilityBox",
              icon: <FaToolbox className="text-blue-400" />,
            },
          ].map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-4 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.015] overflow-hidden"
            >
              {/* Icon Badge */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/40 group-hover:bg-green-500/20 transition-colors duration-300 mb-3">
                <span className="text-xl text-green-400">{proj.icon}</span>
              </div>

              {/* Title + Description */}
              <h4 className="text-base font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                {proj.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {proj.desc}
              </p>

              {/* Full underline animation (now respects border-radius) */}
              <span className="absolute bottom-0 left-0 h-0.5 bg-green-400 transition-all duration-500 ease-out w-0 group-hover:w-full rounded-b-xl"></span>
            </a>
          ))}
        </div>

        {/* Tech Stack */}

        {/* Tech Stack */}
        <h3 className="text-3xl font-bold mb-10">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full mb-20">
          {[
            {
              name: "JavaScript",
              icon: <SiJavascript className="text-yellow-400" />,
            },
            {
              name: "TypeScript",
              icon: <SiTypescript className="text-blue-500" />,
            },
            { name: "React", icon: <SiReact className="text-cyan-400" /> },
            {
              name: "Expo",
              icon: <SiExpo className="text-black dark:text-white" />,
            },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            {
              name: "Node.js",
              icon: <SiNodedotjs className="text-green-500" />,
            },
            { name: "Python", icon: <SiPython className="text-yellow-300" /> },
            {
              name: "PostgreSQL",
              icon: <SiPostgresql className="text-sky-700" />,
            },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
            { name: "Git", icon: <SiGit className="text-red-500" /> },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss className="text-cyan-500" />,
            },
            { name: "Prisma", icon: <SiPrisma className="text-white" /> },
            {
              name: "Supabase",
              icon: <SiSupabase className="text-green-500" />,
            },
            { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
            { name: "Sanity", icon: <SiSanity className="text-red-600" /> },
          ].map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-row items-center gap-2 justify-center p-5 border border-gray-600 rounded-xl bg-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-green-400 group"
            >
              <div className="text-xl transition-transform duration-300 group-hover:rotate-6">
                {tech.icon}
              </div>
              <span className="text-sm font-medium group-hover:text-green-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Resume Section */}
        <h3 className="text-2xl font-bold mb-6">Resume</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="https://drive.google.com/file/d/1yLe52-zjRH3iMIGQ-NUkFjyDEIkyzpBu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            📄 View Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1yLe52-zjRH3iMIGQ-NUkFjyDEIkyzpBu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
          >
            ⬇️ Download PDF
          </a>
        </div>

        {/* Education Timeline */}
        <h3 className="text-2xl font-bold mb-12 text-center">Education</h3>
        <div className="relative w-full max-w-4xl mx-auto mb-20">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-700"></div>

          {[
            {
              school: "VIT-AP University",
              degree: "B.Tech in Computer Science Engineering",
              date: "Dec 2021 – Present",
              grade: "CGPA: 8.77/10",
            },
            {
              school: "Narayana Junior College, Nellore",
              degree: "MPC",
              date: "Aug 2018 – Sep 2020",
              grade: "CGPA: 9.57/10",
            },
            {
              school: "VBR E.M High School",
              degree: "SSC",
              date: "Jun 2017 – Apr 2018",
              grade: "GPA: 10/10",
            },
          ].map((edu, idx) => (
            <div key={idx} className="mb-12 flex items-center w-full">
              {/* Left Side */}
              {idx % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} // smooth cubic ease
                      viewport={{ once: true, amount: 0.4 }}
                      className="bg-gray-900 border border-gray-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 inline-block relative"
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.degree}</p>
                      <p className="text-xs text-gray-500">{edu.date}</p>
                      <p className="text-sm text-green-400 mt-2 font-medium">
                        {edu.grade}
                      </p>

                      {/* Arrow */}
                      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-900"></div>
                    </motion.div>
                  </div>
                  {/* Dot */}
                  <div className="w-0 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-gray-900 shadow-lg z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                /* Right Side */
                <>
                  <div className="w-1/2"></div>
                  {/* Dot */}
                  <div className="w-0 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-gray-900 shadow-lg z-10"></div>
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="bg-gray-900 border border-gray-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 inline-block relative"
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.degree}</p>
                      <p className="text-xs text-gray-500">{edu.date}</p>
                      <p className="text-sm text-green-400 mt-2 font-medium">
                        {edu.grade}
                      </p>

                      {/* Arrow */}
                      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-900"></div>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Timeline */}
        <h3 className="text-2xl font-bold mb-8">Certifications</h3>
        <div className="relative border-l border-gray-700 max-w-2xl w-full mb-16">
          {[
            {
              title: "AWS Certified Cloud Practitioner",
              issuer: "Amazon",
              date: "Feb 2024",
              sub: "Foundational cloud certification covering AWS services",
            },
            {
              title: "MERN Full Stack Developer",
              issuer: "Ethnus",
              date: "Sep 2023",
              sub: "Full stack web development with MongoDB, Express, React, Node.js",
            },
            {
              title: "Data Structures & Algorithms",
              issuer: "Great Learning",
              date: "Apr 2023",
              sub: "Problem-solving, time/space complexity, and algorithm design",
            },
            {
              title: "MySQL for Developers",
              issuer: "Cognitive Class",
              date: "Apr 2023",
              sub: "Relational database fundamentals and SQL queries",
            },
            {
              title: "Data Visualization with Python",
              issuer: "Kaggle",
              date: "Jul 2023",
              sub: "Python data analysis, visualization with Matplotlib & Seaborn",
            },
          ].map((cert, idx) => (
            <div key={idx} className="mb-8 ml-6 relative">
              {/* Circle marker */}
              <span className="absolute -left-3 flex items-center justify-center w-5 h-5 bg-green-400 rounded-full ring-4 ring-gray-900"></span>

              {/* Content */}
              <div className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg shadow-sm hover:bg-gray-900 transition-all duration-300">
                <h4 className="text-sm font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-xs">
                  {cert.issuer} —{" "}
                  <span className="text-gray-500">{cert.date}</span>
                </p>
                <p className="text-gray-500 text-xs mt-1">{cert.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <h3 className="text-2xl font-bold mb-6 text-white">Contact Me</h3>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 mb-20 p-6 rounded-2xl bg-black/40 border border-gray-700 shadow-lg"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white outline-none transition-all"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white outline-none transition-all"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white outline-none transition-all resize-none"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <p className="text-sm">
            Built with Next.js • TypeScript • Tailwind CSS
          </p>
          <p className="text-xs mt-2 opacity-75">
            © 2024 Yaswanth. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
