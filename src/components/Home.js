import React from 'react';
import img1 from '../components/img1.png';
import home from '../css/home.css'
import Cards from './Cards';

const Home = () => {
  return (
    <div className='mainhome'>
    <div className="-mt-4 flex flex-wrap items-center justify-center" id="home">
      <div className="flex-1 m-2 -mt-12">
        <h1 className="text-3xl font-bold m-2 -mt-13">New Release This Week</h1>
        <p className="m-2 font-bold ">
          It's time to update your reading list with some of the latest <br /> and greatest releases in the literary world,
          heart-pumping thrillers<br /> to captivating memories, this week's new release offers something for everyone.
        </p>
      </div>
      <div className="flex-2 -mt-12">
        <img src={img1} alt="newbook" height={400} width={400} />
      </div>
    </div>
      <div className='m-8' height={200} width={100}>

    <Cards/>

      </div>

    </div>
  );
};

export default Home;
