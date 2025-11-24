import React from 'react'
import Footer from './footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Propertyimg1 from "../assets/property-01.jpg";
import Propertyimg2 from "../assets/property-02.jpg";
import Propertyimg3 from "../assets/property-03.jpg";
import Propertyimg4 from "../assets/property-04.jpg";
import Propertyimg5 from "../assets/property-05.jpg";
import Propertyimg6 from "../assets/property-06.jpg";
import doraemon from "../assets/dorahouse.jpg";
import ninja from "../assets/ninja.jpg";
import shinchan from "../assets/shinchan.jpeg";
import dora from "../assets/doraemon.webp";
const propimgs = {
  "property-01.jpg": Propertyimg1,
  "property-02.jpg": Propertyimg2,
  "property-03.jpg": Propertyimg3,
  "property-04.jpg": Propertyimg4,
  "property-05.jpg": Propertyimg5,
  "property-06.jpg": Propertyimg6,
  "dorahouse.jpg": doraemon,
  "ninja.jpg": ninja,
  "shinchan.jpeg": shinchan,
  "doraemon.webp":dora
}
function Find() {
    const token = localStorage.getItem("token");
    
    const [properties, setProperties] = useState([]);
    const [mail, setMail] = useState("");
    const role = localStorage.getItem("role");
    const searchProperty = async () =>{
        try{
            const res = await fetch("https://jaipurflats-backend.onrender.com/property/FindProperty",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`,
                },
                body:JSON.stringify({useremail:mail})
            });
            const data = await res.json();
            if(res.ok){
                setProperties(data.property)
            }
        }
        catch(err){
            console.log("error is:",err);
            return;
        }

    }
  return (
    <>
    <div className="container-fluid my-5">
        <div className="container">
            <h2 className="text-center mb-4">Find Property by Email</h2>
            <div className="mb-3 row justify-content-center">
                <div className="col-md-6">
                    <input type="email" onChange={(e)=>setMail(e.target.value)}  id="useremail" className="form-control" placeholder="Enter User Email" name='useremail' />
                </div>
                
                <div className="col-md-2">
                    <button onClick={searchProperty} className="btn btn-primary w-100">Search</button>
                </div>        
            </div>               
        </div>    
        <section className="container mt-5">
               <div className="row">
                {properties.length > 0 ? properties.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6 p-4 col-sm-12 card-container card-div">
                        <div className='card-1' id='card-1'>
                            <img src={propimgs[item.image]} className="img-fluid" alt="propertyimg" />
                            <span className=" p-1 mt-1 "> {item.type} </span>
                            <h6 style={{textAlign: "right"}} className=" fw-bold">$ {item.price}</h6>
                            <h4 className="fw-bold">{item.address}</h4>
                            <ul>
                                <li className="text-capitalize">bedroom : {item.bedrooms} </li>
                                <li className="text-capitalize">bathroom : {item.bathrooms} </li>
                                <li className="text-capitalize">area : {item.area} </li>
                                <li className="text-capitalize">floor : {item.floor}</li>
                                <li className="text-capitalize">parking: {item.parking}</li>
                            </ul>
                            <button className="main-btn text-center mb-2 "><Link className="text-white text-decoration-none" to="/BookVisit"> Schedule a Visit</Link></button>
                            <br />
                            { role== "admin" ?  <Link className="main-btn text-center mb-2 text-white text-decoration-none" to={`/property/update/${item.id}`}> Update Details</Link>: null }
                            { role== "admin" ?  <button onClick={()=>deleteProperty(item.id)} className="main-btn text-center mb-2 ">Delete</button> : null }
                        </div>
                    </div>  
            ) ) : <p className="text-center">No properties found.</p>}  
            </div>
        </section >
            
    </div>
    </>
  )
}

export default Find
