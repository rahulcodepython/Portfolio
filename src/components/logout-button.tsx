"use client"
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from './ui/button'

const LogoutButton = () => {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                toast.error('Failed to log out')
            }

            router.push('/login')
            toast.success('Logged out successfully')
        } catch (error) {
            toast.error('An error occurred while logging out')
        }
    }

    return (
        <Button variant="destructive" className="flex flex-col items-center h-auto py-4 cursor-pointer w-full hover:scale-110 transition-transform ease-in-out duration-200" onClick={handleLogout}>
            <span>Logout</span>
        </Button>
    )
}

export default LogoutButton