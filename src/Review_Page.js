import './Product_Segment.css';
import React from "react";
// import Toggle from "react-toggle";
// import { useColorScheme } from "./useColorScheme";
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import NewReipe from './Component/New Recipe';
import AllRecipe from './Component/All Recipe';
import Disqus from './Component/Disqus';
import fototest from './Asset/gorengan.jpg';
import Nasi_Goreng from './Asset/nasi goreng.jpg';
import Bakso from './Asset/bakso.jpg';
import Perkedel from './Asset/perkedel.jpg';
import Ketoprak from './Asset/ketoprak.jpg';
import gado_gado from './Asset/gado-gado.jpg';
function ReviewPage() {
  return (
    <div className='halaman'>
    <NavBar/>  
        <h2>New Recipe</h2>
      <div className="product_list">
      <NewReipe
        Nama='Nasi Goreng'
        linkFoto={Nasi_Goreng}
        Keterangan='a Southeast Asian rice dish with 
        pieces of meat and vegetables added'
        link_review='/review-detail'
        Rating='★★★★★ (5,0)'
        tags='main course, high carbohydrates'
        />
        <NewReipe
        Nama='Bakso'
        linkFoto={Bakso}
        Keterangan='Hidangan lezat yang berasal dari Tiongkok'
        link_review='/review-detail'
        Rating='★★★★☆ (4,0)'
        tags='main course, high salt'
        />
      </div>

      
     <h2>All Recipe</h2>

     <div className="product_list">

<AllRecipe
     Nama='Perkedel'
     linkFoto={Perkedel}
     Keterangan='Vegetable fritters from Indonesian cuisine.
     Most common perkedel are made from mashed potatoes'
     link_review='/review-detail'
     Rating='★★★★☆ (4,0)'
     tags='side dish, high carbohydrate'
     />

<AllRecipe
     Nama='Ketoprak'
     linkFoto={Ketoprak}
     Keterangan='vegetarian dish from Jakarta,
      consisting of tofu, vegetables, rice cake, 
      and rice vermicelli served in peanut sauce'
     link_review='/review-detail'
     Rating='★★★★☆ (4,0)'
     tags='main course, high fiber'
     />

<AllRecipe
     Nama='GadoGado'
     linkFoto={gado_gado}
     Keterangan='salad of raw, slightly boiled, blanched or steamed vegetables
     and hard-boiled eggs, boiled potato, fried tofu
     and tempeh, and sliced lontong, served with a peanut sauce.'
     link_review='/review-detail'
     Rating='★★★★★ (5,0)'
     tags='main course, high fiber'
     />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

<AllRecipe
    Nama='Gorengan'
    linkFoto={fototest}
    Keterangan='Hidangan simpel, murah dan mudah
    cocok dihidangkan saat sedang ngumpul'
    link_review='/review-detail'
    Rating='★★★★★ (5,0)'
    tags='side dish, high cholesterol'
    />

    </div>

        <div id="disqus_thread"></div>
<Disqus/>

        <Footer/>
    </div>
  );
}


// dark mode
// export const DarkModeToggle = () => {
//   const { isDark, setIsDark } = useColorScheme();
//   return (
//     <Toggle
//       checked={isDark}
//       onChange={({ target }) => setIsDark(target.checked)}
//       icons={{ checked: "🌙", unchecked: "🔆" }}
//       aria-label="Dark mode toggle"
//     />
//   );
// };

export default ReviewPage;
