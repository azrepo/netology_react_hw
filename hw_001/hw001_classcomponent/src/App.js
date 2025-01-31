import './App.css';
import React from "react";
import ShopItemClass from './ShopItemClass.js';

class App extends React.Component {
  itemTest = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };

  render() {
    return(
      <div>
        <ShopItemClass item={this.itemTest}/>
      </div>
    );
  }
}

export default App;
