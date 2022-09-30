import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Summary from '../components/Summary'
import ToolsAndTech from '../components/ToolsAndTech'

const About = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
			<div className='flex flex-row-reverse relative'>
				<Header heading='About Me' />
				<Summary />
			</div>
			<div>
				<div className='flex flex-row justify-between items-end'>
					<Nav
						home='hover:text-white-50 active:text-white-50'
						about='text-blush italic font-bold'
						resume='hover:text-white-50 active:text-white-50'
						projects='hover:text-white-50 active:text-white-50'
						contact='hover:text-white-50 active:text-white-50'
					/>
					<ToolsAndTech />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default About
