import envelope from '../assets/envelope.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const links = [
	{
		destination: 'mailto:arielaisrael12@gmail.com',
		src: envelope,
		alt: 'envelope icon',
	},
	{
		destination: 'https://www.linkedin.com/in/ariela-israel/',
		src: github,
		alt: 'github logo',
	},
	{
		destination: 'https://www.linkedin.com/in/ariela-israel/',
		src: linkedin,
		alt: 'linkedin logo',
	},
]

const Socials = () => {
	return (
		<ul className='pr-6 self-end'>
			{links.map(link => (
				<li className='pt-6'>
					<a href={link.destination}>
						<img className='w-4 lg:w-6' src={link.src} alt={link.alt} />
					</a>
				</li>
			))}
		</ul>
	)
}

export default Socials
