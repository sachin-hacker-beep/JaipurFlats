import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './add-property.css';
import Navigation from './navbar';
import Footer from './footer';
function AddProperty() {
  const [Fields, SetField] = useState({
    type: "",
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    floor: "",
    parking: "",
    image: ""
  });
  const { id } = useParams();
  useEffect(()=>{
    if(id){
      fetch("http://localhost:3400/properties")
      .then((res)=>res.json())
      .then((data)=>{
        const property = data.find(item=>item.id == id);
        if(property){ 
          SetField({
            type: property.type || "",
            price: property.price || "",
            address: property.address || "",
            bedrooms: property.bedrooms || "",
            bathrooms: property.bathrooms || "",
            area: property.area || "",
            floor: property.floor || "",
            parking: property.parking || "",
            image: property.image || ""

          });
        }
        console.log(property);
      }).catch((err)=>{console.log(err)});
  }},[id]);
  
  
  const handleChange=(e)=>{
    SetField({...Fields,[e.target.name]:e.target.value})
  }  
  const handleSubmit= async (e)=>{
    e.preventDefault(); 
      const url = id
      ? `http://localhost:3400/property/update/${id}`
      : "http://localhost:3400/add-property";
      const method = id ? "PUT" : "POST";
    try{
      const { id: _ignore, ...propertyData } = Fields; // id ko hata diya
      const res = await fetch(url,{
        method,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Fields),
      });
      const data = await res.json();
      console.log(data);
      id? alert("Property Updated Successfully") : alert("Property Added Successfully");
  }
  catch(err){
    console.log(err);
    alert("Error Occured");
  }
};  
  return (
    <>
    <Navigation />
      <section className="add-property mt-4 mb-4 container-fluid d-flex justify-content-center font-weight-bold flex-column align-items-center ">
        {/* <h1 className='text-center'>Add Your Property <br /> to Our <br /> Connection</h1> */}
        <div className="  d-flex semi-div w-lg-100 p-lg-5 justify-content-center align-items-center flex-column ">
          <h2 className='pt-3 text-white'>{id?"Edit Your Property":"Add Your Property"}</h2>
          <form onSubmit={handleSubmit} className='d-flex add-form justify-content-center align-items-center flex-column' action="" method='/'>
            <input value={Fields.type} name='type' type="text" onChange={handleChange} placeholder="Property type" required />
            <input value={Fields.price} name='price' type="number" onChange={handleChange} placeholder="Price" required />
            <input value={Fields.address} name='address' type="text" onChange={handleChange} placeholder="Location" required />
            <input value={Fields.bedrooms} name='bedrooms' type="number" onChange={handleChange} placeholder="Total Bedrooms" required />
            <input value={Fields.bathrooms} name='bathrooms' type="number" onChange={handleChange} placeholder="Total Bathrooms" required />
            <input value={Fields.area} name='area' type="number" onChange={handleChange} placeholder="Area" required />
            <input value={Fields.floor} name='floor' type="number" onChange={handleChange} placeholder="Floors" required />
            <input value={Fields.parking} name='parking' type="text" onChange={handleChange} placeholder="Parking" required />
            <input value={Fields.image} name='image' type="text" onChange={handleChange} placeholder="Upload image" required/>
            <button className='border rounded mb-3 px-5 py-1'  type="submit">{id? "Update" : "Add Property"}</button>
          </form>
        </div>
      </section>
    <Footer />  
    </>
  )
}

export default AddProperty