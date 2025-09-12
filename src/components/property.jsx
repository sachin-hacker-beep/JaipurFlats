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
const propimgs = {
  "property-01.jpg": Propertyimg1,
  "property-02.jpg": Propertyimg2,
  "property-03.jpg": Propertyimg3,
  "property-04.jpg": Propertyimg4,
  "property-05.jpg": Propertyimg5,
  "property-06.jpg": Propertyimg6,
  "dorahouse.jpg": doraemon,
  "ninja.jpg": ninja,
  "shinchan.jpeg": shinchan
}
function Property({mydata}) {
  const [Properties, setProperties] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3200/properties")
    .then((res)=>res.json())
    .then((data)=>{
      console.log("fetched data :", data)
      setProperties(data)
    })
    .catch((err)=>
      console.log(err)
    )
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
          {
            Properties.map((item)=>
              <div className="col-lg-4 p-4 col-md-6 col-sm-12 card-container card-div" key={item.id}>
                <div className="card-1" id="card-1">
                    <img src={propimgs[item.image]} className="img-fluid" alt="propertyimg" />
                    <span className=" p-1 mt-1 "> {item.type} </span>
                    <h6 style={{textAlign: "right"}} className=" fw-bold">{item.price}</h6>
                    <h4 className="fw-bold">{item.address}</h4>
                    <ul>
                        <li className="text-capitalize">bedroom : {item.bedrooms} </li>
                        <li className="text-capitalize">bathroom : {item.bathrooms} </li>
                        <li className="text-capitalize">area : {item.area} </li>
                        <li className="text-capitalize">floor : {item.floor}</li>
                        <li className="text-capitalize">parking: {item.parking}</li>
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
export default Property;












