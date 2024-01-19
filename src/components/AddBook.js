import React, { useState } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const AddBook = () => {

  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');

  const [edition, setEdition] = useState('');
  const [year, setYear] = useState('');

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/books", {
        title:title,
        author: author,
        price: price,
        description: desc,
        image: url,
        edition: edition,
        year: year
      });

      // Assuming the response structure has an email property
      const registeredBook = response.data.title;

      NotificationManager.success(`Book ${registeredBook} has been successfully added`, "", 3000);
    } catch (err) {
      console.log(err);
      NotificationManager.error(err.response.data, '', 3000);
    }
  };

  return (
    <div>

<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-bold text-center text-xl text-gray-600">Add Book</h2>
      <p className="text-gray-700 text-center mb-6">Please enter correct details of book</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Book Details</p>
            <p>Please fill out all the fields.</p>
          </div>
          <form className="mx-1 mx-md-4" onSubmit={(e) => register(e)}>
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="full_name">Book Title</label>
                <input
                 onChange={(e) => setTitle(e.target.value)}
                 value={title}
                type="text" 
                name="Book_title" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Book Title'  />
              </div>

              <div className="md:col-span-5">
                <label for="email">Author Name</label>
                <input 
                onChange={(e) => setauthor(e.target.value)}
                value={author}
                type="text" name="author" id="author" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"placeholder="Author Name" />
              </div>


              <div className="md:col-span-5">
                <label for="email">Price</label>
                <input 
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text" name="edition" id="edition" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Price" />
              </div>

              <div className="md:col-span-5">
                <label for="address">Description</label>
                <input type="text"
                 onChange={(e) => setDesc(e.target.value)}
                 value={desc}
                name="year" id="year" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Description" />
              </div>


              <div className="md:col-span-5">
                <label for="address">Image Url</label>
                <input type="text"
                 onChange={(e) => setUrl(e.target.value)}
                 value={url}
                name="year" id="year" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Image URL" />
              </div>

              <div className="md:col-span-5">
                <label for="address">Book Edition</label>
                <input type="text"
                 onChange={(e) => setEdition(e.target.value)}
                 value={edition}
                name="year" id="year" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Book edition" />
              </div>

              <div className="md:col-span-5">
                <label for="year">Published Year</label>
                <input type="text"
                 onChange={(e) => setYear(e.target.value)}
                 value={year}
                name="year" id="year" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Published Year" />
              </div>



      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type='submit' onSubmit={(e) => register(e)}>Add</button>
                </div>
              </div>
            </div>
          </div>
</form>
        </div>
      </div>
    </div>

    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
    </a>
  </div>
</div>

    </div>
  )
}

export default AddBook
