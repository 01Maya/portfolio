import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 border-t bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Mansi Patel. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:mansipatel7055@gmail.com" className="text-muted-foreground hover:text-primary group relative transition-colors duration-300">
              <Mail className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
              <span className="sr-only">Email</span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                mansipatel7055@gmail.com
              </span>
            </a>
            <a href="https://github.com/01Maya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="h-5 w-5 transform hover:scale-110 transition-transform duration-300" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mansi-patel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="h-5 w-5 transform hover:scale-110 transition-transform duration-300" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

