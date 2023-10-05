import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

import axios from "axios";
import { Link } from "react-router-dom";
import { Container,Row } from "react-bootstrap";
import Footer from "../Components/Footer";

const HomePage = () => {
const url="https://api.slingacademy.com/v1/sample-data/photos";
const [photo,setPhoto]=useState([]);


    useEffect(()=>{
        axios.get(url).then((res)=>{
            console.log(res.data.photos);
            setPhoto(res.data.photos)


        }).catch((err)=>{

        })
        
    },[])


  return (
    <div>
      <Header />
      <Container fluid className="bg-dark p-3">

      <Row className="gap-4">
           { photo.map((key)=>(
          <div className=" rounded-lg overflow-hidden" style={{ width: "18rem" }}key={key.id}>
            <Link to={`/details/${key.id}`}>
            <img className ="card grayscale-0  hover:grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300  " src={key.url}></img>         
                <span class="absolute bg-gray-900 bg-opacity-75 align-item-center text-center  text-white"> </span>
            {/* <div className="absolute  bg-gray-900 bg-opacity-75 align-item-center"><h1>{key.title}</h1></div> */}
            </Link>
            </div>
            

          ))
           }
        </Row>
        </Container>
        <Footer/>
      </div>
 
  );
};

export default HomePage;
