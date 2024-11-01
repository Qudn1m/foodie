import './Review Detail.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import { Link } from 'react-router-dom';
import Disqus from './Component/Disqus';
function ReviewPage() {
  return (
    <div className='halaman'>
    <NavBar/>
    <main className='review-details'>
        <h2>Review Detail</h2>
        <div class="review-detail">
            <h4>Nasi Goreng</h4>
            <p>Rating: ★★★★☆</p>
            <p>Nasi goreng, Malay lit. 'fried rice', is a Southeast Asian rice dish with pieces of meat and vegetables added. 
              <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiI8smB27qJAxXlzjgGHT1zDZgQmhN6BAgrEAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNasi_goreng&usg=AOvVaw0FYe3eMcqQ7AJZuvWcCMYN&opi=89978449'>
              Wikipedia
              </a>
               <br/>
               <br/>
               Origins: Indonesia, Singapore, Malaysia
               <br/>
               <br/>
               Place of origin: Indonesia
               <br/>
               <br/>
               Main ingredients: Fried rice with meats, vegetables and spices, usually seasoned with sweet soy sauce
               <br/>
               <br/>
               Alternative names: Indonesian fried rice (English)
               <br/>
               <br/>
               Associated cuisine: Indonesia, Malaysia, Brunei and Singapore
               <br/>
               <br/>
               Course: Main course
               <br/>
               <br/>
               Created by: The Chinese diaspora in Indonesian archipelago
            </p>
            <br/>


            <h2>How To Make</h2>
            <h3>ingredients</h3>
            <h4>Chicken</h4>
            <li>
              <ul>1 tbsp oil</ul>
              <ul>▢5 oz / 150g chicken breast , thinly sliced (or other protein)</ul>
              <ul>▢1 tbsp kecap manis (sweet soy sauce, Note 1)</ul>
            </li>
            <h4>Rice</h4>
            <li>
              <ul>1,5 tbsp oil</ul>
              <ul>2 garlic cloves , finely chopped</ul>
              <ul>1 tsp red chilli , finely chopped (Note 2)</ul>
              <ul>1 onion , small, diced</ul>
              <ul>3 cups cooked white rice , day old, cold (Note 3)</ul>
              <ul>2 tbsp kecap manis (sweet soy sauce, Note 1)</ul>
              <ul>2 tsp shrimp paste , optional (Note 4)</ul>              
            </li>
            <h4>Garnishes / side servings (optional)</h4>
            <li>
              <ul>4 eggs , fried to taste</ul>
              <ul>1 green onion , sliced</ul>
              <ul>Tomatos and cucumbers, cut into wedges/chunks</ul>
              <ul>Fried shallots , store bought (optional) (Note 3)</ul>
              <ul>Lime wedges</ul>
            </li>

            <h3>Instructions</h3>
            <li>
              <ol>Heat oil in a large skillet or wok over high heat.</ol>
              <ol>Add chilli and garlic, stir for 10 seconds.</ol>
              <ol>Add onion, cook for 1 minute.</ol>
              <ol>Add chicken, cook until it mostly turns white, then add 1 tbsp kecap manis and cook for a further 1 minute or until chicken is mostly cooked through and a bit caramelised.</ol>
              <ol>Add rice, 2 tbsp kecap manis and shrimp paste, if using. Cook, stirring constantly, for 2 minutes until sauce reduces down and rice grains start to caramelise (key for flavour!).</ol>
              <ol>Serve, garnished with garnishes of choice (green onions, red chilli, fried shallots).</ol>
            </li>

              <h3>Serving</h3>
              <li>
                <ol>Serve as a side for Asian main dishes or as part of a  large spread, Asian or not!</ol>
                <ol>Make it a meal - traditional Indonesian style!: Serve with a fried egg sunny side up (runny yolk!), tomato wedges and slices of cucumber on the side.</ol>
              </li>

              <div className='recipe-notes'>
              <h2>Recipe Notes</h2>
              <p>Kecap Manis (sometimes called Ketjap Manis) is an Indonesian sweet soy sauce that is thicker than other soy sauces. Sometimes just labelled as "sweet soy sauce". Consistency resembles maple syrup, available in most supermarkets in Australia
              </p>
              <p>Also easy to make your own! Just combine 1/4 cup ordinary soy sauce (I use Kikkoman) and 1/4 cup brown sugar over medium heat. Bring to a simmer and reduce until it becomes a maple syrup consistency. It will thicken more when it cools.</p>
              <p>Chilli - I use 2 birds eye or Thai red chillies, adds a mild warmth, doesn't make it spicy. Adjust to taste. Chilli paste can also be used instead - add it when you add the rice.</p>
              <p>Day old cooked rice - All types of fried rice are best made using day old cooked rice that has been refrigerated overnight. It dries it out, making it easier to stir fry to evenly coat the grains with the flavourings. TIP: Keep bags of cooked rice in the freezer! Fabulous for fried rice, or even using plain.</p>
              <p>Shrimp paste - Adds depth of flavour and complexity, but is optional. Traditional dish uses belacan which is dried shrimp blocks, requires crumbling then toasting prior to use. Same flavour achieved with any shrimp paste which you can just dollop in. Any shrimp paste brand/type is fine.</p>
              <p>Fried shallots are slices shallots that have been fried until crunchy. They are a great garnish and add a pop of texture to the dish but are optional because it's not traditional! Fried shallots can be purchased at most supermarkets in Australia</p>
              <p>Make this GLUTEN FREE by making your own kecap manis (Note 1) using Tamari.</p>
              <p>Storage - as with all fried rice, it keeps great for a day or two in the fridge then I find it gets a bit dry. Salvage it with a sprinkle of water then microwave it - makes it all steamy and moist again! Do the same if you freeze it.</p>
              <p>Nutrition per serving including egg.</p>
              <h3>Nutrition Information</h3>
              <p>Serving:187gCalories:453cal (23%)Carbohydrates:58.6g (20%)Protein:23.7g (47%)Fat:13g (20%)Saturated Fat:2.4g (15%)Cholesterol:196mg (65%)Sodium:898mg (39%)Potassium:290mg (8%)Fiber:1.3g (5%)Sugar:1.2g (1%)Vitamin A:200IU (4%)Vitamin C:1.7mg (2%)Calcium:60mg (6%)Iron:4.7mg (26%)</p>
              </div>
            <Link to='/review-page' title='Recipe'>
            </Link>
        </div>
    </main>

    <div id="disqus_thread"></div>
<Disqus/>


    <Footer/>
    </div>
  );
}

export default ReviewPage;
