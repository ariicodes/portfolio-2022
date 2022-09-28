import Nav from '../components/Nav'
import Header from '../components/Header'

const Projects = () => {
	return (
		<div className='flex flex-row w-screen'>
			<Nav
				home='hover:text-white-50 active:text-white-50'
				about='hover:text-white-50 active:text-white-50'
				resume='hover:text-white-50 active:text-white-50'
				projects='text-blush italic font-bold'
				contact='hover:text-white-50 active:text-white-50'
			/>
			<Header heading='Projects' />
		</div>
	)
}

export default Projects
