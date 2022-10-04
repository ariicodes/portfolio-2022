const ContactForm = () => {
	return (
		<div className='font-PF w-8/12 pt-6 pl-6 pr-2 text-sm absolute right-1/3 leading-5 tracking-wide md:-left-0.5 lg:text-base lg:w-8/12 lg:mr-40'>
			<form onSubmit={handleSubmit} className='flex flex-col gap-6 lg:flex-row lg:gap-10'>
				<div className='flex flex-col gap-2 lg:w-7/12'>
					<label htmlFor='first-name'>first name</label>
					<input
						className='bg-transparent border-b-2 border-white/50 outline-none caret-tufts-blue'
						type='text'
						id='first-name'
						name='first-name'
					/>
					<label htmlFor='last-name'>last name</label>
					<input
						className='bg-transparent border-b-2 border-white/50 outline-none caret-tufts-blue'
						type='text'
						id='last-name'
						name='last-name'
					/>
					<label htmlFor='phone'>phone</label>
					<input
						className='bg-transparent border-b-2 border-white/50 outline-none caret-tufts-blue'
						type='tel'
						id='phone'
						name='phone'
					/>
					<label htmlFor='email'>email</label>
					<input
						className='bg-transparent border-b-2 border-white/50 outline-none caret-tufts-blue'
						type='email'
						id='email'
						name='email'
					/>
				</div>
				<div className='flex flex-col gap-2 lg:gap-4 lg:w-7/12'>
					<p>reason for contacting:</p>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='contact-reason'
							id='career-opportunity'
							value='career-opportunity'
						/>
						<label htmlFor='career-opportunity'>career opportunity</label>
					</div>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='contact-reason'
							id='project-collaboration'
							value='project-collaboration'
						/>
						<label htmlFor='project-collaboration'>project collaboration</label>
					</div>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='contact-reason'
							id='ui-design-project'
							value='ui-design-project'
						/>
						<label htmlFor='ui-design-project'>ui design project</label>
					</div>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='contact-reason'
							id='web-dev-project'
							value='web-dev-project'
						/>
						<label htmlFor='web-dev-project'>web dev project</label>
					</div>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='contact-reason'
							id='other'
							value='other'
						/>
						<label htmlFor='other'>
							other <span className='italic'>(please specify)</span>
						</label>
					</div>
					<textarea
						className='bg-white/10 border-none border-white/50 outline-none caret-tufts-blue rounded-md p-2'
						name='contact-reason'
						id='other-details'
						cols='30'
						rows='4'
					></textarea>
					<input
						className='font-black font-PFSC text-lg text-right text-blush hover:text-cerise active:text-cerise focus:text-cerise lg:text-xl'
						type='submit'
						value='Submit'
					/>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
