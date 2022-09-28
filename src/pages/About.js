import Nav from '../components/Nav'
import Header from '../components/Header'

const About = () => {
	return (
		<div className='flex flex-row w-screen'>
			<Nav
				home='hover:text-white-50 active:text-white-50'
				about='text-blush italic font-bold'
				resume='hover:text-white-50 active:text-white-50'
				projects='hover:text-white-50 active:text-white-50'
				contact='hover:text-white-50 active:text-white-50'
			/>
			<Header heading='About Me' />
		</div>
	)
}

export default About
