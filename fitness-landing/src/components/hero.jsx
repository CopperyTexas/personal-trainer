import React from 'react'

function Hero() {
	return (
		<section
			className='bg-cover bg-center h-screen p-4'
		>
			<div className=' flex items-center justify-center mt-28'>
				<h2 className='text-white text-6xl font-bold w-1/2 '>
					Добро пожаловать в мир <p className='text-red-500'>фитнеса!</p>
				</h2>
				<div className='bg-white h-52 w-1/2'></div>
			</div>

		</section>
	)
}

export default Hero
