import React, { Component } from 'react';
import Image from './Image';

class Content extends Component {
  render() {
    return (
      <section className="profiles">
        
        {/* Картка Артема */}
        <div className="profile-card">
          <h2>Жмура Артем Анатолійович</h2>
          <p>Народився 3 серпня 2006 року в Миколаєві, Україна.</p>
          <p>Закінчив Миколаївський муніципальний колегіум, зараз навчаюсь 3 курс 123 спеціальність в КПІ на ФІОТ</p>

          <h3>Мої хобі:</h3>
          <ul>
            <li>Програмування</li>
            <li>Гра на гітарі</li>
            <li>Подорожі та фотографія</li>
          </ul>

          <h3>Улюблені книги/фільми:</h3>
          <ol>
            <li>«Хроніки Буресвітла» — Брендон Сандерсон</li>
            <li>«Interstellar» — реж. Крістофер Нолан</li>
            <li>«Три товариші» — Е.М. Ремарк</li>
          </ol>

          <p>
            Моє улюблене місто — Київ. Воно має унікальну атмосферу старого європейського міста, дуже глибоку історію,
            вузькі вулички, живу атмосферу та багато історичних пам'яток.
          </p>

          {/* Компонент Image для Артема */}
          <Image 
            src="https://royaldesign.ua/file/495/cc/t9/Rx/1.BNb2.jpg" 
            alt="Батьківщина Мати, Київ"
            link="https://the-city.kiev.ua"
          />
        </div>

        {/* Картка Маргарити */}
        <div className="profile-card">
          <h2>Сахно Маргарита Юріївна</h2>
          <p>Народилася 11 липня 2006 року в Києві, Україна.</p>
          <p>Закінчила Технічний ліцей НТУУ "КПІ", зараз навчаюсь 3 курс 123 спеціальність в КПІ на ФІОТ</p>

          <h3>Мої хобі:</h3>
          <ul>
            <li>Гра на барабанах</li>
            <li>Танці</li>
            <li>LEGO</li>
          </ul>

          <h3>Улюблені книги/фільми:</h3>
          <ol>
            <li>"A Good Girl's Guide to Murder" - Holly Jackson</li>
            <li>"HTYYD - How to Train Your Dragon" - DreamWorks Animation</li>
            <li>"The Hunger Games" - Suzanne Collins</li>
          </ol>

          <p>
            Моє улюблене місто — Вінниця. Воно подібне до Києва, але менше за розміром, більш спокійне,
            із своєрідною архітектурою та атмосферою, тому теж гарне і затишне.
          </p>

          {/* Компонент Image для Маргарити */}
          <Image 
            src="https://back.uniqa.ua/storage/news/images/medium/vT6Vs2K3qyeaJBNCcRCbR8Z9BfFb8Jx58afS3clV.jpg?v=1722511676" 
            alt="Вулиці Вінниці"
            link="#" 
          />
        </div>

      </section>
    );
  }
}

export default Content;
