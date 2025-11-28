import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import GoodsCard from './components/GoodsCard';

function App() {
  // Масив товарів для Галереї
  const goods = [
    { id: 1, name: 'Ноутбук', price: 25000, image: 'https://cdn-icons-png.flaticon.com/128/2704/2704414.png' },
    { id: 2, name: 'Телефон', price: 15000, image: 'https://cdn-icons-png.flaticon.com/128/2888/2888677.png' },
    { id: 3, name: 'Навушники', price: 2000, image: 'https://cdn-icons-png.flaticon.com/128/2662/2662228.png' },
    { id: 4, name: 'Годинник', price: 5000, image: 'https://cdn-icons-png.flaticon.com/128/10169/10169344.png' },
    { id: 5, name: 'Планшет', price: 12000, image: 'https://cdn-icons-png.flaticon.com/128/2645/2645212.png' },
    { id: 6, name: 'Камера', price: 18000, image: 'https://cdn-icons-png.flaticon.com/128/10157/10157245.png' },
  ];

  return (
    <div className="App" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      
      {/* Завдання 1: Переписана Лаб 4 */}
      <Header />
      <Content />

      <hr style={{ margin: '50px 0' }} />

      {/* Завдання 2: Галерея товарів */}
      <section>
        <h2 style={{ textAlign: 'center' }}>Галерея товарів</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {goods.map(item => (
            <GoodsCard 
              key={item.id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
