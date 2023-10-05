import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';

const PhotoDetailsPage = () => {
    const {id} =useParams();
   
    
   const url=`https://api.slingacademy.com/v1/sample-data/photos/${id}`;
   const [photo,setPhoto]=useState([]);


    useEffect(()=>{
        axios.get(url).then((res)=>{
            console.log(res.data.photo);
            setPhoto(res.data.photo)


        }).catch((err)=>{

        }) },[])
  return (
    <Container fluid>
      <Header/>
      <Container fluid className='bg-dark text-center'>
      <h1 className='text-white p-2 fw-bold '>{photo.title}</h1>
    <h2 className='text-white p-2 fw-light'>{photo.description}</h2>
      <img src={photo.url}  className='card text-center'/>

    </Container></Container>
  )
}

export default PhotoDetailsPage