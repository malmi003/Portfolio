import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row width-80">
                    <div class="col-md-12">
                        <h2 class="border-bottom border-secondary pageHeader">Contact</h2>
                    </div>
                    <div class="col-md-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input type="name" class="form-control border border-secondary" id="exampleInputName1" placeholder="Joanna Smith" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control border border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control border border-secondary" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Contact;