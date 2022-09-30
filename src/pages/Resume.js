import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ResumeContent from '../components/ResumeContent'

const Resume = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
			<div className='flex flex-row-reverse relative'>
				<Header heading='Resumé' />
				<ResumeContent />
			</div>
			<div>
				<div className='flex flex-row justify-between items-end'>
					<Nav
						home='hover:text-white-50 active:text-white-50'
						about='hover:text-white-50 active:text-white-50'
						resume='text-blush italic font-bold'
						projects='hover:text-white-50 active:text-white-50'
						contact='hover:text-white-50 active:text-white-50'
					/>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Resume