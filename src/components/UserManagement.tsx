import React, { useState } from 'react'
import { Edit, Trash2 } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const initialUsers: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Dinamizador' },
  { id: 2, name: 'María García', email: 'maria@example.com', role: 'Infocenter' },
  { id: 3, name: 'Carlos Rodríguez', email: 'carlos@example.com', role: 'Psicopedagogo' },
]

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  const handleEditUser = (user: User) => {
    setEditingUser(user)
  }

  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
      setEditingUser(null)
    }
  }

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(u => u.id !== userId))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gestión de Usuarios</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Rol</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEditUser(user)} className="text-blue-500 hover:text-blue-700 mr-2">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingUser && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Editar Usuario</h2>
          <form onSubmit={handleUpdateUser}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                value={editingUser.name}
                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={editingUser.email}
                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block mb-1">Rol</label>
              <select
                id="role"
                value={editingUser.role}
                onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="Dinamizador">Dinamizador</option>
                <option value="Infocenter">Infocenter</option>
                <option value="Psicopedagogo">Psicopedagogo</option>
                <option value="Facilitador">Facilitador</option>
                <option value="Aprendiz Tecnoacademia">Aprendiz Tecnoacademia</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Actualizar Usuario
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default UserManagement