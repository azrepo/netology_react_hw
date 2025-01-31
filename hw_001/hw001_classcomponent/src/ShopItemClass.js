import React from 'react';

class ShopItemClass extends React.Component {
  getDecimalPrice = (price) => {
    return price.toFixed(2);
  };

  render() {
    return (
      <div className="container">
        <div className="background-element"/>
        <div className="highlight-window">
            <div className='highlight-overlay'></div>
        </div>
        <div className="window">
            <div className="main-content">
                <h2>{this.props.item.brand}</h2>
                <h1>{this.props.item.title}</h1>
                <h3>{this.props.item.description}</h3>
                <div className="description">{this.props.item.descriptionFull}</div>
                <div className="highlight-window.mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{this.props.item.currency}{this.getDecimalPrice(this.props.item.price)}</div>
                    <button className="button">Add to cart</button>
                </div>                    
            </div>
        </div>
      </div>
    );
  };
}

export default ShopItemClass;