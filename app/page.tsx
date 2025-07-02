"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Palette,
  Globe,
  Zap,
  Star,
  Users,
  TrendingUp,
  Monitor,
  Sun,
  Moon,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function FrontendPortfolio() {
  const [isDark, setIsDark] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "JavaScript Expert"]
  const [currentRole, setCurrentRole] = useState(0)

  const form = useRef<any>(null)

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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs.sendForm("service_nzsjhkz", "template_dajgv4g", form.current, "7jMSReY0I9a23lCLH").then(
      (result) => {
        console.log(result.text)
        toast.success("Message sent successfully!")
        form.current.reset()
      },
      (error) => {
        console.log(error.text)
        toast.error("Failed to send message. Try again.")
      },
    )
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/DharmishthaResume.pdf"
    link.download = "Dharmishtha.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const frontendSkills = [
    { name: "React/Next.js", level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript/TypeScript", level: 70, color: "from-yellow-500 to-orange-500" },
    { name: "HTML5/CSS3", level: 90, color: "from-orange-500 to-red-500" },
    { name: "Tailwind CSS", level: 65, color: "from-cyan-500 to-blue-500" },
    { name: "SASS/SCSS", level: 75, color: "from-pink-500 to-rose-500" },
    { name: "Responsive Design", level: 85, color: "from-purple-500 to-indigo-500" },
    { name: "Git/GitHub", level: 80, color: "from-gray-500 to-slate-500" },
  ]
<<<<<<< Updated upstream
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/DharmishthaResume.pdf"
    link.download = "Dharmishtha.pdf" // Replace with your actual name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
=======

  const themeClasses = isDark
    ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
    : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900"

  const cardClasses = isDark
    ? "bg-white/5 backdrop-blur-sm border-white/10 text-white"
    : "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-900"

