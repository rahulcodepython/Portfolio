// /**
//  * Example demonstrating how to use the generic components together
//  * This is a reference implementation - not meant to be used directly
//  */

// 'use client'

// import {
//     CreateEditModal,
//     DataTable,
//     DeleteModal,
//     type ColumnDef,
//     type FieldConfig,
// } from '@/components/generic'
// import { Button } from '@/components/ui/button'
// import { Pencil, Trash2 } from 'lucide-react'
// import { useState } from 'react'
// import { z } from 'zod'

// // Example data type
// interface User {
//     id: number
//     name: string
//     email: string
//     role: 'admin' | 'user'
// }

// // Example schema
// const userSchema = z.object({
//     name: z.string().min(1, 'Name is required'),
//     email: z.string().email('Invalid email'),
//     role: z.enum(['admin', 'user']),
// })

// // Example field configuration
// const userFields: FieldConfig[] = [
//     {
//         name: 'name',
//         label: 'Name',
//         type: 'text',
//         placeholder: 'Enter name',
//     },
//     {
//         name: 'email',
//         label: 'Email',
//         type: 'email',
//         placeholder: 'Enter email',
//     },
//     {
//         name: 'role',
//         label: 'Role',
//         type: 'select',
//         options: [
//             { label: 'Admin', value: 'admin' },
//             { label: 'User', value: 'user' },
//         ],
//     },
// ]

// export function UsersExample() {
//     const [users, setUsers] = useState<User[]>([
//         { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
//         { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
//     ])

//     const [deleteModalOpen, setDeleteModalOpen] = useState(false)
//     const [editModalOpen, setEditModalOpen] = useState(false)
//     const [selectedUser, setSelectedUser] = useState<User | null>(null)
//     const [isDeleting, setIsDeleting] = useState(false)

//     // Column definitions for the data table
//     const columns: ColumnDef<User>[] = [
//         {
//             header: 'Name',
//             accessorKey: 'name',
//         },
//         {
//             header: 'Email',
//             accessorKey: 'email',
//         },
//         {
//             header: 'Role',
//             cell: (row) => (
//                 <span className="capitalize">{row.role}</span>
//             ),
//         },
//         {
//             header: 'Actions',
//             cell: (row) => (
//                 <div className="flex gap-2">
//                     <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => {
//                             setSelectedUser(row)
//                             setEditModalOpen(true)
//                         }}
//                     >
//                         <Pencil className="h-4 w-4" />
//                     </Button>
//                     <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => {
//                             setSelectedUser(row)
//                             setDeleteModalOpen(true)
//                         }}
//                     >
//                         <Trash2 className="h-4 w-4 text-destructive" />
//                     </Button>
//                 </div>
//             ),
//             className: 'text-right',
//         },
//     ]

//     // Create handler
//     const handleCreate = async (data: z.infer<typeof userSchema>) => {
//         const newUser: User = {
//             id: Math.max(...users.map((u) => u.id), 0) + 1,
//             ...data,
//         }
//         setUsers([...users, newUser])
//         // In real app: await fetch('/api/users', { method: 'POST', body: JSON.stringify(data) })
//     }

//     // Update handler
//     const handleUpdate = async (data: z.infer<typeof userSchema>) => {
//         if (!selectedUser) return
//         setUsers(
//             users.map((u) => (u.id === selectedUser.id ? { ...u, ...data } : u))
//         )
//         setEditModalOpen(false)
//         // In real app: await fetch(`/api/users/${selectedUser.id}`, { method: 'PUT', body: JSON.stringify(data) })
//     }

//     // Delete handler
//     const handleDelete = async () => {
//         if (!selectedUser) return
//         setIsDeleting(true)
//         try {
//             setUsers(users.filter((u) => u.id !== selectedUser.id))
//             // In real app: await fetch(`/api/users/${selectedUser.id}`, { method: 'DELETE' })
//         } finally {
//             setIsDeleting(false)
//         }
//     }

//     return (
//         <div className="space-y-4">
//             <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold">Users</h2>
//                 <CreateEditModal
//                     triggerButtonText="Create User"
//                     title="Create New User"
//                     description="Add a new user to the system"
//                     schema={userSchema}
//                     fields={userFields}
//                     onSubmit={handleCreate}
//                     submitButtonText="Create"
//                 />
//             </div>

//             <DataTable
//                 data={users}
//                 columns={columns}
//                 emptyMessage="No users found. Create one to get started."
//             />

//             {/* Edit Modal */}
//             {selectedUser && (
//                 <CreateEditModal
//                     triggerButtonText=""
//                     title="Edit User"
//                     description="Update user information"
//                     schema={userSchema}
//                     fields={userFields}
//                     defaultValues={selectedUser}
//                     onSubmit={handleUpdate}
//                     submitButtonText="Update"
//                     open={editModalOpen}
//                     onOpenChange={setEditModalOpen}
//                 />
//             )}

//             {/* Delete Modal */}
//             <DeleteModal
//                 open={deleteModalOpen}
//                 onOpenChange={setDeleteModalOpen}
//                 onDelete={handleDelete}
//                 title="Delete User?"
//                 description={`Are you sure you want to delete ${selectedUser?.name}? This action cannot be undone.`}
//                 isDeleting={isDeleting}
//             />
//         </div>
//     )
// }
