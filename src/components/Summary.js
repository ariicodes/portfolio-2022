import Resume from '../assets/ariela-israel-resume-private-10-2022.pdf'

const Summary = () => {
	return (
		<div className='font-Urbanist w-8/12 pt-6 pl-6 pr-2 text-base absolute right-1/3 leading-snug md:-left-0.5 lg:w-[32.5%] lg:mr-40'>
			<p>
				I'm a{' '}
				<span className='italic text-pale-cerulean'>software engineer</span>{' '}
				based in the United States who uses both sides of the brain. My eye for{' '}
				<span className='italic text-pale-cerulean'>design</span> and obsession
				with logic &{' '}
				<span className='italic text-pale-cerulean'>problem solving</span>{' '}
				guides me through solution-based programming. I pride myself on my
				ability to design &{' '}
				<span className='italic text-pale-cerulean'>build applications</span>{' '}
				that will bring your vision to life and assist with creating{' '}
				<span className='italic text-pale-cerulean'>digital solutions</span> for
				analog challenges. Have a look through my portfolio and <br />
				<a
					className='italic font-black underline underline-offset-4 decoration-1 text-blush hover:text-cerise active:text-cerise focus:text-cerise'
					href='/contact'
				>
					contact me
				</a>{' '}
				so we can work on your next project together.
			</p>
			<br />
			<a
				className='text-lg font-Urbanist font-black text-blush lg:text-2xl lg:mt-10 tracking-widest'
				href={Resume}
				target='_blank'
				rel='noreferrer'
			>
				click here for my resumé!
			</a>
		</div>
	)
}

export default Summary
