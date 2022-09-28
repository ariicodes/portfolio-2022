import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
	return (
		<ul>
			<li>
				<a href=''>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</li>
			<li>
				<a href=''>
					<FontAwesomeIcon icom={faGithub} />
				</a>
			</li>
			<li>
				<a href=''>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</li>
		</ul>
	)
}

export default Socials