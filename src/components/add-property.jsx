import React, { useEffect, useState } from 'react'
import './add-property.css';
function AddProperty() {
  const [Field, SetField] = useState({
    id: "",
    type: "",
    price: "",
    location: "",
    bedrooms: "",
    area: "",
    floors: "",
    parking: "",
    image: ""
  })
  const handleChange=(e)=>{
    SetField({...Field,[e.target.name]:e.target.value})
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(Field);
    try{  
      const res = await fetch("http://localhost:3200/add-property",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Field)
      });
      const data = await res.json();
      console.log(data);
      alert("Property Added Successfully");
  }
  catch(err){
    console.log(err);
    alert("Error Occured");
  }
};  
  return (
    <>
      <section className="add-property mt-4 mb-4 container-fluid d-flex justify-content-center font-weight-bold flex-column align-items-center ">
        <h1 className='text-center'>Add Your Property <br /> to Our <br /> Connection</h1>
        <div className="  d-flex semi-div w-lg-100 p-lg-5 justify-content-center align-items-center flex-column ">
          <h2 className='pt-3 text-white'>Add Property</h2>
          <form onSubmit={handleSubmit} className='d-flex add-form justify-content-center align-items-center flex-column' action="" method='/'>
              <input name='id' type="number" onChange={handleChange} placeholder="Enter id" required />
              <input name='type' type="text" onChange={handleChange} placeholder="Property type" required />
              <input name='price' type="number" onChange={handleChange} placeholder="Price" required />
              <input name='address' type="text" onChange={handleChange} placeholder="Location" required />
              <input name='bedrooms' type="number" onChange={handleChange} placeholder="Total Bedrooms" required />
              <input name='area' type="number" onChange={handleChange} placeholder="Area" required />
              <input name='floors' type="number" onChange={handleChange} placeholder="Floors" required />
              <input name='parking' type="text" onChange={handleChange} placeholder="Parking" required />
              <input name='image' type="text" onChange={handleChange} placeholder="Upload image" required/>
              <button className='border rounded mb-3 px-5 py-1'  type="submit">Add Property</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddProperty
