import React from 'react';
import './NavBar.css'
import './MediaQueries.css'
function NavBar() {
  // Define the functions or import them if they are defined elsewhere
  const SliderMove = () => {
    // Logic for SliderMove
    var SliderBarButton=document.getElementById("SliderBar");
    SliderBarButton.classList.toggle("Slider-Bar-In");
  };
  const ShowJewelleryOPT = () => {
    // Logic for ShowJewelleryOPT
    var ShowJewellery=document.getElementById("Login-Jewellery-Info");
    ShowJewellery.classList.toggle("Show-Jewellery-Opt");
    var rotateArrow=document.getElementById("rotate-arrow-List");
    rotateArrow.classList.toggle("Rotate-Arrow");
    // var JewelleryName=document.getElementById("Jewellery-Name").style.fontWeight="600".toggle;
    var JewelleryName=document.getElementById("Jewellery-Name");
    JewelleryName.classList.toggle("Bold-Name");
  };
  const ShowGoldOPT = () => {
    // Logic for ShowGoldOPT
  var ShowGold=document.getElementById("Login-Gold-Info");
  ShowGold.classList.toggle("Show-Gold-Opt");
  var rotateArrowGold=document.getElementById("rotate-arrow-List-Gold");
  rotateArrowGold.classList.toggle("Rotate-Arrow");
  var GoldName=document.getElementById("Gold-Name");
  GoldName.classList.toggle("Bold-Name");
  };
  const ShowDiamondOPT = () => {
    // Logic for ShowDiamondOPT
    var ShowDiamond=document.getElementById("Login-Diamond-Info");
    ShowDiamond.classList.toggle("Show-Diamond-Opt");
    var rotateArrowDiamond=document.getElementById("rotate-arrow-List-Diamond");
    rotateArrowDiamond.classList.toggle("Rotate-Arrow");
    var DiamondName=document.getElementById("Diamond-Name");
    DiamondName.classList.toggle("Bold-Name");
  };
  const ShowWeddingOPT = () => {
    // Logic for ShowWeddingOPT
    var ShowWedding=document.getElementById("Login-Wedding-Info");
    ShowWedding.classList.toggle("Show-Wedding-Opt");
    var rotateArrowWedding=document.getElementById("rotate-arrow-List-Wedding");
    rotateArrowWedding.classList.toggle("Rotate-Arrow");
    var WeddingName=document.getElementById("Wedding-Name");
    WeddingName.classList.toggle("Bold-Name");
  };
  const ShowGiftingOPT = () => {
    // Logic for ShowGiftingOPT
    var ShowGifting=document.getElementById("Login-Gifting-Info");
    ShowGifting.classList.toggle("Show-Gifting-Opt");
    var rotateArrowGifting=document.getElementById("rotate-arrow-List-Gifting");
    rotateArrowGifting.classList.toggle("Rotate-Arrow");
    var GiftingName=document.getElementById("Gifting-Name");
    GiftingName.classList.toggle("Bold-Name");
  };
  const ShowCollectionsOPT = () => {
    // Logic for ShowCollectionsOPT
    var ShowCollections=document.getElementById("Login-Collections-Info");
    ShowCollections.classList.toggle("Show-Collections-Opt");
    var rotateArrowCollections=document.getElementById("rotate-arrow-List-Collections");
    rotateArrowCollections.classList.toggle("Rotate-Arrow");
    var CollectionsName=document.getElementById("Collections-Name");
    CollectionsName.classList.toggle("Bold-Name");
  };

  return (
    <>
    
    <div className="Navheader Navcontainer">
      <div className="Slider-Bar " id="SliderBar">
        <span className="material-symbols-outlined Slider-Bar-Exit" onClick={SliderMove}>
          arrow_back
        </span>
        <div className="Login-SignUp-Box">
          <div className="Login-Box">
            <a href="#login" className="Login-Names">LOGIN</a>
            <a href="#signup" className="Login-Names">SIGNUP</a>
          </div>
        </div>
        <div className="In-Login-Box In-Login-Box-For-Slide-Menue-Bar">
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Jewellery-Name" style={{ lineHeight: 'normal', marginTop: '2%', fontSize: '0.9rem', color: '#af5254' }}>
              Jewellery
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List" onClick={ShowJewelleryOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Jewellery-Opt Show-Login-Box1" id="Login-Jewellery-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Metal and Stone</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Category</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Curated Shops</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Shop For</a>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Gold-Name" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Gold
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List-Gold" onClick={ShowGoldOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Gold-Opt Show-Login-Box2" id="Login-Gold-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Bangle</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Earrings</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Gold Chains</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Pendants</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Finger Rings</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Necklace Set</a>
            <a href="#Track Your Order" className="Go-info-link Bold-View">View All</a>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Diamond-Name" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Diamond
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List-Diamond" onClick={ShowDiamondOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Diamond-Opt Show-Login-Box2" id="Login-Diamond-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Bangle</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Earrings</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Gold Chains</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Pendants</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Finger Rings</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Necklace Set</a>
            <a href="#Track Your Order" className="Go-info-link Bold-View">View All</a>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Earrings
            </h6>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Rings
            </h6>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Necklace Set
            </h6>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Wedding-Name" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Wedding
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List-Wedding" onClick={ShowWeddingOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Wedding-Opt Show-Login-Box1" id="Login-Wedding-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Jewellery</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Engagement</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Shop For</a>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Gifting-Name" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Gifting
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List-Gifting" onClick={ShowGiftingOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Gifting-Opt Show-Login-Box1" id="Login-Gifting-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Below 500 USD</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">500 - 1000 USD</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">1000 - 2000 USD</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">2000 - 5000 USD</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Above 5000 USD</a>
          </div>
          <div className="In-Login-Box-Info">
            <h6 className="information-link-head link-Head-Width Login-Names-In-Box" id="Collections-Name" style={{ lineHeight: 'normal', fontSize: '0.9rem', color: '#af5254' }}>
              Collections
            </h6>
            <span className="material-symbols-outlined Show-InBox-Info" id="rotate-arrow-List-Collections" onClick={ShowCollectionsOPT}>
              arrow_forward_ios
            </span>
          </div>
          <div className="Show-Login-Box Show-Collections-Opt Show-Login-Box1" id="Login-Collections-Info">
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">Dharohar</a>
            <a href="#Track Your Order" className="Track-Your-Order Go-info-link menu-items-Name-Color">kakatiya</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Aarambh</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Akshayam</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Aaheli</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Aveer</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Devyani</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Utsaah</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Mangalam</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Ekatvam</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Nyusha</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Utsava</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Swayahm</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Shagun</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Udayam</a>
            <a href="#Track Your Order" className="Go-info-link menu-items-Name-Color">Little Big Moments</a>
          </div>
        </div>
      </div>

      <div className="custome-bar" onClick={SliderMove}>
        <span className="material-symbols-outlined menu-items">
          menu
        </span>
      </div>
      <div className="Logo-Shop">
        <p className="logo">PBS</p>
      </div>
      <div className="search-container rounded-lg">
        <input type="text" className='h-11 text-sm' id="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more... " />
        <div className="voice-search">
          <a href="#micOn"><i className='bx bx-microphone mic text-xl'></i></a>
        </div>
        <div className="search-btn rounded-lg">
          <a href="#search-here"><i className='bx bx-search search-nav text-xl'></i></a>
        </div>
      </div>
      <div className="nav-link-logos">
        <a href="#Store" className="top-logo">
          <i className='bx bx-store'>
            <br /><span className="logo-name">STORES</span>
          </i>
        </a>
        <a href="#Go" className="top-logo contact-top-logo">
          <i className='bx bx-user'>
            <br /><span className="logo-name">CONTACT</span>
          </i>
        </a>
        <a href="#Go" className="top-logo">
          <i className='bx bx-heart'>
            <br /><span className="logo-name">WISHLIST</span>
          </i>
        </a>
        <a href="#Go" className="top-logo">
          <i className='bx bx-cart'>
            <br /><span className="logo-name">CART</span>
          </i>
        </a>
      </div>
      <div className="search-container search-container-two">
        <input type="text" id="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." />
        <div className="voice-search">
          <a href="#micOn"><i className='bx bx-microphone mic'></i></a>
        </div>
        <div className="search-btn">
          <a href="#search-here"><i className='bx bx-search search-nav'></i></a>
        </div>
      </div>
    </div>
    <div className="nav-item">
      <a href="#J" className="nav-item-name one-item">JEWELLERY</a>
      <a href="#C" className="nav-item-name">COLLECTIONS</a>
      <a href="#W" className="nav-item-name">WEDDING</a>
      <a href="#B" className="nav-item-name">BLOG</a>
      <a href="#G" className="nav-item-name">GIFTING</a>
      <a href="#M" className="nav-item-name">MORE</a>
    </div>
   
    </>
  );
}

export default NavBar;
