import React, { Component } from 'react'

class Product extends Component {
    // add the component Product to display the name, price and a button with the label 
    // buy that calls the onBuy method recieved by props (0.5 pts)
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            onBuy: props.onBuy
        }
	}

    render() {
        return <div>
            <li style={{display:'inline-block'}}>Name: {this.state.name}; Price: {this.state.price}</li>
            <input type="button" value="buy" onClick={(e) => this.state.onBuy(this.state.price)}/>
        </div>
    }
}

export default Product