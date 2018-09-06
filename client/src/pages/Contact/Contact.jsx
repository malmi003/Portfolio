import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./Contact.css";
// import Map from "../../components/Map"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            confirmationMessage: "",
            messageSent: false,
            key: "",
        };
    };
    componentDidMount = () => {
            // this.apiKeyFunction()
    }
    // componentDidUpdate = (prevProps, prevState) => {
    //     if (this.state.key !== prevState.key) {
    //         this.apiKeyFunction()
    //         console.log("update")
    //     };
    // }
    // forceUpdateHandler () {
    //     this.forceUpdate();
    //     console.log("force")
    // }
    handleInputChange = (event, callback) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            },
            callback
        );
    };
    handleSubmit(event) {
        event.preventDefault();
        axios.post("/api/send",
            {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            }).then((response) => {
                if (response.data.msg === 'success') {
                    // alert("Message Sent.");
                    this.setState({
                        confirmationMessage: "Message successfully sent! I will get back to you as soon as possible.",
                        messageSent: true,
                    })
                    this.resetForm()
                } else if (response.data.msg === 'fail') {
                    // alert("Message failed to send.")
                    this.setState({
                        messageSent: false,
                        confirmationMessage: "My apologies - unable to send your message at this time.",
                    });
                };
            });
    };
    resetForm() {
        this.setState({
            name: "",
            email: "",
            message: "",
        });
    };
    // apiKeyFunction() {
    //     axios.get("/api/key")
    //     .then(data => {
    //         this.setState({
    //             key: data.data
    //         });
    //         console.log("setting state: ", data.data)
    //     })
    //     .catch(err => console.log(err))

    //     // this.forceUpdate();
    // };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="border-bottom border-secondary pageHeader">Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="name" className="form-control border border-secondary" id="name" placeholder="Joanna Smith"
                                    name="name"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email" className="form-control border border-secondary" id="email" aria-describedby="emailHelp" placeholder="example@email.com"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control border border-secondary" id="message"
                                    rows="8"
                                    name="message"
                                    onChange={this.handleInputChange}
                                    value={this.state.message}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                        {/* alert message at bottom */}
                        <div
                            className={
                                this.state.confirmationMessage === ""
                                    ? "d-none" : this.state.messageSent
                                        ? "alert alert-success mt-2"
                                        : "alert alert-danger mt-2"
                            }
                            role="alert"
                            value={this.state.confirmationMessage}
                        >
                            {this.state.confirmationMessage}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mx-auto" id="map-col">
                    <iframe title="map" src="https://snazzymaps.com/embed/96475" width="100%" height="600px" style={{"border":"none"}} id="map"></iframe>
                        {/* <Map 
                            apiKey={this.state.key}
                            onLoad={this.state.key !== "" ? this.forceUpdateHandler : ""}
                            key={this.state.key}
                        /> */}
                    </div>
                </div>
            </div>
        );
    };
};

export default Contact;