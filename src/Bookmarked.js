import React, { useEffect, useState } from 'react';
import NavBar from './Component/NavBar';
import { Link } from 'react-router-dom';
import Footer from './Component/Footer';
import './Bookmarked.css'
const BookmarkedRecipes = () => {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);

    const ReviewPage = () => {
        const [recipes, setRecipes] = useState([]);
      
        useEffect(() => {
            fetch('%PUBLIC_URL%/Storage.json')
                .then((response) => response.json())
                .then((data) => setRecipes(data))
                .catch((error) => console.error('Error loading recipes:', error));
        }, []);}
    

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
        setBookmarkedItems(storedBookmarks);
    }, []);

    if (bookmarkedItems.length === 0) {
        return <div className=''>
            <NavBar/>
            <p>No bookmarked recipes yet!</p>
            <Link to='/review-page' title='Recipe'>
            <button className='scroll-button'>Add now</button>
            </Link>
            <Footer/>
            </div>
        ;
    }

      

    return (
        <div className='halaman'>
<NavBar/>
            <h2>Your Bookmarked Recipes</h2>
            <div className="bookmarked-recipes">
                {bookmarkedItems.map((item) => (
                    <div key={item.id} className="recipe-card">
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                        <h3>{item.name}</h3>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Rating:</strong> {item.rating}</p>
                        <p><strong>Tags:</strong> {item.tags}</p>
                        {/* Optional link to detailed review if available */}
                        <button onClick={() => window.location.href = '/review-detail'}>Read More</button>
                    </div>
                ))}
            </div>
<Footer/>
        </div>
    );
};

export default BookmarkedRecipes;
