import github from '../assets/github.svg'
import link from '../assets/link.svg'

const Project = () => {
	return (
		<div className='flex flex-col font-PF w-8/12 pt-6 pl-6 absolute right-1/3 gap-4 md:-left-0.5 lg:text-xl lg:w-4/12 lg:flex-row lg:gap-6'>
			<div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='w-72 h-32 bg-platinum rounded-md'></div>
					<div className='flex flex-col justify-around py-3'>
						<a href='https://www.github.com/ariicodes' target='_blank' rel='noreferrer'>
							<img className='w-6' src={github} alt='' />
						</a>
						<a href='/'>
							<img className='w-6' src={link} alt='' />
						</a>
					</div>
				</div>
				<h2>project name</h2>
			</div>
			<div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='w-72 h-32 bg-platinum rounded-md'></div>
					<div className='flex flex-col justify-around py-3'>
						<a href='https://www.github.com/ariicodes' target='_blank' rel='noreferrer'>
							<img className='w-6' src={github} alt='' />
						</a>
						<a href='/'>
							<img className='w-6' src={link} alt='' />
						</a>
					</div>
				</div>
				<h2>project name</h2>
			</div>
			<div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='w-72 h-32 bg-platinum rounded-md'></div>
					<div className='flex flex-col justify-around py-3'>
						<a href='https://www.github.com/ariicodes' target='_blank' rel='noreferrer'>
							<img className='w-6' src={github} alt='' />
						</a>
						<a href='/'>
							<img className='w-6' src={link} alt='' />
						</a>
					</div>
				</div>
				<h2>project name</h2>
			</div>
		</div>
	)
}

export default Project
