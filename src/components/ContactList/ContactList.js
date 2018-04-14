import React, { Component } from 'react';
import axios from '../../axios';
import Spinner from '../UI/Spinner/Spinner';
import './ContactList.css';

class ContactList extends Component {
    state = {
        error: false,
        loading: false,
        contacts: []
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get( '/contacts.json').then( response => { 
            const fetchedOrders = [];
            for (let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key],
                    id: key
                });
            }
            this.setState({contacts:fetchedOrders});
            this.setState({loading: false});
        } )
        .catch(error => {
            console.log(error);
            this.setState({error: true});
            this.setState({loading: false});
        });
    }

    deleteHandler = (item) => {
        this.setState({loading: true});
        axios.delete( 'contacts/' + item.id+".json" ).then( response => {
            console.log("Item deleted");
            //
            // remove item dos contacts
            var array = this.state.contacts;
            var index = array.indexOf(item)
            array.splice(index, 1);
            this.setState({contacts: array });
            //
            this.setState({loading: false});
        }).catch(error => {
            console.log(error);
            this.setState({loading: false});
        });
    }

    render () {
        let lista = "";
        //
        if (!this.state.error) {
            lista = <table className="table">
                <thead><tr>
                    <th style={{textAlign:'center'}}>Name</th>
                    <th style={{textAlign:'center'}}>E-mail</th>
                    <th style={{textAlign:'center'}}>Phone</th>
                    <th style={{textAlign:'center'}}>Cellphone</th>
                    <th style={{textAlign:'center'}}>Delete</th>
                </tr></thead>
                <tbody>
                    {this.state.contacts.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.cellphone}</td>
                            <td><a style={{cursor:'pointer'}} onClick={this.deleteHandler.bind(this,item)}><i className="far fa-trash-alt"></i></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        } else {
            lista = (<div className="alert alert-danger" role="alert">
                Error to load data.
            </div>);
        }
    
        if(this.state.loading) {
            lista = <Spinner/>;
        }

        if(this.state.contacts.length === 0){
            lista = <div class="alert alert-warning" role="alert">There's no contact to show.</div>
        }

        return(
            <div className="ContactList">
                <h4>Contact list</h4>
                {lista}
            </div>
        )
    }
}

export default ContactList;
