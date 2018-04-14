import React, { Component } from 'react';
import axios from '../../axios';
import Aux from '../../hoc/Aux';
import Spinner from '../UI/Spinner/Spinner';
import './NewContact.css';

class NewContact extends Component {

    state = {
        name:'',
        email: '',
        phone: '',
        cellphone: '',
        loading: false
    }

    adicionarContato = ( event ) => {
        this.setState( { loading: true } );

        const contato = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            cellphone: this.state.cellphone
        }
        
        axios.post( '/contacts.json', contato )
        .then( response => {
            this.setState( { loading: false } );
            console.log("Contato inserido com sucesso!");
            debugger
            // remove item dos contacts
            this.state.contacts.push(contato);
        } )
        .catch( error => {
            this.setState( { loading: false });
            console.log(error);
        } );
    }

    render () {
        let form = (
        <Aux>
            <form>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control"
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})}
                            type="text" name="name" placeholder="name"/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control"
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                            type="email" name="email" placeholder="Email" ng-pattern="/^.+@.+$/"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" 
                        value={this.state.phone}
                        onChange={(event) => this.setState({phone: event.target.value})}
                        type="text" name="phone" placeholder="phone" ng-pattern="/^\+?(\d.*){3,}$/"/>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control"
                        value={this.state.cellphone}
                        onChange={(event) => this.setState({cellphone: event.target.value})}
                        type="text" name="cellphone" placeholder="cellphone" ng-pattern="/^\+?(\d.*){3,}$/"/>
                    </div>
                </div>
            </form> 
            <div className="form-group row">       
                <button type="button" style={{marginRight:'2em'}} className="btn btn-primary" onClick={this.adicionarContato}>Add</button>
            </div>  
        </Aux>
        );

        if(this.state.loading) {
            form = <Spinner/>;
        }

        return (
            <div className="ContactData">
                <h4>New Contact</h4>
                {form}
            </div>
        );
    }
}
export default NewContact;