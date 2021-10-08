import React from "react";
import { Link } from "react-router-dom";
const UserNav = () => {
	return (
		<nav>
			<ul className="nav flex-column">
				<li className="nav-item">
					<Link to="/student" className="nav-link">
						Student
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/students" className="nav-link">
						Students
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/faculty" className="nav-link">
						Faculty
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/faculties" className="nav-link">
						Faculties
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/subject" className="nav-link">
						Subject
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default UserNav;
