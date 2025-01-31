function ShopItemFunc ({ item }) {
    const getDecimalPrice = (price) => price.toFixed(2);
    
    return (
        <div className="container">
            <div className="background-element"/>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <div className="main-content">
                    <h2>{item.brand}</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div className="description">{item.descriptionFull}</div>
                    <div className="highlight-window.mobile">
                        <div className="highlight-overlay"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{item.currency}{getDecimalPrice(item.price)}</div>
                        <button className="button">Add to cart</button>
                    </div>                    
                </div>
            </div>
        </div>
    );
}
  
export default ShopItemFunc;