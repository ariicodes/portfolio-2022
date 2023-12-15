import github from '../assets/github.svg';
import link from '../assets/link.svg';
// import sun from '../assets/sun.png';

const Project = ({ icon, altText, repo, url, title }) => {
	return (
		<div className='flex flex-col gap-1.5'>
			<div className='flex gap-4'>
				<div className='flex flex-row justify-center items-center w-28 p-2 bg-pale-cerulean bg-no-repeat bg-cover rounded-md'>
					<img
						src={icon}
						alt={altText}
						width='180'
						height='150'
					/>
				</div>
				<div className='flex flex-col justify-around py-3 italic'>
					<a
						href={repo}
						target='_blank'
						rel='noreferrer'
						className='flex gap-2'
					>
						<img
							className='w-6'
							src={github}
							alt='github logo'
						/>
						<p className='text-sm underline underline-offset-4 hover:text-pale-cerulean'>
							repo
						</p>
					</a>
					<a
						href={url}
						target='_blank'
						rel='noreferrer'
						className='flex gap-2'
					>
						<img
							className='w-6'
							src={link}
							alt='link icon'
						/>
						<p className='text-sm underline underline-offset-4 hover:text-pale-cerulean'>
							live app
						</p>
					</a>
				</div>
			</div>
			<div>
				<h2 className='text-xl font-semibold'>{title}</h2>
			</div>
		</div>
	);
};

export default Project;
