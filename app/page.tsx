"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code2,
  Palette,
  Globe,
  Zap,
  Eye,
  Star,
  Users,
  TrendingUp,
  Monitor,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FrontendPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [typedText, setTypedText] = useState("")

  const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "JavaScript Expert"]
  const [currentRole, setCurrentRole] = useState(0)

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole]
    let index = 0
    const timer = setInterval(() => {
      if (index <= role.length) {
        setTypedText(role.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
          setTypedText("")
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentRole])

  const sections = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📧" },
  ]

  const frontendSkills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "HTML5/CSS3", level: 95, color: "from-orange-500 to-red-500" },
    { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" },
    { name: "SASS/SCSS", level: 85, color: "from-pink-500 to-rose-500" },
    { name: "Responsive Design", level: 92, color: "from-purple-500 to-indigo-500" },
    { name: "Git/GitHub", level: 88, color: "from-gray-500 to-slate-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white/10 backdrop-blur-md p-2 rounded-lg"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 z-40 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-8">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-xl font-bold mb-1">Dharmishtha Thakor</h1>
            <p className="text-sm text-blue-400 font-medium">Frontend Developer</p>
            <div className="flex justify-center space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setSidebarOpen(false)
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${activeSection === section.id
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                  : "hover:bg-white/5"
                  }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="mt-12">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-80 min-h-screen">
        {/* Home Section */}
        {activeSection === "about" && (
  <section className="min-h-screen p-8 flex items-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10 Months</div>
              <div className="text-green-400 font-medium">Frontend Journey</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm a Frontend Developer</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated frontend developer with 10 months of experience building modern, responsive web applications. 
              My journey started with HTML and CSS, and I've quickly evolved to master React, Next.js, and the latest JavaScript technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about creating beautiful user interfaces and writing clean, maintainable code. 
              Every project is an opportunity for me to learn something new and push my skills further.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Projects Built</span>
              </div>
              <p className="text-2xl font-bold text-white">12+</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Happy Clients</span>
              </div>
              <p className="text-2xl font-bold text-white">6+</p>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Growth</span>
              </div>
              <p className="text-2xl font-bold text-white">Rapid</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-yellow-400 font-medium">Status</span>
              </div>
              <p className="text-2xl font-bold text-white">Available</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h4 className="text-xl font-semibold mb-4 text-white">My Development Focus</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Building Interactive React Applications</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-gray-300">Creating Mobile-First Responsive Designs</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-gray-300">Writing Clean, Maintainable Code</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-gray-300">Learning New Technologies Daily</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <div className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              Quick Learner
            </div>
            <div className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              Problem Solver
            </div>
            <div className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
              Team Player
            </div>
            <div className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
              Detail Oriented
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

        {/* About Section */}
        {activeSection === "about" && (
  <section className="min-h-screen p-8 flex items-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <Code2 className="w-24 h-24 text-blue-400 mb-4" />
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10</div>
                <div className="text-blue-400">Months Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate frontend developer with 10 months of hands-on experience creating modern web applications.
            I specialize in React, Next.js, and modern JavaScript frameworks.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise lies in transforming designs into pixel-perfect, responsive, and interactive user
            interfaces. I'm constantly learning and staying updated with the latest frontend trends and best practices.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">Projects</span>
              </div>
              <p className="font-semibold">15+ Completed</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-400">Clients</span>
              </div>
              <p className="font-semibold">8+ Happy</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Learning</span>
              </div>
              <p className="font-semibold">Always Growing</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Availability</span>
              </div>
              <p className="font-semibold">Open to Work</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">What I Focus On</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Modern React Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Responsive Web Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Clean Code Practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="min-h-screen p-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
                  <div className="space-y-6">
                    {frontendSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Frontend Technologies</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "React", icon: "⚛️" },
                        { name: "Next.js", icon: "▲" },
                        { name: "Vue.js", icon: "💚" },
                        { name: "TypeScript", icon: "🔷" },
                        { name: "Tailwind", icon: "🎨" },
                        { name: "SASS", icon: "💅" },
                        { name: "Webpack", icon: "📦" },
                        { name: "Vite", icon: "⚡" },
                      ].map((tech, index) => (
                        <Card
                          key={index}
                          className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl mb-2">{tech.icon}</div>
                            <div className="font-medium">{tech.name}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Tools & Workflow</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "VS Code",
                        "Git/GitHub",
                        "Figma",
                        "Chrome DevTools",
                        "Postman",
                        "Vercel",
                        "Netlify",
                        "NPM/Yarn",
                        "ESLint",
                        "Prettier",
                      ].map((tool, index) => (
                        <Badge key={index} className="bg-white/10 text-white border-white/20 px-3 py-1">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white group hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">E-Commerce Dashboard</CardTitle>
                      <div className="flex space-x-2">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      Modern admin dashboard with real-time analytics, inventory management, and responsive design.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">TypeScript</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Tailwind</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Chart.js</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>1.2k views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>45 stars</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white group hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">Task Management App</CardTitle>
                      <div className="flex space-x-2">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      Collaborative task management with drag-and-drop, real-time updates, and team collaboration
                      features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React DnD</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Socket.io</Badge>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Redux</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>890 views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>32 stars</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white group hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Vue.js</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">Weather App</CardTitle>
                      <div className="flex space-x-2">
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      Beautiful weather application with location-based forecasts, interactive maps, and PWA features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Vue.js</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">PWA</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">API</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Vuex</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>2.1k views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>67 stars</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white group hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">React</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">Portfolio Website</CardTitle>
                      <div className="flex space-x-2">
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      Responsive portfolio website with smooth animations, dark mode, and optimized performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">React</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Framer Motion</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">GSAP</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">SCSS</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>1.5k views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>28 stars</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                >
                  View All Projects on GitHub
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section className="min-h-screen p-8 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </h2>

              <div className="space-y-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">Senior Frontend Developer</CardTitle>
                        <CardDescription className="text-blue-400 font-medium">TechCorp Solutions</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-white/20 text-white">
                        2022 - Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li>• Led frontend development for 5+ React applications serving 50k+ users</li>
                      <li>• Improved application performance by 45% through code optimization and lazy loading</li>
                      <li>• Implemented responsive design patterns reducing mobile bounce rate by 30%</li>
                      <li>• Mentored 3 junior developers and established frontend coding standards</li>
                      <li>• Collaborated with UX team to implement pixel-perfect designs</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">TypeScript</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Tailwind</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">Frontend Developer</CardTitle>
                        <CardDescription className="text-blue-400 font-medium">Digital Agency Pro</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-white/20 text-white">
                        2021 - 2022
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li>• Developed 15+ responsive websites for various clients</li>
                      <li>• Integrated RESTful APIs and third-party services</li>
                      <li>• Implemented modern CSS techniques and animations</li>
                      <li>• Optimized websites for SEO and accessibility standards</li>
                      <li>• Worked closely with designers to ensure design fidelity</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Vue.js</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">SASS</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">JavaScript</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Webpack</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">Junior Frontend Developer</CardTitle>
                        <CardDescription className="text-blue-400 font-medium">StartupXYZ</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-white/20 text-white">
                        2020 - 2021
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li>• Built responsive landing pages and marketing websites</li>
                      <li>• Learned modern JavaScript frameworks and best practices</li>
                      <li>• Participated in code reviews and agile development processes</li>
                      <li>• Contributed to component library and design system</li>
                      <li>• Fixed bugs and implemented new features based on user feedback</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">HTML/CSS</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">JavaScript</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Bootstrap</Badge>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">jQuery</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="min-h-screen p-8 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Ready for your next project?</h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can
                    help bring your frontend vision to life!
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-400">your.email@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Github className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-gray-400">github.com/yourusername</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-gray-400">linkedin.com/in/yourprofile</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <h4 className="font-semibold mb-3">Available for:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Frontend Development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">React/Next.js Projects</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">UI/UX Implementation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Performance Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Send me a message</CardTitle>
                    <CardDescription className="text-gray-400">I'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Project Type (e.g., React App, Landing Page)"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
