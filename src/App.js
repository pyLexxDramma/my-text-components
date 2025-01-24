// src/App.js
import React, { useEffect, useState } from 'react';
import TextComponent from './TextComponent'; // Убедитесь, что путь правильный

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/text');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <TextComponent
          key={index}
          header={item.header}
          options={item.options}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default App;
