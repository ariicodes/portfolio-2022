import Resume from '../assets/ariela-israel-resume-8-2022.pdf'

const resume = [
	{
		position: 'Web Designer & Developer',
		date: 'MAY 2021 - Current',
		company: 'Help Meets',
		details: [
			'• Assisted with Brand Development using Adobe Photoshop and Adobe Illustrator.',
			'• Designed websites using Adobe Xd and Figma.',
			'• Developed websites using HTML5, CSS3, JavaScript ES6, and Bootstrap.',
		],
	},
	{
		position: 'Retail Sales Representative',
		date: 'AUG 202 - JUL 2021',
		company: 'MarketSource Inc',
		details: [
			'• Successfully resolved technical issues involving mobile phones with 96% effeciency.',
			'• Ensured that our team met or exceeded sales of postpaid cellular phones per month.',
		],
	},
	{
		position: 'Retail Sales Associate',
		date: 'OCT 2018 - AUG 2020',
		company: 'CVS Pharmacy',
		details: [
			'• Improved the quality of customer service at this location within the span of 30 days which resulted in customer retention.',
			'• Successfully promoted and sold a new customer rewards program and exceeded daily quotas.',
		],
	},
	{
		position: 'Salon Assistant',
		date: 'SEP 2017 - OCT 2018',
		company: 'The Hair Company USA',
		details: [
			'• Assisted owner with marketing strategies via social media and storefront to draw in new clients and retain existing clients as well.',
			'• Effectively operated the PC, telephone, register, and spoke with clients in person while maintaining my workspace and fulfilling all tasks on my agenda in a timely manner.',
		],
	},
]

const ResumeContent = () => {
	return (
		<div className='font-PF w-9/12 pt-6 pl-6 text-xs absolute left-0 leading-4 md:-left-0.5 lg:text-base lg:w-5/12 lg:mr-40'>
			{resume.map(job => (
				<>
					<h3>
						<span className="font-bold text-pale-cerulean">{job.position}</span> – {job.date}
					</h3>
					<p className="italic">{job.company}</p>
					<ul className='pb-4'>
						{job.details.map(i => (
							<li>{i}</li>
						))}
					</ul>
				</>
			))}
            <a className='text-lg font-PFSC font-black text-blush lg:text-2xl' href={Resume}>Download</a>
		</div>
	)
}

export default ResumeContent
