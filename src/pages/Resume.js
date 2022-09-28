import Nav from '../components/Nav'
import Header from '../components/Header'

const Resume = () => {
	return (
		<div className='flex flex-row w-screen'>
			<Nav
				home='hover:text-white-50 active:text-white-50'
				about='hover:text-white-50 active:text-white-50'
				resume='text-blush italic font-bold'
				projects='hover:text-white-50 active:text-white-50'
				contact='hover:text-white-50 active:text-white-50'
			/>
			<Header heading='Resumé' />
		</div>
	)
}

export default Resume
