import React from 'react'


const Galary = () => {
    return (
        <>
            <div className='w-[80%] mx-auto mt-[100px]'>
                <h1 className="text-4xl font-bold text-center">
                    Recent Photo <span className="text-[#0da9b0] underline"> Gallery</span>
                </h1>
                <p className="text-center mt-2">
                    Celebrating Achievements, One Click at a Time!
                </p>
                <div className='flex flex-wrap items-center justify-center gap-14  mt-10'>
                    <img
                        src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80="
                        alt="Logo"
                        className='w-[350px] h-fit rounded-lg'
                    />
                    <img
                        src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80="
                        alt="Logo"
                        className='w-[350px] h-fit rounded-lg'
                    />
                    <img
                        src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80="
                        alt="Logo"
                        className='w-[350px] h-fit rounded-lg'
                    />
                </div>
            </div>
        </>
    )
}

export default Galary