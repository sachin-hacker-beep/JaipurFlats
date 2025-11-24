import React, {useEffect, useState} from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
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
function MyProperty({mydata}) {
  const [myproperties, setMyProperties] = useState([]);
  const navigate = useNavigate();
  const getMyProperties = async ()=>{
    const token = localStorage.getItem("token");
    if(!token){
      alert("Please login to view your properties");
      navigate("/User/SignUp");
      return;
    }

    try{
      const res = await fetch("https://jaipurflats-backend.onrender.com/properties/MyProperty",
      {headers: {"Authorization": `Bearer ${token}`},});
      if(res.status===401){
        console.log("Your Token Expired");
        localStorage.removeItem("token");
        navigate("/User/SignUp");
        return;
      }
      if(res.status===403){
        console.log("unable to fetch properties");
        localStorage.removeItem("token");
        navigate("/User/SignUp");
        return;
      }
      const data = await res.json();
      console.log(data);
      setMyProperties(data.properties);
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(()=>{
    getMyProperties();
  },[]);
  
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
          {myproperties.length === 0 && (
            <h3 className="text-center mt-5">You have not added any properties yet.</h3>
          )}
          {
            myproperties.map((items)=>
              <div className="col-lg-4 p-4 col-md-6 col-sm-12 card-container card-div" key={items.id}>
                <div className="card-1" id="card-1">
                    <img src={propimgs[items.image]} className="img-fluid" alt="propertyimg" />
                    <span className=" p-1 mt-1 "> {items.type} </span>
                    <h6 style={{textAlign: "right"}} className=" fw-bold">$ {items.price}</h6>
                    <h4 className="fw-bold">{items.address}</h4>
                    <ul>
                        <li className="text-capitalize">bedroom : {items.bedrooms} </li>
                        <li className="text-capitalize">bathroom : {items.bathrooms} </li>
                        <li className="text-capitalize">area : {items.area} </li>
                        <li className="text-capitalize">floor : {items.floor}</li>
                        <li className="text-capitalize">parking: {items.parking}</li>
                    </ul>
                    <button className="main-btn text-center mb-2 "><Link className="text-white text-decoration-none" to="/BookVisit"> Schedule a Visit</Link></button>
                    
                </div>
              </div>
            )
          }
      </div>
    </div>
  </>
  )
}
export default MyProperty;
