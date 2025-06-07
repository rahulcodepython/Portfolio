import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="bg-gradient-to-b from-sky-50 to-white min-h-screen flex items-center justify-center p-4">
            <div className="container mx-auto max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Illustration */}
                    <div className="relative animate-[float_6s_ease-in-out_infinite]">
                        <svg className="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Cloud background */}
                            <path d="M440 310C465 310 485 290 485 265C485 240 465 220 440 220C435 200 415 185 390 185C365 185 345 200 340 220C315 220 295 240 295 265C295 290 315 310 340 310H440Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
                            <path d="M140 390C155 390 165 380 165 365C165 350 155 340 140 340C135 325 120 315 105 315C90 315 75 325 70 340C55 340 45 350 45 365C45 380 55 390 70 390H140Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />

                            {/* Hot air balloon */}
                            <path d="M250 350C200 350 160 310 160 260C160 220 190 185 230 175C230 150 250 130 275 130C300 130 320 150 320 175C360 185 390 220 390 260C390 310 350 350 300 350H250Z" fill="#38BDF8" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="2" />
                            <path d="M250 350C230 350 215 340 210 325H290C285 340 270 350 250 350Z" fill="#0EA5E9" fillOpacity="0.7" />

                            {/* Basket */}
                            <rect x="220" y="325" width="60" height="20" rx="2" fill="#78350F" stroke="#713F12" strokeWidth="2" />

                            {/* 404 Text on balloon */}
                            <text x="250" y="240" fontFamily="Arial" fontSize="50" fontWeight="bold" textAnchor="middle" fill="#0EA5E9">404</text>

                            {/* Clouds in front */}
                            <path d="M80 260C100 260 115 245 115 225C115 205 100 190 80 190C75 170 55 155 35 155C15 155 0 170 0 190C0 195 0 200 5 205C5 225 20 240 40 240C55 240 70 250 70 260H80Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
                            <path d="M420 160C430 160 435 150 435 140C435 130 430 120 420 120C415 110 405 105 395 105C385 105 375 110 370 120C360 120 355 130 355 140C355 150 360 160 370 160H420Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
                        </svg>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-sky-300 bg-opacity-20 rounded-full blur-md"></div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col space-y-8 text-center md:text-left">
                        <h1 className="text-7xl md:text-8xl font-bold text-sky-500 [text-shadow:_0_0_10px_rgba(56,189,248,0.7)]">Oops!</h1>
                        <h2 className="text-3xl font-semibold text-sky-400">Lost in the clouds?</h2>
                        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>

                        <div className="flex flex-col space-y-4 w-full md:w-3/4">
                            <Link href="/" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2">
                                <i className="fas fa-home"></i>
                                Back Home
                            </Link>
                            <Link href="#" className="px-6 py-3 border border-sky-500 text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2">
                                <i className="fas fa-envelope"></i>
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}