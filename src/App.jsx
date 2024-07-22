import React, { useEffect, useState } from 'react';
import './App.css';

const items = [
  { title: 'Havells Digi Touch', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/digi.png' },
  { title: 'Havells Digi Plus', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/digiPlus.png' },
  { title: 'Havells Max', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/max.png' },
  { title: 'Havells UV Plus', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/uvPlus.png' },
  { title: 'Blue Star Genia', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/genia.png' },
  { title: 'Blue Star Majesto', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/majesto.png' },
  { title: 'BM-1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM1.png' },
  { title: 'BM-2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM2.png' },
  { title: 'BM-3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM3.png' },
  { title: 'Organic', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/organic.png' },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.querySelector('.carousel');
      const proportion = carousel.getBoundingClientRect().top / window.innerHeight;
      const index = Math.ceil(-1 * (proportion + 1));

      if (index >= 0 && index < items.length) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="center">
      <div className="top">Our Products</div>
      <div className="carousel">
        <div className="left">
          {items.map((item, i) => (
            <div className="left-item" key={i}>
              <div className="title">{item.title}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="right">
          {items.map((item, i) => (
            <div className={`item ${i === activeIndex ? 'active' : ''}`} key={i}>
              <img src={item.img} alt={item.title} />
              <button type="button">View More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
