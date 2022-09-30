import AI from '../assets/adobeillustrator.svg'
import PS from '../assets/adobephotoshop.svg'
import XD from '../assets/adobexd.svg'
import Figma from '../assets/figma.svg'
import Bootstrap from '../assets/bootstrap.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Sass from '../assets/sass.svg'
import VS from '../assets/visualstudiocode.svg'
import HTML from '../assets/html5.svg'
import CSS from '../assets/css3.svg'
import JS from '../assets/javascript.svg'
import Git from '../assets/git.svg'
import ReactJs from '../assets/react.svg'
import Node from '../assets/nodedotjs.svg'

const list1 = [
	{ src: AI, alt: 'AI logo' },
	{ src: PS, alt: 'PS logo' },
	{ src: XD, alt: 'XD logo' },
	{ src: Figma, alt: 'Figma logo' },
	{ src: Bootstrap, alt: 'Bootstrap logo' },
	{ src: Tailwind, alt: 'Tailwind logo' },
	{ src: Sass, alt: 'Sass logo' },
]
const list2 = [
	{ src: VS, alt: 'VS Code logo' },
	{ src: HTML, alt: 'HTML logo' },
	{ src: CSS, alt: 'CSS logo' },
	{ src: JS, alt: 'JavaScript logo' },
	{ src: Git, alt: 'Git logo' },
	{ src: ReactJs, alt: 'React logo' },
	{ src: Node, alt: 'Node logo' },
]

const ToolsAndTech = () => {
	return (
		<div className='flex flex-col items-end gap-7 mr-6 mb-10'>
			<h2 className='text-right text-xl font-PF'>
				Tools & <br />
				Technologies
			</h2>
			<div className='flex flex-row gap-6 lg:flex-col'>
				<div className='flex flex-col gap-6 lg:flex-row'>
					{list1.map(l => (
						<img className='h-6 invert lg:h-8' src={l.src} alt={l.alt} />
					))}
				</div>
				<div className='flex flex-col gap-6 lg:flex-row'>
					{list2.map(l => (
						<img className='h-6 invert lg:h-8' src={l.src} alt={l.alt} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ToolsAndTech
