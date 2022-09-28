import Nav from '../components/Nav'
import Title from '../components/Title'
import Logo from '../assets/logo.png'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
			<div>
				<Title />
				
			</div>
			<div>
				<div className='flex flex-row justify-between items-end'>
					<Nav
						home='text-blush italic font-bold'
						about='hover:text-white-50 active:text-white-50'
						resume='hover:text-white-50 active:text-white-50'
						projects='hover:text-white-50 active:text-white-50'
						contact='hover:text-white-50 active:text-white-50'
					/>
					<img
						className='w-1/5 pr-6'
						src={Logo}
						alt='ariicodes logo'
					/>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Home
