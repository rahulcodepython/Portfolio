import React from 'react'

const Profile = () => {
    return (
        <div className="py-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-white">
            <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                    <p className="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">

                </div>
            </div>
        </div>
    )
}

export default Profile