import React, { Component } from 'react';
import './Products.scss';
import { ProductCard } from '../../components/Cards/ProductCard';

class Products extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
       
    }

    static getProducts() {

    }

    render() {
        return (
            <div className="product-row">
                {/* My products container */}
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        )
    }
}

export default Products;
