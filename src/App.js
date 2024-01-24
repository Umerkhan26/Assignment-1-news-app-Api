// // src/App.js
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Header from './Header';
// import NewsCard from './NewsCard';

// function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=2d1dbc45c1354f3a90212c311ee8ffeb'
//         );
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="container-fluid p-0 bg-dark">
//       <div className="container">
//         <Header />
//         <h2 className="text-center mb-4 text-white">Latest News</h2>
//         <div className="row">
//           {articles.map((article, index) => (
//             <NewsCard key={index} article={article} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import NewsCard from './NewsCard';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=2d1dbc45c1354f3a90212c311ee8ffeb'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check if 'data.articles' is defined before setting state
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container-fluid p-0 bg-dark">
      <div className="container">
        <Header />
        <h2 className="text-center mb-4 text-white">Latest News</h2>
        <div className="row">
          {articles && articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
