import React from 'react'
import NavBar from "./Components/NavBar.jsx"
import FirstPage from './Components/FirstPage';
import Footer from './Components/Footer.jsx';
import FingerRings from "./Components/FingerRing"
import Earrings from './Components/Earrings.jsx';
import PenDants from './Components/PenDants.jsx';
import MangalSutra from './Components/MangalSutra.jsx';
import BanGles from './Components/BanGles.jsx';
import Chains from './Components/Chains.jsx';

import ItemsInfo from './Components/ItemsInfo.jsx';
import { createBrowserRouter, Routes, Route,RouterProvider } from "react-router-dom";

function App() {
  const router=createBrowserRouter([
    {
    path: "/",
    element: <><NavBar/><FirstPage CatTitle1="Finger Rings" CatTitle2="Earrings" CatTitle3="Pendants" CatTitle4="Mangalsutra" CatTitle5="Bangles" CatTitle6="Chains"/><Footer/></>
    },
    
    {
      path: "/Ring-Page",
      element: <><NavBar/> <ItemsInfo title="Rings"/><FingerRings/>
      <Footer/></>
    },
    {
      path: "/Earrings-Page",
      element: <><NavBar/><ItemsInfo title="Earrings"/><Earrings
        // Information About Erraings
        Designs='200'
        stocks1='ONLY 5 LEFT IN STOCK'
        ItemN1='classNameic Diamond Erraing'
        PriceI1='33250'
  
        stocks2='ONLY 10 LEFT IN STOCK'
        ItemN2='Latest Erraing'
        PriceI2='50250'
      /><Footer/></>
    },
    {
      path: "/Pendants-Page",
      element: <><NavBar/><ItemsInfo title="Pendants"/><PenDants
      // Information About Pendants
      Designs='200'
      stocks1='ONLY 5 LEFT IN STOCK'
      ItemN1='classNameic Diamond Pendant'
      PriceI1='33250'

      stocks2='ONLY 10 LEFT IN STOCK'
      ItemN2='Latest Pendant'
      PriceI2='50250'
      /><Footer/></>
    },
    {
      path: "/Mangalsutra-Page",
      element: <><NavBar/><ItemsInfo title="Mangalsutra"/><MangalSutra/><Footer/></>
    },
    {
      path: "/Bangles-Page",
      element: <><NavBar/><ItemsInfo title="Bangles"/><BanGles/><Footer/></>
    },
    {
      path: "/Chains-Page",
      element: <><NavBar/><ItemsInfo title="Chains"/><Chains/><Footer/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
