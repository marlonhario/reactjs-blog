import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { branding } = props;
 
	return (
		<div>
			<h1 style={{color: 'red', fontSize: '30px'}}>{branding}</h1>
			<h1 style={headingStyle}>Address</h1>

			<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
				<div className="container">
					<a href="/ftob_1" className="navbar-brand">{branding}</a>
					<div>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to="/ftob_1" className="nav-link"><i className="fa fa-home"></i> Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/ftob_1/addcontact" className="nav-link"><i className="fa fa-plus"></i> Add</Link>
							</li>
							<li className="nav-item">
								<Link to="/ftob_1/about" className="nav-link"><i className="fa fa-question"></i>  About</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

const headingStyle = {
	color: 'yellow',
	fontSize: '18px'
};

Header.defaultProps = {
	branding: 'My App'
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;