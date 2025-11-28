import React, { useState } from 'react';

function Image({ src, alt, link }) {
  const [width, setWidth] = useState(100); // ширина у %
  const [isVisible, setIsVisible] = useState(true);

  // Стилі для зображення
  const imgStyle = {
    width: `${width}%`,
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '15px',
    display: isVisible ? 'block' : 'none',
    transition: 'width 0.3s ease'
  };

  const handleAdd = () => {
    setIsVisible(true);
    setWidth(100);
  };

  const handleZoomIn = () => setWidth(prev => prev + 10);
  const handleZoomOut = () => setWidth(prev => (prev > 10 ? prev - 10 : prev));
  const handleRemove = () => setIsVisible(false);

  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} style={imgStyle} className="city-photo" />
      </a>

      <div className="button-group" style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleZoomIn}>Збільшити</button>
        <button onClick={handleZoomOut}>Зменшити</button>
        <button onClick={handleRemove}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
