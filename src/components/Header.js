const Header = props => {
	const { heading } = props
	return (
		<header className='box-border rotate-90 absolute top-36 -right-28'>
			<h1 className='ml-16 mb-3 -mt-14 text-3xl font-bold font-PFSC'>
				{heading}
			</h1>
			<hr className='-ml-4 p-0 w-96' />
		</header>
	)
}

export default Header
