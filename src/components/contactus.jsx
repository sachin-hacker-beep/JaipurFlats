import React, { useState } from 'react'
import video_bg from '../assets/video-bg.jpg';

function Contactus() {
    const [ContactData,setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });
    function handlesubmit(e) {
        e.preventDefault();
        console.log(ContactData);
    }
  return (
    <>
      <section style={{backgroundImage:`url(${video_bg})`}} className= ' container-fluid w-100  contact-us '>
        <div className="container contact-div ">
            <div className="contact-head pt-5 d-flex justify-content-between align-items-center flex-column text-white">
                <h1 className='text-center'>Contact Us</h1>
                <p className='text-center'>If you have any questions , feel free to reach out! , we are here to help you.<br/> we promise to give response "ASAP"</p>
            </div>
            <div className="contact-main row mt-5 d-flex flex-sm-column-reverse flex-lg-row justify-content-center align-items-center">
                <div className="contact-info col-lg-7 col-12 ">
                    <ul className='d-flex flex-row flex-lg-column row'>
                        <li className='d-flex mb-4 gap-3  '>
                            <div className="icon-div white">
                                <i className=" p-3 bg-white rounded-circle fs-4 fas fa-map-marker-alt"></i>
                            </div>
                            <div className="address-div">
                                <h5 className='text-white'>Address</h5>
                                <p className='text-white'>Subhash Tower, Shastri Nagar,<br /> Jaipur, 302016</p>
                            </div>
                        </li>
                        <li className='d-flex mb-4 gap-3 col-sm-6'>
                            <div className="icon-div white">
                                <i className=" p-3 bg-white rounded-circle fs-4 fas fa-phone"></i>
                            </div>
                            <div className="address-div">
                                <h5 className='text-white'>Phone</h5>
                                <p className='text-white'>+91 12345 67890</p>
                            </div>
                        </li>
                        <li className='d-flex mb-4 gap-3 col-sm-6'>
                            <div className="icon-div white">
                                <i className=" p-3 bg-white rounded-circle fs-4 fas fa-envelope"></i>
                            </div>
                            <div className="address-div">
                                <h5 className='text-white'>Email</h5>
                                <p className='text-white'>info@example.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="contact-detail col-lg-5 pb-5">
                    <form action="" className='p-5 rounded contact-form bg-white'>
                        <h3 className='text-center mb-4 text-left'>Get In Touch</h3>
                        <input type="text" value={ContactData.name} onChange={e =>setContactData({...ContactData, name:e.target.value})} id="name" className='form-control rounded-0 mb-3' placeholder='Your Name' />
                        <input type="email" value={ContactData.email} onChange={e =>setContactData({...ContactData, email:e.target.value})} id="email" className='form-control mb-3 rounded-0' placeholder='Your Email' />
                        <textarea value={ContactData.message} onChange={e =>setContactData({...ContactData, message:e.target.value})} id="message" className='form-control mb-3 rounded-0' rows="1" placeholder='Your Message'></textarea>
                        <button onClick={handlesubmit} style={{backgroundColor: '#f35525', border: 'none'}} type="submit" className='btn btn-primary'>Send Message</button>
                    </form>
                 </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contactus
