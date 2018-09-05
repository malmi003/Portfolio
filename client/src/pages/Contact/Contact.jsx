import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {

    handleSubmit(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/api/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            console.log("in the front end")
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            } else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    };
    resetForm(){
        document.getElementById('contact-form').reset();
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row width-80">
                    <div className="col-md-12">
                        <h2 className="border-bottom border-secondary pageHeader">Contact</h2>
                    </div>
                    <div className="col-md-12">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="name" className="form-control border border-secondary" id="name" placeholder="Joanna Smith" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control border border-secondary" id="email" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control border border-secondary" id="message" rows="8"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Contact;