import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/books');

        setCardsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id} className="sm:flex sm:justify-center mt-5 -ml-6">
          <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
            <a href="#!">
              <img
                className="rounded-t-lg sm:rounded-tr-none"
                src=""
                alt={card.title}
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {card.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {card.description}
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <small>Price {card.price}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
