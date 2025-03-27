import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'

function App() {
	return (
		<div className='font-sans text-gray-900 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-[url("./assets/background.jpg")] '>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
