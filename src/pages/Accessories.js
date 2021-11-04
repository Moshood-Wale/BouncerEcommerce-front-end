import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './style.css'
import NavBar from '../components/homepage/NavBar'
import TopNav from '../components/homepage/TopNav'
import TopFooter from '../components/homepage/TopFooter';
import Footer from '../components/homepage/Footer';


function Accessories() {

    const [isReady, setIsReady]= useState(false);
    const [accessoriesList, setAccessoriesList]= useState([]);


    useEffect(()=>{
       async function accessoriesEndpoint(){
           const result = await axios('https://bouncerb.herokuapp.com/api/v1/product/');
           const arr = result.data.results.filter((item)=>(item.category === "a48072d0-ba2f-4ae0-ac46-267465e2ff18"))
           console.log(arr)
           setAccessoriesList(arr);
           setIsReady(true)
       }
        accessoriesEndpoint();
        console.log(accessoriesList)
        
    }, [])



    const listItems= accessoriesList.map((item) =>
        <div class = "product">
            <div class = "product-content">
                <div class = "product-img">
                    <img src = {item.image} alt = "product image"/>
                </div>
                <div class = "product-btns">
                    <button type = "button" class = "btn-cart"> add to cart
                        <span><i class = "fas fa-plus"></i></span>
                    </button>
                    <button type = "button" class = "btn-buy"> buy now
                        <span><i class = "fas fa-shopping-cart"></i></span>
                    </button>
                </div>
            </div>

            <div class = "product-info">
                <div class = "product-info-top">
                    <h2 class = "sm-title">lifestyle</h2>
                    <div class = "rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "far fa-star"></i></span>
                    </div>
                </div>
                <a href = "#" class = "product-name">Accessories</a>
                <p class = "product-price">#{item.price}</p>
                <p class = "product-price">#{item.discounted_price}</p>
            </div>

            <div class = "off-info">
                <h2 class = "sm-title">{item.discount_price}</h2>
            </div>
            <div>{item.description}</div>
        </div>
    )

    return (
        <div>
           
            
            <div>
                <TopNav/>
                < NavBar />
                <div class = "products">
                    <div class = "container">
                        <h1 class = "lg-title">accessories with Offers</h1>
                        <p class = "text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos sit consectetur, ipsa voluptatem vitae necessitatibus dicta veniam, optio, possimus assumenda laudantium. Temporibus, quis cum.</p>

                        <div class = "product-items">
                            {/* <!-- single product --> */}
                            {listItems}
                            {/* <!-- end of single product --> */}
                            
                        </div>
                    </div>
                </div>
                <TopFooter/>
                <Footer/>

            </div>
           
        </div>
    )
}

export default Accessories



    