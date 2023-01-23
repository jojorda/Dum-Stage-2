import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from './componen/navbar';
import Homes from './componen/Home';
import Detail from "./componen/detail"
import { useState } from "react";
import Profile from "./componen/profil"
// import Navbares from "./componen/Navbars"
import Historis from "./componen/invoice"
// import Tables from "./componen/Table"
import Booking from "./componen/Booking"
// import MyBooking from "./componen/Booking"
import {  Route, Routes } from 'react-router-dom';
// import Content from './componen/Content';
// import DataLis from './drop';


function App() {
  const [poperty] = useState([
    {
      name_poperty: "House Astina",
      image:"/img/11.jpg",
      img1:"/img/12.jpg",
      img2:"/img/13.jpg",
      price: 8_905_000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/14.jpg",
      img1:"/img/12.jpg",
      img2:"/img/11.jpg",
      price: 1500000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/13.jpg",
      img1:"/img/12.jpg",
      img2:"/img/15.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/12.jpg",
      img1:"/img/14.jpg",
      img2:"/img/11.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/15.jpg",
      img1:"/img/12.jpg",
      img2:"/img/13.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/11.jpg",
      img1:"/img/12.jpg",
      img2:"/img/14.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/12.jpg",
      img1:"/img/13.jpg",
      img2:"/img/11.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/13.jpg",
      img1:"/img/12.jpg",
      img2:"/img/15.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    {
      name_poperty: "House Astina",
      image:"/img/14.jpg",
      img1:"/img/12.jpg",
      img2:"/img/11.jpg",
      price: 25000000,
      TOR:"Year",
      amenities:"../image/Tag.png",
      description:"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.",
      address:"Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      bed_room:3,
      bath_room:3,
      area:"1800 ft"
    },
    
  ]);

  return (
   <>
      <Navbars />
      {/* <DataLIst/> */}
      {/* <Homes /> */}

      <Routes>
        {/* <Route path="/nav" element={<Navbars />}/> */}
        <Route path="/detail/:id" element={<Detail book={poperty} />} />
        <Route exact path="/myticket/:id" element={<Booking book={poperty}/>} />
        {/* <Route exact path="/myticket/:id" element={<MyBooking hotel={poperty}/>} /> */}
        <Route exact path="/historys" element={<Historis book={poperty}/>}/>
          <Route exact path="/profile" element={<Profile />}/>
          {/* <Route path="/home" element={<Content/>}> */}
          <Route path="/" element={<Homes />} />
          {/* <Route index element={<Navbars />} /> */}
        
      </Routes>
   </>
  );
}

export default App;
