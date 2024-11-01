import './App.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import { Link } from 'react-router-dom';
import Disqus from './Component/Disqus';
function JoinUs() {
  return (
    <div className='halaman'>
    <NavBar/>
    <main>
        <h1>Join Us</h1>
        <h2>Share your idea, spread your creativity</h2>
        <div class="review-detail">
            <p>Send your idea Recipe at:</p>
            <p>Email: Foodie@examples.com</p>
            <Link to='/app' title='Recipe'>
            <button className='scroll-button'>Back to Homepage</button>
            </Link>
        </div>
    </main>

    <div id="disqus_thread"></div>
<Disqus/>

    <Footer/>
    </div>
  );
}

export default JoinUs;
