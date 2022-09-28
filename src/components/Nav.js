// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun } from '@fortawesome/free-solid-svg-icons'

const Nav = props => {
	const { home, about, resume, projects, contact } = props
	return (
		<nav className='pl-6'>
			{/* <button className='mb-5 text-2xl'>
				<FontAwesomeIcon icon={faSun} />
			</button> */}
			<ul className='Nav font-PF flex flex-col gap-5 text-sm'>
				<li className={home}>
					<a href='/'>home</a>
				</li>
				<li className={about}>
					<a href='/about'>about</a>
				</li>
				<li className={resume}>
					<a href='/resume'>resume</a>
				</li>
				<li className={projects}>
					<a href='/projects'>projects</a>
				</li>
				<li className={contact}>
					<a href='/contact'>contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
