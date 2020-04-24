import React, { Component } from "react";
import Card from "../Card";
import { getProducts } from "../../services/productsService";

class Products extends Component  {
state = {
  products: [],
 };

 componentDidMount() {
    getProducts().then((res) => {
      const  { results: products} = res.data;
      this.setState({ products })
    });
 }

render() {
  return (
    <section className="uk-section">
      <div className="uk-container">
       <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
          {this.state.products.length> 0 ? (
          this.state.products.map((product, index) => (
            <Card key={index} {...product}/>
             )) )
             : (
            <div className="uk-alert-primary" uk-alert="true">
              <p>No products available at this time</p>
            </div>
          )}
       </div>
      </div>
    </section>
  );
 }
}

export default Products;

