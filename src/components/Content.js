import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center', margin: '10px', background: '#fff' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{name}</h3>
      <p style={{ color: '#007bff', fontWeight: 'bold' }}>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
