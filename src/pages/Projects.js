import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import dish from '../assets/dish.png'
import holiday from '../assets/holiday.png'
import onlineLibrary from '../assets/online-library.png'

const projectsList = [
	{ icon: dish, altText: 'lineart plate wit fork and spoon', repo: 'https://github.com/ariicodes/recipe-tracker-app', url: 'https://recipe-tracker-app.ariicodes.com/', title: 'Recipe Tracker App'},
	{ icon: holiday, altText: 'lineart beach chair and umbrella in front of a calendar', repo: 'https://github.com/ariicodes/thinkfulbnb', url: 'https://thinkfulbnb.ariicodes.com', title: 'Thinkfulbnb'},
	{ icon: onlineLibrary, altText: 'lineart books in front of a computer', repo: 'https://github.com/ariicodes/local-library-project', url: 'https://local-library.ariicodes.com', title: 'Library App'},
]

const Projects = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
			<div className='flex flex-row-reverse relative'>
				<Header heading='Projects' />
				<div className='flex flex-col font-Urbanist w-8/12 pt-6 pl-6 absolute right-1/3 gap-4 md:-left-0.5 lg:text-xl lg:w-4/12 lg:flex-row lg:gap-6'>
					{projectsList.map((project, index) => (
						<Project key={index} icon={project.icon} altText={project.altText} repo={project.repo} url={project.url} title={project.title} />
					))}
				</div>
			</div>
			<div>
				<div className='flex flex-row justify-between items-end'>
					<Nav
						home='hover:text-white/50 active:text-white/50'
						about='hover:text-white/50 active:text-white/50'
						resume='hover:text-white/50 active:text-white/50'
						projects='text-blush italic font-bold'
						contact='hover:text-white/50 active:text-white/50'
					/>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Projects;
