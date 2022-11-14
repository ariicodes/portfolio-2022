const Error = () => {
	return (
		<div className='font-Urbanist w-screen h-screen flex flex-col justify-center items-center text-center gap-4'>
			<h1 className='text-5xl font-black'>
				ERROR!
				<br />
				<br />
				PAGE DOES NOT EXIST!
			</h1>
			<a
				className='text-4xl text-blush font-bold underline underline-offset-4 decoration-1 hover:text-cerise active:text-cerise focus:text-cerise'
				href='/'
			>
				Return Home
			</a>
		</div>
	)
}

export default Error
