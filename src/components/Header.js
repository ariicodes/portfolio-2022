const Header = props => {
	const { heading } = props
	return (
		<header className='rotate-90 w-screen pl-16'>
			<h1 className='-m-2 font-PFSC text-3xl font-bold'>{heading}</h1>
			<hr className='-mx-12 my-6 h-2' />
		</header>
	)
}

export default Header
