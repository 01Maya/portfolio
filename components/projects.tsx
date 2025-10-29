import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, FileCode, Dumbbell, UserCircle, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Fitness Tracker App",
    description:
      "A comprehensive fitness tracking application built with Next.js and TypeScript, featuring workout planning, progress tracking, and interactive exercise guides.",
    link: "https://github.com/01Maya/Fitness",
    category: "Frontend",
    icon: <Dumbbell className="w-4 h-4" />,
  },
  {
    title: "Profile Page",
    description:
      "A clean and modern profile page with smooth animations and responsive design, built using TypeScript and modern web technologies for an optimal user experience.",
    link: "https://github.com/01Maya/Profile",
    category: "Frontend",
    icon: <UserCircle className="w-4 h-4" />,
  },
  {
    title: "Interior Design Portfolio",
    description:
      "An elegant interior design portfolio showcasing various projects and designs, built with modern web technologies and featuring beautiful layouts and animations.",
    link: "https://luxor-interior-design.vercel.app/",
    category: "Frontend",
    icon: <Home className="w-4 h-4" />,
  },
  {
    title: "Beauty Product Landing Page",
    description:
      "A sleek, minimal landing page for natural beauty products featuring smooth scroll navigation, elegant hover effects, and a clean aesthetic that highlights organic essence.",
    link: "https://github.com/01Maya/Beauty_Product",
    category: "Frontend",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    title: "SaaS Landing Page",
    description:
      "A minimal SaaS landing page designed with flawless UI/UX, featuring smooth animations, responsive layouts, and interactive hover effects for seamless user experience.",
    link: "https://github.com/01Maya/SAAS_Page",
    category: "Frontend",
    icon: <FileCode className="w-4 h-4" />,
  },
  {
    title: "Agency Landing Page",
    description:
      "A sleek, responsive agency landing page built with React.js and shadcn UI, featuring modern aesthetics and intuitive navigation for an engaging user experience.",
    link: "https://github.com/01Maya/My-Agency",
    category: "Frontend",
    icon: <FileCode className="w-4 h-4" />,
  },
  {
    title: "Real Estate Platform",
    description:
      "An elegant and responsive real estate landing page developed with Next.js, showcasing properties with a sleek UI and smooth user interactions.",
    link: "https://github.com/01Maya/RE_State",
    category: "Frontend",
    icon: <FileCode className="w-4 h-4" />,
  },
  {
    title: "Budget Web App",
    description:
      "A simple budget app built with HTML, CSS, and JavaScript that tracks your expenses and provides insights into your spending habits.",
    link: "https://github.com/01Maya/Budget_App",
    category: "Frontend",
    icon: <FileCode className="w-4 h-4" />,
  },
  {
    title: "Text Encryption & Decryption Web App",
    description:
      "A Python and Flask-based web app that allows users to encrypt and decrypt messages using a substitution cipher.",
    link: "https://github.com/01Maya/Encrypt_Decrypt_Text",
    category: "Frontend",
    icon: <FileCode className="w-4 h-4" />,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title flex items-center justify-center gap-2 animate-title">
          <Code className="w-6 h-6" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white border border-purple-100 overflow-hidden group hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <Badge
                  variant="outline"
                  className="mb-4 text-purple-600 bg-purple-50 hover:bg-purple-100 border-purple-200"
                >
                  {project.icon}
                  <span className="ml-1">{project.category}</span>
                </Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

