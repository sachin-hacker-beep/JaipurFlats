import React, {useEffect, useState} from "react";
import { Link } from "react-router";
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
function Property({mydata}) {
  const [properties, setProperties] = useState([]);
  const getProperties = async ()=>{
    try{
    const res = await fetch("http://localhost:3400/properties")
    const data = await res.json()
    console.log(data);
    setProperties(data)
    }
    catch(err){
      console.error(err)
    }
  }
  
  useEffect(()=>{
    getProperties()
  },[]);
  const deleteProperty = async (id) =>{
    try{
      const res = await fetch(`http://localhost:3400/property/delete/${id}`,{
        method: "delete",
      });
      // console.log(id);
      
       const data = await res.json();
       if (res.ok){
        alert("Property Deleted Successfully");
        console.log("Deleted Data", data);

        getProperties();
       }
       else{
        alert("Property Deletion Failed");
         console.log("property not found");
         
       }
  }
    catch(err){
      console.log("Error:", err);
    }
}
  return (
  <>
      <section className="mt-3 hero6 p-0 p-sm-5 container-fluid container-fluid gy-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className=" hero-head text-center">
                       | Properties
                    </p>
                    <p className="text-capitalize fs-1 fw-bold text-center">{mydata}</p>
                </div>
            </div>
        </div>
      </section>
      <div className="container">
        <div className="row d-flex  justify-content-center align-items-center">
          {
            properties.map((item)=>
              <div className="col-lg-4 p-4 col-md-6 col-sm-12 card-container card-div" key={item.id}>
                <div className="card-1" id="card-1">
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
                    <button className="main-btn text-center mb-2 "><Link className="text-white text-decoration-none" to={`/property/update/${item.id}`}> Update Details</Link></button>
                    <button onClick={()=>deleteProperty(item.id)} className="main-btn text-center mb-2 ">Delete</button>
                </div>
              </div>
            )
          }
      </div>
    </div>
  </>
  )
  }
export default Property