>>>>>>> Stashed changes
  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Fixed Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "bg-black/20" : "bg-white/20"} backdrop-blur-xl border-b ${isDark ? "border-white/10" : "border-gray-200/50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-0.5`}>
                <div
                  className={`w-full h-full rounded-full ${isDark ? "bg-slate-900" : "bg-white"} flex items-center justify-center`}
                >
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="font-bold text-lg">Dharmishtha</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === section.id ? "text-blue-400" : isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Resume Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${isDark ? "bg-white/10" : "bg-gray-200"}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden ${isDark ? "bg-black/40" : "bg-white/40"} backdrop-blur-xl border-t ${isDark ? "border-white/10" : "border-gray-200/50"}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === section.id
                        ? "text-blue-400 bg-blue-500/10"
                        : isDark
                          ? "text-gray-300 hover:bg-white/5"
                          : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <Button
                  onClick={downloadResume}
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Frontend Dev
              </h1>
              <div className="text-2xl md:text-3xl mb-8 h-12">
                I'm a <span className="text-blue-400 font-semibold">{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>
              <p className={`text-lg mb-12 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and best
                practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className={`${cardClasses} hover:bg-opacity-80 transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Monitor className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Mobile-first approach for all devices
                  </p>
                </CardContent>
              </Card>

              <Card className={`${cardClasses} hover:bg-opacity-80 transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-lg font-semibold mb-2">Performance</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Optimized for speed and efficiency
                  </p>
                </CardContent>
              </Card>

              <Card className={`${cardClasses} hover:bg-opacity-80 transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Palette className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2">Modern UI</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Clean and intuitive interfaces
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className={`${isDark ? "border-white/20 text-white hover:bg-white/5" : "border-gray-300 text-gray-900 hover:bg-gray-100"} px-8 py-3 bg-transparent`}
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://github.com/Dharmistha9095"
                target="_blank"
                className={`w-12 h-12 ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} rounded-full flex items-center justify-center transition-colors`}
                rel="noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dharmistha1726/"
                target="_blank"
                className={`w-12 h-12 ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} rounded-full flex items-center justify-center transition-colors`}
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tdharmistha1417@gmail.com"
                className={`w-12 h-12 ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} rounded-full flex items-center justify-center transition-colors`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen p-8 flex items-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Who Am I?
            </h2>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left Side - Visual Card */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div
                    className={`${isDark ? "bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20" : "bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100"} backdrop-blur-xl rounded-3xl p-8 border ${isDark ? "border-white/20" : "border-gray-200"} relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/30 to-cyan-500/30 rounded-full blur-2xl"></div>

                    <div className="relative z-10 text-center">
                      <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full p-1">
                        <div
                          className={`w-full h-full ${isDark ? "bg-slate-900" : "bg-white"} rounded-full flex items-center justify-center`}
                        >
                          <Code2 className="w-12 h-12 text-emerald-400" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-5xl font-bold">1</div>
                        <div className="text-emerald-400 font-medium text-lg">Year Experience</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mx-auto"></div>
                      </div>

                      <div className="mt-8 space-y-4">
                        <div
                          className={`flex items-center justify-between p-3 ${isDark ? "bg-white/5" : "bg-white/50"} rounded-xl`}
                        >
                          <span className={isDark ? "text-gray-300" : "text-gray-600"}>Current Role</span>
                          <span className="text-emerald-400 font-medium">Frontend Developer</span>
                        </div>
                        <div
                          className={`flex items-center justify-between p-3 ${isDark ? "bg-white/5" : "bg-white/50"} rounded-xl`}
                        >
                          <span className={isDark ? "text-gray-300" : "text-gray-600"}>Company</span>
                          <span className="text-cyan-400 font-medium">Orionik Technologies</span>
                        </div>
                        <div
                          className={`flex items-center justify-between p-3 ${isDark ? "bg-white/5" : "bg-white/50"} rounded-xl`}
                        >
                          <span className={isDark ? "text-gray-300" : "text-gray-600"}>Status</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-400 font-medium">Employed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Introduction */}
                <div className="space-y-6">
                  <div
                    className={`${isDark ? "bg-gradient-to-r from-slate-800/50 to-slate-900/50" : "bg-gradient-to-r from-white/50 to-gray-50/50"} backdrop-blur-xl rounded-2xl p-8 border ${isDark ? "border-white/10" : "border-gray-200"}`}
                  >
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-cyan-500 rounded-full mr-4"></span>
                      My Professional Journey
                    </h3>
                    <p className={`text-lg leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      Hey there! I'm a dedicated frontend developer currently working in the tech industry. Over the
                      past 1 Year, I've been growing professionally while contributing to meaningful projects at my
                      current company.
                    </p>
                    <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      I specialize in React and Next.js, collaborating with cross-functional teams to deliver
                      high-quality web applications. Every day at work brings new challenges and learning opportunities
                      that fuel my passion for frontend development.
                    </p>
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`${isDark ? "bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20" : "bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200"} backdrop-blur-xl rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-10 h-10 ${isDark ? "bg-emerald-500/20" : "bg-emerald-100"} rounded-lg flex items-center justify-center`}
                      >
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-emerald-400 text-sm">Features Delivered</div>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      From UI components to full application modules
                    </p>
                  </div>

                  <div
                    className={`${isDark ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20" : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200"} backdrop-blur-xl rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-10 h-10 ${isDark ? "bg-cyan-500/20" : "bg-cyan-100"} rounded-lg flex items-center justify-center`}
                      >
                        <Users className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">20+</div>
                        <div className="text-cyan-400 text-sm">Team Collaborations</div>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Working effectively with designers, backend devs, and PMs
                    </p>
                  </div>

                  <div
                    className={`${isDark ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20" : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"} backdrop-blur-xl rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-10 h-10 ${isDark ? "bg-purple-500/20" : "bg-purple-100"} rounded-lg flex items-center justify-center`}
                      >
                        <Star className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-purple-400 text-sm">Commitment</div>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Dedicated to delivering quality code and meeting deadlines
                    </p>
                  </div>

                  <div
                    className={`${isDark ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20" : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"} backdrop-blur-xl rounded-2xl p-6 border`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-10 h-10 ${isDark ? "bg-yellow-500/20" : "bg-yellow-100"} rounded-lg flex items-center justify-center`}
                      >
                        <Globe className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">Daily</div>
                        <div className="text-yellow-400 text-sm">Growth Mindset</div>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Continuously learning and improving my skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen p-8 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
                <div className="space-y-6">
                  {frontendSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full ${isDark ? "bg-white/10" : "bg-gray-200"} rounded-full h-2`}>
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
                  <h3 className="text-2xl font-bold mb-6">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "React", icon: "⚛️" },
                      { name: "Next.js", icon: "▲" },
                      { name: "TypeScript", icon: "🔷" },
                      { name: "Tailwind", icon: "🎨" },
                      { name: "Amazon S3", icon: "🗄️" },
                      { name: "Webpack", icon: "📦" },
                      { name: "Vite", icon: "⚡" },
                      { name: "Netlify", icon: "🌐" },
                    ].map((tech, index) => (
                      <Card key={index} className={`${cardClasses} hover:bg-opacity-80 transition-all duration-300`}>
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">{tech.icon}</div>
                          <div className="font-medium">{tech.name}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Tools & Workflow</h3>
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
                      "Prettier",
                    ].map((tool, index) => (
                      <Badge
                        key={index}
                        className={`${isDark ? "bg-white/10 text-white border-white/20" : "bg-gray-200 text-gray-800 border-gray-300"} px-3 py-1`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              What I've Built
            </h2>

            {/* Project Categories */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Work Projects */}
              <div
                className={`${isDark ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20" : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"} backdrop-blur-xl rounded-3xl p-8 border relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Work Projects</h3>
                  <div className="space-y-4">
                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-blue-400">Salon Management System</h4>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          25+ Projects
                        </Badge>
                      </div>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Complete salon management platform with appointment booking, check-in system, staff leave
                        management and comprehensive data analytics for multiple salon locations.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">React</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          TypeScript
                        </span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Admin Dashboard Suite</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Comprehensive admin panels for managing salon operations, subscription plans, user roles,
                        analytics, and system configurations across multiple business locations.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full">Dashboard</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">Analytics</span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Stripe</span>
                        <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full">Charts</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-cyan-400">Universal POS System</h4>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                          In Progress
                        </Badge>
                      </div>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Currently developing a global point-of-sale system designed for all business types. Building
                        scalable architecture with multi-tenant support and customizable workflows.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">React</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          TypeScript
                        </span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Projects */}
              <div
                className={`${isDark ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20" : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"} backdrop-blur-xl rounded-3xl p-8 border relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Personal Projects</h3>
                  <div className="space-y-4">
                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Student Attendance Management</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Complete attendance tracking system for educational institutions with student registration,
                        daily attendance marking, reports generation, and admin dashboard.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">PHP</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">Bootstrap</span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">MySQL</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-pink-400 mb-2">Online Grocery Store</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Full-featured e-commerce platform for grocery shopping with product catalog, shopping cart,
                        order management, and payment integration.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">.NET</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          Bootstrap
                        </span>
                        <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full">
                          SQL Server
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Portfolio Website</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        This responsive portfolio website with smooth animations and modern design patterns.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full">Next.js</span>
                        <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Projects */}
              <div
                className={`${isDark ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20" : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"} backdrop-blur-xl rounded-3xl p-8 border relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Learning Projects</h3>
                  <div className="space-y-4">
                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-green-400 mb-2">React Testing Practice</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Simple apps built while learning Jest and React Testing Library fundamentals.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Jest</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">RTL</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-emerald-400 mb-2">TypeScript Experiments</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Small projects and exercises to practice TypeScript concepts and design patterns.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">TypeScript</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          Patterns
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-4 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/50 hover:bg-white/70"} rounded-xl transition-all duration-300`}
                    >
                      <h4 className="text-lg font-semibold text-green-300 mb-2">API Integration Practice</h4>
                      <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Various small apps practicing different API patterns and data fetching methods.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                          REST API
                        </span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Fetch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div
                className={`inline-flex items-center space-x-4 ${isDark ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10" : "bg-gradient-to-r from-blue-50 to-purple-50"} backdrop-blur-sm rounded-full px-8 py-4 border ${isDark ? "border-white/10" : "border-gray-200"}`}
              >
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>Interested in my work?</span>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-6 py-2"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen p-8 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="space-y-8">
              <Card className={cardClasses}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">React Developer</CardTitle>
                      <CardDescription className="text-blue-400 font-medium">Orionik Technology</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${isDark ? "border-white/20 text-white" : "border-gray-300 text-gray-700"}`}
                    >
                      Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li>• Developed 25+ salon management systems with comprehensive features</li>
                    <li>• Built appointment booking, check-in systems, and staff leave management modules</li>
                    <li>• Implemented subscription plans and multi-salon data management solutions</li>
                    <li>• Currently working on universal POS system for global business use</li>
                    <li>• Configured APIs and integrated third-party services for seamless functionality</li>
                    <li>• Deployed applications using AWS S3 and Render for scalable hosting</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">TypeScript</Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Next.js</Badge>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">AWS S3</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Render</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">API Integration</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={cardClasses}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Python Django Intern</CardTitle>
                      <CardDescription className="text-blue-400 font-medium">Internship Program</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${isDark ? "border-white/20 text-white" : "border-gray-300 text-gray-700"}`}
                    >
                      Before Orionik
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li>• Learned Python programming fundamentals and Django framework</li>
                    <li>• Gained comprehensive knowledge of Model-View-Controller (MVC) architecture</li>
                    <li>• Built web applications using Django's built-in features and ORM</li>
                    <li>• Understood database relationships and backend development concepts</li>
                    <li>• Practiced creating RESTful APIs and handling HTTP requests</li>
                    <li>• Developed foundation skills that enhanced my full-stack understanding</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Python</Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Django</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">MVC</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">ORM</Badge>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">REST API</Badge>
                    <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className={cardClasses}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Self-Learning Journey</CardTitle>
                      <CardDescription className="text-blue-400 font-medium">Personal Development</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${isDark ? "border-white/20 text-white" : "border-gray-300 text-gray-700"}`}
                    >
                      1 Year
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li>• Started with HTML, CSS, and JavaScript fundamentals</li>
                    <li>• Built personal projects including Student Attendance System (PHP)</li>
                    <li>• Developed Online Grocery Store using .NET and Bootstrap</li>
                    <li>• Transitioned to modern React development and component-based architecture</li>
                    <li>• Practiced responsive design and modern CSS frameworks</li>
                    <li>• Continuously learning new technologies and best practices</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">HTML/CSS</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">JavaScript</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">PHP</Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">.NET</Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Bootstrap</Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Self-Taught</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen p-8 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Ready for your next project?</h3>
                <p className={`mb-8 text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  I'm currently open to full-time opportunities where I can apply my frontend development skills to
                  create intuitive and impactful user interfaces. Let's connect and explore how I can contribute to your
                  team!
                </p>

                <div className="space-y-6 mt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:tdharmistha1417@gmail.com"
                        className={`hover:underline ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        tdharmistha1417@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a
                        href="https://github.com/Dharmistha9095"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        github.com/Dharmistha9095
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/dharmistha1726/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        linkedin.com/in/dharmistha1726
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-8 p-6 ${isDark ? "bg-white/5" : "bg-white/50"} backdrop-blur-sm rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}
                >
                  <h4 className="font-semibold mb-3">Available for:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>Frontend Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>React/Next.js Projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>UI/UX Implementation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>Performance Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              <Card className={cardClasses}>
                <form ref={form} onSubmit={sendEmail}>
                  <CardHeader>
                    <CardTitle className="text-xl">Send me a message</CardTitle>
                    <CardDescription className={isDark ? "text-gray-400" : "text-gray-600"}>
                      I'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="first_name"
                        placeholder="First Name"
                        className={`${isDark ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"}`}
                        required
                      />
                      <Input
                        name="last_name"
                        placeholder="Last Name"
                        className={`${isDark ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"}`}
                        required
                      />
                    </div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={`${isDark ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"}`}
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`${isDark ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"}`}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      Send Message
                    </Button>
                  </CardContent>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDark ? "bg-blue-500/10" : "bg-blue-200/30"} rounded-full blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${isDark ? "bg-purple-500/10" : "bg-purple-200/30"} rounded-full blur-3xl`}
        ></div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  )
}
