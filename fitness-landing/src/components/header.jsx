import React from 'react'

function Header() {
	return (
		<header className=''>
			<div className='container mx-auto flex justify-between items-center'>
				<h1 className=''>Фитнес-тренер Эльдар</h1>
				<nav>
					<ul className='flex space-x-4'>
						<li>
							<a href='#about' className='hover:underline'>
								Обо мне
							</a>
						</li>
						<li>
							<a href='#services' className='hover:underline'>
								Услуги
							</a>
						</li>
						<li>
							<a href='#contact' className='hover:underline'>
								Контакты
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
