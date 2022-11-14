import github from '../assets/github.svg'
import link from '../assets/link.svg'
import sun from '../assets/sun.png'

const Project = () => {
	return (
		<div className='flex flex-col font-Urbanist w-8/12 pt-6 pl-6 absolute right-1/3 gap-4 md:-left-0.5 lg:text-xl lg:w-4/12 lg:flex-row lg:gap-6'>
			<div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='flex flex-row justify-center items-center bg-gradient-to-b from-slate-900 to-slate-800 bg-no-repeat bg-cover rounded-md'>
						<img
							src={sun}
							alt='sun icon'
							width='100'
							height='100'
						/>
					</div>
					<div className='flex flex-col justify-around py-3 italic'>
						<a
							href='https://www.github.com/ariicodes/shyne-weather'
							target='_blank'
							rel='noreferrer'
							className='flex gap-2'
						>
							<img
								className='w-6'
								src={github}
								alt='github logo'
							/>
							<p className='text-sm underline underline-offset-4 hover:text-pale-cerulean'>repo</p>
						</a>
						<a
							href='https://shyne-weather.web.app'
							target='_blank'
							rel='noreferrer'
							className='flex gap-2'
						>
							<img
								className='w-6'
								src={link}
								alt='link icon'
							/>
							<p className='text-sm underline underline-offset-4 hover:text-pale-cerulean'>live app</p>
						</a>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-semibold'>Shyne Weather</h2>
				</div>
			</div>
			{/* <div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='w-72 h-32 bg-platinum rounded-md'></div>
					<div className='flex flex-col justify-around py-3'>
						<a
							href='https://www.github.com/ariicodes'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='w-6'
								src={github}
								alt='github logo'
							/>
						</a>
						<a
							href='/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='w-6'
								src={link}
								alt='link icon'
							/>
						</a>
					</div>
				</div>
				<h2>project name</h2>
			</div> */}
			{/* <div className='flex flex-col gap-1.5'>
				<div className='flex gap-4'>
					<div className='w-72 h-32 bg-platinum rounded-md'></div>
					<div className='flex flex-col justify-around py-3'>
						<a
							href='https://www.github.com/ariicodes'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='w-6'
								src={github}
								alt='github logo'
							/>
						</a>
						<a
							href='/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className='w-6'
								src={link}
								alt='link icon'
							/>
						</a>
					</div>
				</div>
				<h2>project name</h2>
			</div> */}
		</div>
	)
}

export default Project
