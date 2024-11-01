import React from "react";
import '../Product_Segment.css';
import Bookmark from "./bookmark";
import { Link } from "react-router-dom";
const NewRecipe = ({Nama,id,tags,Rating,linkFoto,Keterangan,link_review}) =>{
    return(
            <div className="product_container">
                    <div className="bookmark">
                    <Bookmark id={Nama}/>
                    </div>
                    <div className="foto_product">
                        <img src={linkFoto} alt={Nama}></img>
                    </div>
                    <div className="Product_isi">

                    <div className="garis">
                        <div className="judul_resep">
                            <h2>{Nama}</h2>
                        </div>
                    </div>
                        <div className="keterangan-resep">
                            <p>{Keterangan}</p>
                            <p>{Rating}</p>
                            <p>tags: {tags}</p>
                        </div>
                    </div>
                    <div className="button_product">
                        <Link to={link_review} title="halaman-review">
                        <button>Read More</button>
                        </Link>                  
                    </div>
                    
            </div>
    );
};

export default NewRecipe;