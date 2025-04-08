"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

import PROFILE from "../assets/images/ibtissam.jpg"


const timelineData = [
  {
    id: 1,
    company: "Company A",
    role: "Software Engineer",
    period: "2020 - 2022",
    location: "New York, NY",
    type: "Full-time",
    logo: "/company-a-logo.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Company B",
    role: "Frontend Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "Java", proficiency: 90 },
    { name: "php", proficiency: 80 },
    { name: "C", proficiency: 90 },
    { name: "pyhton", proficiency: 50 },
    { name: "JavaScript", proficiency: 70 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 60 },
    { name: "Laravel", proficiency: 95 },
    { name: "Spring-Boot", proficiency: 70 },
    { name: "Bootstrap", proficiency: 95 },
    { name: "css tailwind", proficiency: 95 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Docker", proficiency: 30 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Short Bio
            </span>
            <span className="ml-2">💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <img
                  src={PROFILE}
                  alt="Ibtissam RHOUIBI"
                  className="rounded-lg object-cover shadow-lg w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Ibtissam RHOUIBI!</strong>
                  </p>
                  <p className="mb-4">
                    a computer science engineering student passionate about software development 💻,
                    and innovative tech 🚀. Curious, creative ✨, and always learning 📚 — building my path one project at a time 🛠️.
                  </p>

                  <p>
                    Let's connect, build, and break things —because the{" "}
                    future is decentralized, and I refuse to be left behind!⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Skills
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}

