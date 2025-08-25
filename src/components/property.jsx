const villas = [
  {
    type: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
    image: "./images/property-01.jpg"
  },
  {
    type: "Luxury Villa",
    price: "$1.180.000",
    address: "54 Mid Street Florida, OR 27001",
    bedrooms: 6,
    bathrooms: 5,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
    image: " ./images/property-02.jpg"
  },
  {
    type: "Luxury Villa",
    price: "$1.460.000",
    address: "26 Old Street Miami, OR 38540",
    bedrooms: 5,
    bathrooms: 4,
    area: "225m2",
    floor: 3,
    parking: "10 spots",
    image: " ./images/property-03.jpg"
  },
   {
    type: "Apartment",
    price: "$584.500",
    address: "26 Old Street Miami, OR 38540",
    bedrooms: 4,
    bathrooms: 3,
    area: "125m2",
    floor: "25th",
    parking: "2 cars",
    image: " ./images/property-04.jpg"
  },
  {
    type: "Penthouse",
    price: "$925.600",
    address: "34 Beach Street Miami, OR 42680",
    bedrooms: 4,
    bathrooms: 4,
    area: "180m2",
    floor: "38th",
    parking: "2 cars",
    image: " ./images/property-05.jpg"
  },
  {
    type: "Modern Condo",
    price: "$450.000",
    address: "22 New Street Portland, OR 16540",
    bedrooms: 3,
    bathrooms: 2,
    area: "165m2",
    floor: "26th",
    parking: "3 cars",
    image: " ./images/property-06.jpg"
  },
  {
    type: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
    image: " ./images/property-01.jpg"
  },
  {
    type: "Luxury Villa",
    price: "$1.180.000",
    address: "54 Mid Street Florida, OR 27001",
    bedrooms: 6,
    bathrooms: 5,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
    image: " ./images/property-02.jpg"
  },
  {
    type: "Luxury Villa",
    price: "$1.460.000",
    address: "26 Old Street Miami, OR 38540",
    bedrooms: 5,
    bathrooms: 4,
    area: "225m2",
    floor: 3,
    parking: "10 spots",
    image: " ./images/property-03.jpg"
  }
]
const propdata=villas.map(villa=>{
    return (
      <>
        
        <div className="col-lg-4 col-md-5 card-container">
            <div className="card-1 " id="card-1">
                <img className="img-fluid mb-2" src={villa.image} alt="" />
                <span className=" p-1 mt-1 "> {villa.type} </span>
                <h6 style={{textAlign: "right"}} className=" fw-bold">{villa.price}</h6>
                <h4 className="fw-bold">{villa.address}</h4>
                <ul>
                    <li className="text-capitalize">bedroom : {villa.bedrooms} </li>
                    <li className="text-capitalize">bathroom : {villa.bathrooms} </li>
                    <li className="text-capitalize">area : {villa.area} </li>
                    <li className="text-capitalize">floor : {villa.floor} <b>3</b></li>
                    <li className="text-capitalize">parking: {villa.parking} <b>6 slots</b></li>
                </ul>
                <button className="main-btn text-center"><a> Schedule a Visit</a></button>
            </div>        
        </div>
      </>
    );
}
)   

function Property({ data }) {

  return (
    <>
    <section className="hero6 p-0 p-sm-5 container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className=" hero-head text-center">
                       | Properties
                    </p>
                    <p className="text-capitalize fs-1 fw-bold text-center">{data}</p>
                </div>
            </div>
        </div>
    </section>
    <div className="row d-flex justify-content-center align-items-center">
        {propdata}
    </div>
    </>
  )
}

export default Property;
