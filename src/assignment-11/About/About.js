import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="row col-lg-6 col-md-8 mx-auto text-center">
                <h2 className="mt-5 mb-4 text-center">Keep Stock</h2>
                <p>
                    Welcome to the Keep Stock. This is a simple inventory management
                    system that will allow you to add, update, and delete items from your
                    inventory.
                    <hr />
                </p>
            </div>
            <div className="row">
                <div className="text-start col-lg-8 col-12 mx-auto">
                    <span style={{ borderLeft: "10px solid" }}>
                        <h4 className="d-inline">
                            &nbsp; Inventory managed. Space organized. Time and money saved.
                        </h4>
                    </span>
                    <h6 className="text-danger">
                        What if there were an easier way to ensure you have the right parts,
                        tools and supplies in the right place right when you need them?
                    </h6>
                    <p className="">
                        Put Keep Stock's expertise to work for you. It's almost like
                        managing your stuff — those critical inventory items that keep your
                        operations running — on autopilot. From customer controlled
                        inventory solutions to industrial vending machines and more onsite
                        support when you need it, see how Keep Stock's Inventory Management
                        solutions and our inventory specialists can help you save time,
                        space and money.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;