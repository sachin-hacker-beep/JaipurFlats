import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './add-property.css';
import { useNavigate } from 'react-router-dom';
function AddProperty() {
  const [Fields, SetField] = useState({
    useremail: "",
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
      fetch(`https://jaipurflats-backend.onrender.com/properties`)
      .then((res)=>res.json())
      .then((data)=>{
        const property = data.find(item=>item.id == id);
        if(property){ 
          SetField({
            useremail: property.useremail || "",  
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
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault(); 
      const token = localStorage.getItem("token");
      if(!token){
        alert("Please login to add or update property");
        return;
      }
      let url = id? `https://jaipurflats-backend.onrender.com/property/update/${id}` : "https://jaipurflats-backend.onrender.com/add-property";
      let method = id? "PUT" : "POST";
      try{
        const { id: _ignore, ...propertyData } = Fields; // id ko hata diya
        console.log(propertyData);
        // console.log(url);
        const res = await fetch(url,{
          method ,
          headers:{"Content-Type":"application/json",
          "Authorization": `Bearer ${token}`,
          },
          body:JSON.stringify(propertyData),
        });
        const data = await res.json();
        if(res.status == 401 || res.message === "Token Expired"){
          alert("Session expired. Please login again.");
          navigate("/User/SignIn");
          return;
        }
        if(res.status == 200){
          console.log(data);
          id? alert("Property Updated Successfully") : alert("Property Added Successfully");
          navigate("/");
        }
        if(res.status == 403){
          alert(data.message);
        }
        if(res.status == 405){
          alert(data.message);
        }
      }
    catch(err){
      console.log(err);
      alert("Error Occured");
    }
};  
  return (
    <>
      <section className="add-property mt-4 mb-4 container-fluid d-flex justify-content-center font-weight-bold flex-column align-items-center ">
        {/* <h1 className='text-center'>Add Your Property <br /> to Our <br /> Connection</h1> */}
        <div className="  d-flex semi-div w-lg-100 p-lg-5 justify-content-center align-items-center flex-column ">
          <h2 className='pt-3 text-white'>{id?"Edit Your Property":"Add Your Property"}</h2>
          <form onSubmit={handleSubmit} className='d-flex add-form justify-content-center align-items-center flex-column' >
            <input value={Fields.useremail} name='useremail' type="email" onChange={handleChange} placeholder="User Email " required />
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
    </>
  )
}

export default AddProperty