import React from 'react'

function AddProperty() {
  return (
    <>
        <form action="" method='post'>
            <input type="number" placeholder="Enter id" />
            <input type="text" placeholder="Property type" />
            <input type="number" placeholder="Price" />
            <input type="text" placeholder="Location" />
            <input type="number" placeholder="Total Bedrooms" />
            <input type="number" placeholder="Area" />
            <input type="number" placeholder="Floors" />
            <input type="text" placeholder="Parking" />
            <input type="file" placeholder="Upload image" />
            <button type="submit">Add Property</button>
        </form>    
    </>
  )
}

export default AddProperty
