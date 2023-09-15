const Nav = props => {
	const { home, about, projects, contact } = props
	return (
		<nav className='pl-6 -mb-6'>
			<ul className='Nav font-Urbanist font-light flex flex-col gap-5 text-sm lg:text-base'>
				<li className={home}>
					<a href='/'>home</a>
				</li>
				<li className={about}>
					<a href='/about'>about</a>
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
