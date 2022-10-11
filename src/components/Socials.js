import envelope from '../assets/envelope.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const links = [
	{
		key: 1,
		destination: 'mailto:arielaisrael12@gmail.com',
		src: envelope,
		alt: 'envelope icon',
	},
	{
		key: 2,
		destination: 'https://www.github.com/ariicodes',
		src: github,
		alt: 'github logo',
	},
	{
		key: 3,
		destination: 'https://www.linkedin.com/in/ariela-israel/',
		src: linkedin,
		alt: 'linkedin logo',
	},
]

const Socials = () => {
	return (
		<ul className='pr-6 self-end pb-20'>
			{links.map(link => (
				<li className='pt-8' key={link.key}>
					<a href={link.destination} target='_blank' rel='noreferrer'>
						<img className='w-4 lg:w-6' src={link.src} alt={link.alt} />
					</a>
				</li>
			))}
		</ul>
	)
}

export default Socials
