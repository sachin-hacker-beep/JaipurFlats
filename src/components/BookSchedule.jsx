import { useState } from 'react';
import tree_img from "../assets/treeimg.png";

function BookSchedule() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    numMembers: '',
    contactNumber: '',
    visitDate: '',
  });

  const showdata = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="form-div d-flex w-full justify-content-center align-items-center">
      <div className=" form-cont row p-5 w-70 d-flex justify-content-center align-items-center ">
        <h1 className="text-white mt-5 text-center pb-4">Have a Visit :)</h1>
        <div className="main_form_div row d-flex justify-content-between">
          <figure className='col-6 d-none img-fluid p-5 d-lg-flex' >  
            <img className='' src={tree_img} alt="" />
          </figure>
          <form className='col-lg-6 col-12  text-white ' action="">
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} value={formData.fullName} className="form-control"  id="fullName" placeholder="Enter full name" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">Email address</label>
              <input type="email" onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })} value={formData.emailAddress} className="form-control" id="emailAddress" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label htmlFor="numMembers" className="form-label">Number of Members</label>
              <input type="number" onChange={(e) => setFormData({ ...formData, numMembers: e.target.value })} value={formData.numMembers} className="form-control" id="numMembers" placeholder="Enter number of members" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input type="text" onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} value={formData.contactNumber} className="form-control" id="contactNumber" placeholder="Enter contact number" />
            </div>
            <div className="mb-3">
              <label htmlFor="visitDate" className="form-label">Date</label>
              <input type="date" onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })} value={formData.visitDate} className="form-control" id="visitDate" />
            </div>
            <button onClick={showdata} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      </div>
    </section>
    </>
  );
}
export default BookSchedule
