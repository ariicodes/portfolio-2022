import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Socials from '../components/Socials'

const Contact = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
			<div className='flex flex-row-reverse relative'>
				<Header heading='Contact Me' />
				<ContactForm />
			</div>
			<div>
				<div className='flex flex-row justify-between items-end'>
					<Nav
						home='hover:text-white/50 active:text-white/50'
						about='hover:text-white/50 active:text-white/50'
						resume='hover:text-white/50 active:text-white/50'
						projects='hover:text-white/50 active:text-white/50'
						contact='text-blush italic font-bold'
					/>
					<Socials />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Contact