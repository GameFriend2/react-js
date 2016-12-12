/**
 * Created by ktk61 on 2016-12-05.
 */
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedkey : -1,
            keyword:'',
            contactData:[{
                name : 'Abel',
                phone : '010-0000-0001'
            },{
                name : 'Btos',
                phone : '010-0000-0002'
            },{
                name : 'Casde',
                phone : '010-0000-0003'
            },{
                name : 'David',
                phone : '010-0000-0004'
            }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.handleCreate =this.handleCreate(this);
        // this.handleRemove = this.handleRemove(this);
        // this.handleEdit =this.handleEdit(this);
    }

    handleChange(e){
        this.setState({
            keyword:e.target.value
    });

    }
    handleClick(key){
        this.setState({
            selectedkey:key
        })
    }
    //
    // handleCreate(contact) {
    //     this.setState({
    //         contactData: update(this.state.contactData, { $push: [contact]})
    //     })
    // }
    //
    // handleRemove(e){
    //     this.setState({
    //         contactData: update(this.state.contactData,
    //             { $splice : [[this.state.selectedkey, 1]] }
    //             ),
    //             selectedkey: -1
    //         });
    // }
    // handleEdit(name, phone){
    //     this.setState({
    //         contactData: update(this.state.contactData,
    //             {
    //                 [this.state.selectedkey] : {
    //                     name: {$set: name},
    //                     phone: {$set: phone}
    //                 }
    //             }
    //         )
    //     })
    // }

    render(){
        const mapToCompoenet = (data)=>{
            data.sort();
            data = data.filter(
                (contact)=>{
                    return contact.name.toLowerCase()
                            .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i)=>{
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => this.handleClick(i)}/>);
            });

        };


        return(
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToCompoenet(this.state.contactData)}</div>
                <ContactDetails
                    isSelected={this.state.selectedkey != -1}
                    contact={this.state.contactData[this.state.selectedkey]}/>
                <ContactCreate />
            </div>
        )
    }
}