import React, { Component } from 'react'
import Product from './Product'
import ProductStore from '../stores/ProductStore'

class VendingMachine extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            tokens: 0
        }

        // implement addTokens that increments the number of tokens by 1 at 
        // each press of the add token button (0.5 pts)
        this.addToken = () => {
            this.setState({
                tokens: this.state.tokens + 1
            });
        }

        // implement buyProduct thet substracts the tokens with the price of 
        // the product; if there are not enough tokens nothing happens (0.5 pts)
        this.buyProduct = (price) => {
            if (this.state.tokens >= price) {
                this.setState({
                    tokens: this.state.tokens - price
                });
            }
        }
    }

    render() {
        // the list of products is loaded from the ProductStore when VendingMachine 
        // is rendered (0.5 pts)
        let productStore = new ProductStore();
        this.state.products = productStore.getAll();

        return (
            <div>
                {this.state.products.map((el, index) => <Product key={index} name={el.name} price={el.price} onBuy={this.buyProduct}  />)}
                <div>Tokens: {this.state.tokens}</div>
                <input type="button" value="add token" onClick={this.addToken}/>
            </div>
        )
    }
}

export default VendingMachine