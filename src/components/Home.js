import React from 'react';
import img1 from '../components/img1.png';
import home from '../css/home.css'
import Cards from './Cards';

const Home = () => {
  return (
    <div className='mainhome'>
    <div className="-mt-4 flex flex-wrap items-center justify-center" id="home">
      <div className="flex-1 m-2 -mt-12">
        <h1 className="text-3xl font-semibold m-2 text-blue-300 -mt-13 text-center">Book Storage App</h1>
        <p className="m-2 font-semibold text-gray-400 text-center ">
          
Embark on literary adventures with this curated selection of the latest releases. From heart-pumping thrillers that will keep you on the edge of your seat to captivating memoirs that unveil compelling life stories, this week's lineup promises diverse and engaging reads. Whether you seek escapism or introspection, these books offer something for everyone. Update your reading list and immerse yourself in the rich tapestry of storytelling that awaits you. Explore new worlds, unravel mysteries, and be captivated by the literary gems that this week has unveiled.
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
