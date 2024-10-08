import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Briefcase, FolderOpen, Users } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold">Tecnoacademia Magdalena</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:text-blue-200"><Home className="inline-block mr-1" size={18} /> Inicio</Link>
          <Link to="/tasks" className="hover:text-blue-200"><Briefcase className="inline-block mr-1" size={18} /> Tareas</Link>
          <Link to="/portfolio" className="hover:text-blue-200"><FolderOpen className="inline-block mr-1" size={18} /> Portafolio</Link>
          <Link to="/users" className="hover:text-blue-200"><Users className="inline-block mr-1" size={18} /> Usuarios</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar