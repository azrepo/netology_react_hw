import './App.css';
import ShopItemFunc from './ShopItemFunc.js';

function App() {
  const itemTest = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };

  return (
    <div> 
      <ShopItemFunc item={itemTest}/>
    </div>
  );
}

export default App;
