import Nav from '../components/Nav'
import Header from '../components/Header'

const Contact = () => {
	return (
		<div className='flex flex-row w-screen'>
			<Nav
				home='hover:text-white-50 active:text-white-50'
				about='hover:text-white-50 active:text-white-50'
				resume='hover:text-white-50 active:text-white-50'
				projects='hover:text-white-50 active:text-white-50'
				contact='text-blush italic font-bold'
			/>
			<Header heading='Contact Me' />
		</div>
	)
}

export default Contact
