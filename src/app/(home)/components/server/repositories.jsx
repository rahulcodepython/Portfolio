import React from 'react'

const Repositories = () => {
    const repositories = [
        [
            'Category',
            '12 June 2019',
            'Bitters hashtag waistcoat fashion axe chia unicorn',
            'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        ],
        [
            'Category',
            '12 June 2019',
            'Bitters hashtag waistcoat fashion axe chia unicorn',
            'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        ],
        [
            'Category',
            '12 June 2019',
            'Bitters hashtag waistcoat fashion axe chia unicorn',
            'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        ],
    ]
    return (
        <section className="bg-white p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10 -my-1" id='repositiories'>
            <h1 className='text-xl md:text-3xl font-semibold'>Repositories</h1>
            <div className="w-full flex flex-col gap-5">
                {
                    repositories.map((item, index) => {
                        return <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-around rounded-lg shadow-lg hover:shadow-2xl w-full py-8" key={index}>
                            <div className="flex flex-col items-center justify-center w-1/4">
                                <span className="font-semibold text-md text-primary">{item[0]}</span>
                                <span className="mt-1 text-xs">{item[1]}</span>
                            </div>
                            <div className="flex flex-col justify-center w-3/4 gap-2 px-0 lg:px-4">
                                <h2 className="font-semibold text-lg text-primary">
                                    {item[2]}
                                </h2>
                                <p className="text-sm">
                                    {item[3]}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div >
        </section >
    )
}

export default Repositories