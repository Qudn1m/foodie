import './App.css';
import React, { useRef } from "react";
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import Slider from './SlideShow';
import user1 from './Asset/user1.png';
import user2 from './Asset/user2.png';
import user3 from './Asset/user3.png';
import pasta from './Asset/pasta.jpg';
import swedish_meatball from './Asset/Swedish Meatball.jpg';
import Rendang from './Asset/Rendang.jpg';
import Burger from './Asset/Burger.jpg';
import Ayam from './Asset/Spicy chicken.jpg';
import Sate from './Asset/Sate.jpg';
function App() {

  const scrollContainer = useRef(null);

//  Function to scroll left
  // const scrollLeft = () => {
    // scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
  // };
 
//  Function to scroll right
   // const scrollRight = () => {
    // scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
  // };
  return (
    <div>
      <div className="home">
      <NavBar />
        <section className="hero">
          <h1>Discover the Best Food Recipe</h1>
        </section>
      <Slider />

        <section className="featured-reviews">
          <h3>Featured Recipe</h3>
          <div className="review-card-app" ref={scrollContainer}>
          <div className="scroll-container" ref={scrollContainer}>
          {/* <button className="scroll-button left" onClick={scrollLeft}>‹</button> */}
          <div className="recipe-container">
            <div className='recipe-content'>
              <img src={pasta} alt="Pasta" />
              <h4>Delicious Pasta</h4>
              <p>A delightful experience with creamy sauce and <b>fresh ingredients</b></p>
            </div>
              <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
            </div>
            <div className="recipe-container">
          <div className="recipe-content">
          <img src={swedish_meatball} alt="Swedish Meatball" />
              <h4>Legendary Swedish Meatball</h4>
              <p>A delightful Recipe for <b>legendary Swedish Meatball</b></p>
            </div>
            <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
            </div>
            <div className="recipe-container">
          <div className="recipe-content">
              <img src={Rendang} alt="Rendang" />
              <h4>Rendang</h4>
              <p>Recipe for the <b>best dish In The World</b></p>
            </div>
            <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
            </div>
            <div className="recipe-container">
          <div className="recipe-content">
              <img src={Burger} alt="Burger" />
              <h4>Burger</h4>
              <p>Recipe for Healty Homemade Burger</p>
              </div>
              <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
              </div>
          <div className="recipe-container">
          <div className="recipe-content">
              <img src={Sate} alt="Sate" />
              <h4>Sate</h4>
              <p>Recipe for a tasty grilled meat</p>
              </div>
              <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
              </div>
            <div className="recipe-container">
            <div className="recipe-content">
            <img src={Ayam} alt="Ayam" />
              <h4>Spicy chicken</h4>
              <p>Recipe for delicious Spicy Chicken</p>
              </div>
              <button onClick={() => window.location.href='review-detail.html'}>Read More</button>
            </div>
          {/* <button className="scroll-button right" onClick={scrollRight}>›</button> */}
          </div>
          </div>
        
        </section>

        <section className="featured-reviews">
          <h3>Top Contributor</h3>
          <div className="contributors">
            <div className='contributors-inside'>
            <h2>3rd</h2>
            <img src={user1} alt="user1" />
            <h5>Budiono Siregar</h5>
            </div>
            <div className='contributors-inside'>
            <h2>1st</h2>
            <img src={user2} alt="user2" />
            <h3>M. Sumbul</h3>
            </div>
            <div className='contributors-inside'>
            <h2>2nd</h2>
            <img src={user3} alt="user3" />
            <h4>Svalenko Dimitri</h4>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;