import React, { Component } from 'react';
import NavBar from './UI/NavBar/NavBar';
import NewContact from './Form/NewContact';
import ContactList from './ContactList/ContactList';
import Footer from './UI/Footer/Footer';

class App extends Component {
	render() {
		const logo = "Contact";
		const autor = "Fernando Kawano";
		return (
			<div className="container">
				<NavBar logo={logo}/>
				<NewContact/>
				<ContactList/>
				<Footer autor={autor}/>
			</div>
		);
	}
}

export default App;
