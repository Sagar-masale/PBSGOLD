import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import MainPage from './images/Home.jpg'
import MainPage2nd from './images/Products.jpg'
import MainPage3rd from './images/Product2.jpg'
import LineImg from './images/line.png'
import RingImg from './images/FingerRing.jpg'
import EarringImg from './images/Earrings.jpg'
import PendantsImg from './images/Pendants.jpg'
import MangalSutraImg from './images/Mangalsutra.jpg'
import BanglesImg from './images/Bangles.jpg'
import ChainsImg from './images/Chains.jpg'
import EverDayImg from './images/Everyday.jpg'
import WeddingImg from './images/wedding.jpg'
import PartyImg from './images/party.jpg'

function FirstPage({
    CatTitle1="...",
    CatTitle2="...",
    CatTitle3="...",
    CatTitle4="...",
    CatTitle5="...",
    CatTitle6="..."
}){
    const shopINHovar1=()=>{
        var hover = document.querySelector(".title-shope-now1").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow1").style.left = "70px";
    }
    const shopOUTHovar1=()=>{
        var hover = document.querySelector(".title-shope-now1").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow1").style.left="7px";
    }
    const shopINHovar2=()=>{
        var hover = document.querySelector(".title-shope-now2").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow2").style.left = "70px";
    }
    const shopOUTHovar2=()=>{
        var hover = document.querySelector(".title-shope-now2").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow2").style.left="7px";
    }
    const shopINHovar3=()=>{
        var hover = document.querySelector(".title-shope-now3").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow3").style.left = "70px";
    }
    const shopOUTHovar3=()=>{
        var hover = document.querySelector(".title-shope-now3").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow3").style.left="7px";
    }
    const shopINHovar4=()=>{
        var hover = document.querySelector(".title-shope-now4").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow4").style.left = "70px";
    }
    const shopOUTHovar4=()=>{
        var hover = document.querySelector(".title-shope-now4").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow4").style.left="7px";
    }
    const shopINHovar5=()=>{
        var hover = document.querySelector(".title-shope-now5").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow5").style.left = "70px";
    }
    const shopOUTHovar5=()=>{
        var hover = document.querySelector(".title-shope-now5").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow5").style.left="7px";
    }
    const shopINHovar6=()=>{
        var hover = document.querySelector(".title-shope-now6").style.marginRight="40%";
        var hover = document.querySelector(".items-arrow6").style.left = "70px";
    }
    const shopOUTHovar6=()=>{
        var hover = document.querySelector(".title-shope-now6").style.marginRight ="0";
        var hover = document.querySelector(".items-arrow6").style.left="7px";

         
        var rotateClick = document.getElementById('switch-Items-rotate');
        var rotateMove = document.getElementById('switch-Items-rotate');
        rotateClick.addEventListener("click",()=>{
            rotateMove.classList.toggle('rotate-moved')
        })
        var rotateClicks = document.getElementById('switch-Items-rotate');
        var CategoryMoved = document.getElementById('Category-Move');
        rotateClicks.addEventListener("click",()=>{
            CategoryMoved.classList.toggle('Category-List-First-Move')
        })
    }
    
    
    return(
        <>
 <div className="img-slide">
 <div id="default-carousel" className="relative w-full" data-carousel="slide" style={{height:"100vh"}}>
     
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 Images-Size" style={{height:"100%"}}>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={MainPage} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={MainPage2nd} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
         
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={MainPage3rd} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
       
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 txt-Color  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 txt-Color  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
   
   </div>
   <div className="shop-category Category-List-First-Box">
<h2 className="shop-c">Shop By Category</h2><br/>
<p className="instruction">Browse through your favourite categories. We've got them all!</p><br/>
<img src={LineImg} className="line"/><br/>
<div className="image-lists Category-List-First " id="Category-Move">
     <Link to="/Ring-Page" className="list-items items1"><div className="list-item1" onMouseOver={shopINHovar1} onMouseOut= {shopOUTHovar1}><div className="items-background"><img src={RingImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle1}</h6><h6 className="title-shope-now title-shope-now1">Shope <i className='bx bx-chevron-right items-arrow items-arrow1'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     <Link to="/Earrings-Page" className="list-items items2"><div className="list-item2" onMouseOver={shopINHovar2} onMouseOut= {shopOUTHovar2}><div className="items-background"><img src={EarringImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle2}</h6><h6 className="title-shope-now title-shope-now2">Shope <i className='bx bx-chevron-right items-arrow items-arrow2'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     <Link to="/Pendants-Page" className="list-items items3"><div className="list-item3" onMouseOver={shopINHovar3} onMouseOut= {shopOUTHovar3}><div className="items-background"><img src={PendantsImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle3}</h6><h6 className="title-shope-now title-shope-now3">Shope <i className='bx bx-chevron-right items-arrow items-arrow3'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     <Link to="/Mangalsutra-Page" className="list-items items4"><div className="list-item4" onMouseOver={shopINHovar4} onMouseOut= {shopOUTHovar4}><div className="items-background"><img src={MangalSutraImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle4}</h6><h6 className="title-shope-now title-shope-now4">Shope <i className='bx bx-chevron-right items-arrow items-arrow4'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     <Link to="/Bangles-Page" className="list-items items5"><div className="list-item5" onMouseOver={shopINHovar5} onMouseOut= {shopOUTHovar5}><div className="items-background"><img src={BanglesImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle5}</h6><h6 className="title-shope-now title-shope-now5">Shope <i className='bx bx-chevron-right items-arrow items-arrow5'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     <Link to="/Chains-Page" className="list-items items6"><div className="list-item6" onMouseOver={shopINHovar6} onMouseOut= {shopOUTHovar6}><div className="items-background"><img src={ChainsImg} className="shop-category-images shop-category-img1"/><div className="card-title"><h6 className="card-title-name">{CatTitle6}</h6><h6 className="title-shope-now title-shope-now6">Shope <i className='bx bx-chevron-right items-arrow items-arrow6'></i><br/><span className="Now">Now</span> </h6></div></div> </div></Link> 
     
</div>
<div className="Switch-Category"><i className='bx bx-rotate-right switch-Items' id="switch-Items-rotate" ></i></div>
</div>
<div className="shop-category Occasion-category">
    <h2 className="shop-c shop-Occasion">Shop By Occasion</h2><br/>
    <p className="instruction">Whatever the occasion, we've got a beatiful piece of jewellery for you.</p><br/>
    <img src={LineImg} className="front-img1"/> <br/>
    <div className="image-lists image-lists-Gender">
        <a href="#" className="Gender-List"> <div className="Gender1 Gender-List Occasion-List"><img src={EverDayImg} className="Gender-images men-image" /><div className="Gender-name Occasion-name"><h6 className="title-name-Gender title-name-Occasion">Everyday Essentials</h6><p className="shope-now-G shope-now-Coccasion shope-now-Coccasion-Everdy">Shop Now</p><i className='bx bx-chevron-right title-arrow'></i></div></div></a> 
          <a href="#" className="Gender-List"><div className="Gender2 Gender-List  Occasion-List"><img src={WeddingImg} className="Gender-images men-image" /><div className="Gender-name Occasion-name"><h6 className="title-name-Gender title-name-Occasion">Wedding Trousseaus</h6><p className="shope-now-G shope-now-Coccasion">Shop Now</p><i className='bx bx-chevron-right title-arrow'></i></div></div></a>
        <a href="#" className="Gender-List"> <div className="Gender3 Gender-List  Occasion-List"><img src={PartyImg} className="Gender-images men-image" /><div className="Gender-name Occasion-name "><h6 className="title-name-Gender title-name-Occasion The-Party-Name">The Party Edit</h6><p className="shope-now-G shope-now-Coccasion shope-now-G-kid The-P-Shop">Shop Now</p><i className='bx bx-chevron-right title-arrow title-arrow-theParty'></i></div></div></a>
  
      </div>
    </div>

        </>
    )
    
}
export default FirstPage