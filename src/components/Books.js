import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBook, setSearchedBook] = useState(null);

  const searchBook = async () => {
    try {
      if (searchQuery.trim() === '') {
        // If search query is empty, set searchedBook to null
        setSearchedBook(null);
      } else {
        // If there is a search query, perform the search
        const response = await axios.get(`http://localhost:3001/api/books?search=${searchQuery}`);
        if (response.data.length > 0) {
          // Check for an exact match with the search query
          const exactMatch = response.data.find(
            (book) => book.title.toLowerCase() === searchQuery.toLowerCase()
          );

          setSearchedBook(exactMatch || null);
        } else {
          setSearchedBook(null);
        }
      }
    } catch (err) {
      console.error(err);
      NotificationManager.error(err.response.data, '', 3000);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchBook();
  };

  useEffect(() => {
    // Optionally, you can perform an initial search on component mount here
  }, []);

  return (
    <div>
      <div className="md:col-span-5">
        <form onSubmit={handleSearchSubmit}>
          <label htmlFor="search">Search Book</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="search"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Enter book title or author"
          />
        </form>
      </div>

      {searchedBook && (
        <div>
          <p className="font-medium text-lg mt-4">Search Result</p>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Year</th>



                {/* Add additional table headers for other book details */}
              </tr>
            </thead>
            <tbody>
              <tr key={searchedBook.id}>
                <td className="border px-4 py-2">{searchedBook.title}</td>
                <td className="border px-4 py-2">{searchedBook.author}</td>
                <td className="border px-4 py-2">{searchedBook.description}</td>
                <td className="border px-4 py-2">{searchedBook.price}</td>
                <td className="border px-4 py-2">{searchedBook.year}</td>

                


                {/* Add additional table cells for other book details */}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {!searchedBook && (
        <p className="font-medium text-lg mt-4">No matching result found</p>
      )}
    </div>
  );
};

export default SearchBook;
