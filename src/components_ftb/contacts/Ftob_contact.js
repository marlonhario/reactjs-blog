import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Ftob_contact.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


import { Consumer } from '../context';

class Contact extends Component {

	// using this.state in regular functions ===============
	// constructor() {
	// 	super();
	// 	this.state = {};
	// 	this.onShowClick = this.onShowClick.bind(this);
	// }
	// onShowClick() {
	// 	console.log(this.state);
	// }


	state = {
		showContactInfo: false
	};

	// these will be put in context
	// onDeleteClick = () => {
	// 	this.props.deleteClickHandler();
	// }


	// ================================== first option
	onDeleteClick = async (id, dispatch) => {
		// do nt apply try catch on real database
		try {
			await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({type: 'DELETE_CONTACT', payload: id});
		} catch(e) {
			dispatch({type: 'DELETE_CONTACT', payload: id});
		}
		
	}



	// ================================== first option
	// onDeleteClick = (id, dispatch) => {
	// 	axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
	// 		.then(res => dispatch({type: 'DELETE_CONTACT', payload: id}));

	// 	// dispatch({type: 'DELETE_CONTACT', payload: id});
	// }


	onShowClick = (e) => {
		// console.log(this.state);
		// console.log(id);
		this.setState({ showContactInfo: !this.state.showContactInfo });
	}

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;

					return (
						<div className="card card-body mb-3">
							<h4>{name}{' '}
								<i style={{cursor: 'pointer'}} onClick={this.onShowClick.bind(this, name)} className="fa fa-sort-down" />
								<i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
								<Link to={`/ftob_1/editcontact/${id}`}>
									<i 
										className="fa fa-pencil"
										style={{
											cursor: 'pointer',
											float: 'right',
											color: 'black',
											marginRight: '1rem'
										}}
									></i>
								</Link>
							</h4>
							<div className="container">
								{showContactInfo ? (
									<ul className="list-group">
										<li className="list-group-item">Email: {email}</li>
										<li className="list-group-item">Phone: {phone}</li>
									</ul>
								): null}
							</div>
						</div>
					)
				}}
			</Consumer>
		);
	}

	// render() {
	// 	// const { contact } = this.props;
	// 	const { name, email, phone } = this.props.contact;
	// 	const { showContactInfo } = this.state;
	// 	return (
	// 		<div className="card card-body mb-3">
	// 			<h4>{name}{' '}
	// 				<i style={{cursor: 'pointer'}} onClick={this.onShowClick.bind(this, name)} className="fa fa-sort-down" />
	// 				<i onClick={this.onDeleteClick} className="fa fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
	// 			</h4>
	// 			<div className="container">
	// 				{showContactInfo ? (
	// 					<ul className="list-group">
	// 						<li className="list-group-item">Email: {email}</li>
	// 						<li className="list-group-item">Phone: {phone}</li>
	// 					</ul>
	// 				): null}
	// 			</div>
	// 		</div>
	// 	)
	// }
}

Contact.defaultProps = {
	name: 'None',
	email: 'None',
	phone: 'None'
};

// Contact.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	email: PropTypes.string.isRequired,
// 	phone: PropTypes.string.isRequired
// };

Contact.propTypes = {
	contact: PropTypes.object.isRequired
	// deleteClickHandler: PropTypes.func.isRequired
};


export default Contact;