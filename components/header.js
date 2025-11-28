import React, { useState } from 'react';

function Header() {
  // Стан для кольорів заголовка та підзаголовка
  const [titleStyle, setTitleStyle] = useState({});
  const [subtitleStyle, setSubtitleStyle] = useState({});

  // Функція для рандомного кольору
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Обробники кліків
  const handleTitleClick = () => {
    setTitleStyle({
      backgroundColor: getRandomColor(),
      color: getRandomColor()
    });
  };

  const handleSubtitleClick = () => {
    setSubtitleStyle({
      backgroundColor: getRandomColor(),
      color: getRandomColor()
    });
  };

  return (
    <header className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 
        className="title" 
        style={{ ...titleStyle, cursor: 'pointer', padding: '10px' }} 
        onClick={handleTitleClick}
      >
        Про авторів
      </h1>
      <p 
        className="subtitle" 
        style={{ ...subtitleStyle, cursor: 'pointer', padding: '10px' }} 
        onClick={handleSubtitleClick}
      >
        Сторінка про студентів, які працювали над проєктом
      </p>
    </header>
  );
}

export default Header;
