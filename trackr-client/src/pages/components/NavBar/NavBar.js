import { Link } from 'react-router-dom'
import * as userService from '../../../utilities/users-services'
import './NavBar.css'

export default function NavBar() {
	return (
		<div className="top-nav-container">
			<div className="top-nav">
                <nav>
				<span className='link'>TRACKR</span> 
				<span className="divider">|</span> &nbsp;
                <span className='link'>TRACKR</span> 

                </nav>
			</div>
		</div>
	)
}
