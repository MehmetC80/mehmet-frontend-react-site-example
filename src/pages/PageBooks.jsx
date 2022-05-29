import { useEffect, useState } from 'react';

export const PageBooks = () => {
  const url = 'https://edwardtanguay.netlify.app/share/techBooks.json';

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchTechBooks = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setBooks(data);
    };

    fetchTechBooks();
  }, []);

  return (
    <div className='books'>
      <h2>Books</h2>
      <p>Here one book picture: </p>
      <img src='images/bashCookbook.jpg' alt='bashbook cover' />

      <div className='techBooks'>
        <p>Also fetch books from ohter sites: </p>
        <ul>
          {books.map((book) => {
            return <li key={book.id}> {book.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
