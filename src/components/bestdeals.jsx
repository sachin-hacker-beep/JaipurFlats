// import Nav from 'react-bootstrap/Nav';

function Bestdeals() {
  return (
    <>
      <section className="container-fluid hero5 mb-5">
        <div className="container">
          <div className="row link-style">
            <div className="col-lg-4 text-md-center flex-column x pb-0 mb-0">       
                <p className="hero5-head hero-head text-uppercase">| best deals</p>
                <p className="fs-1 text-black text-capitalize fw-bold">find your best <br />deal right now !</p>
            </div>
            <ul className="nav nav-pills nav-pills-style mb-3 p-xl-5 col-lg-10 pt-lg-3 " id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-appartment" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Appartment</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-villa" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Villa</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-house" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">House</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-appartment" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="best-deal row">
                  <div className="col-lg-5  col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
                    <div>
                      <img className="img-fluid" src="./images/property-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-6 col-xl-3 col-md-5 deal">
                    <ul className="best-deal-list text-capitalize">
                      <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
                      <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
                      <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
                      <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
                      <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
                    </ul>
                  </div>          
                <div className="col-lg-12 flex-column p-lg-5 pt-xl-5 col-xl-4  deal-text">
                  <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
                  <p className="long-text">Lorem ipsum consectetur adipis\\\\\\\icing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus  perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
                  <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
                      <span className="special-icon-2 d-flex">
                          <span className="kuchh">
                              <i className="fa-solid fa-calendar text-white"></i> 
                          </span>
                          <p className="ms-2">Schedule a Visit</p>
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-villa" role="tabpanel"           aria-labelledby="pills-profile-tab">
              <div className="best-deal row">
                <div className="col-lg-5 col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
                  <div>
                    <img className="img-fluid" src="./images/property-02.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-6 col-xl-3  col-md-5 deal ">
                  <ul className="best-deal-list pe-xl-0 d-flex justify-content-center  align-items-center flex-column  text-capitalize">
                    <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
                    <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
                    <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
                    <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
                    <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
                  </ul>
                </div>
                <div className="col-lg-12 flex-column p-lg-5 pt-xl-5 col-xl-4  deal-text">
                  <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
                  <p className="long-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus incidunt perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
                  <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
                    <span className="special-icon-2 d-flex">
                        <span className="kuchh">
                            <i className="fa-solid fa-calendar text-white"></i> 
                        </span>
                        <p className="ms-2">Schedule a Visit</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-house" role="tabpanel" aria-labelledby="pills-contact-tab"> 
              <div className="best-deal row">
                <div className="col-lg-5 col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
                  <div>
                      <img className="img-fluid" src="./images/property-03.jpg" alt="" />
                  </div>
                </div>                
                <div className="col-lg-5 col-6 col-xl-3  col-md-5 deal ">
                  <ul className="best-deal-list  text-capitalize">
                    <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
                    <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
                    <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
                    <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
                    <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
                  </ul>
                </div>    
                <div className="col-lg-12 flex-column p-lg-5 pt-xl-5 col-xl-4  deal-text">
                  <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
                  <p className="long-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus incidunt perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
                  <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
                    <span className="special-icon-2 d-flex">
                      <span className="kuchh">
                          <i className="fa-solid fa-calendar text-white"></i> 
                      </span>
                      <p className="ms-2">Schedule a Visit</p>
                    </span>
                  </div>
                </div>
              </div>              
            </div>
          </div>  
        </div>  
        </div>
      </section>
    </>
  );
}

export default Bestdeals;

// import React from 'react'

// function Bestdeals() {
//   return (
//     <>
//     <section className="container-fluid hero5 mb-5">
//         <div className="container">
//             <div className="row link-style">
//                 <div className="col-lg-4 text-md-center flex-column x pb-0 mb-0">       
//                     <p className="hero5-head hero-head text-uppercase">| best deals</p>
//                     <p className="fs-1 text-black text-capitalize fw-bold">find your best <br />deal right now !</p>
//                 </div>
//                 <ul className="nav nav-pills nav-pills-style mb-3 p-xl-5 col-lg-10 pt-lg-3 " id="pills-tab" role="tablist">
//                     <li className="nav-item" role="presentation">
//                       <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-appartment" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Appartment</button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                       <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-villa" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Villa</button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                       <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-house" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">House</button>
//                     </li>
                    
//                 </ul>
//                 <div className="tab-content" id="pills-tabContent">
//                     <div className="tab-pane fade show active" id="pills-appartment" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
//                         <div className="best-deal row">
//                             <div className="col-lg-5  col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
//                                 <div>
//                                     <img className="img-fluid" src="./images/property-01.jpg" alt="" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 col-6 col-xl-3 col-md-5 deal">
//                                 <ul className="best-deal-list text-capitalize">
//                                     <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
//                                     <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
//                                     <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
//                                     <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
//                                     <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
//                                 </ul>
//                             </div>
                
//                             <div className="col-lg-12 flex-column p-lg-5 pt-xl-5 col-xl-4  deal-text">
//                                 <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
//                                 <p className="long-text">Lorem ipsum consectetur adipis\\\\\\\icing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus  perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
//                                 <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
//                                     <span className="special-icon-2 d-flex">
//                                         <span className="kuchh">
//                                             <i className="fa-solid fa-calendar text-white"></i> 
//                                         </span>
//                                         <p className="ms-2">Schedule a Visit</p>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="tab-pane fade" id="pills-villa" role="tabpanel"           aria-labelledby="pills-profile-tab" tabIndex="0">
//                         <div className="best-deal row">
//                             <div className="col-lg-5 col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
//                                 <div>
//                                     <img className="img-fluid" src="./images/property-02.jpg" alt="" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 col-6 col-xl-3  col-md-5 deal ">
//                                 <ul className="best-deal-list pe-xl-0 d-flex justify-content-center  align-items-center flex-column  text-capitalize">
//                                     <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
//                                     <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
//                                     <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
//                                     <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
//                                     <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
//                                 </ul>
//                             </div>
                            
//                             <div className="col-lg-12 p-lg-5 pt-xl-5 col-xl-4  deal-text">
//                                 <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
//                                 <p className="long-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus incidunt perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
//                                 <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
//                                     <span className="special-icon-2 d-flex">
//                                         <span className="kuchh">
//                                             <i className="fa-solid fa-calendar text-white"></i> 
//                                         </span>
//                                         <p className="ms-2">Schedule a Visit</p>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="tab-pane fade" id="pills-house" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0"> 
//                         <div className="best-deal row">
//                             <div className="col-lg-5 col-6 col-xl-5 ps-xl-5  col-md-5 d-md-flex justify-content-space-evenly deal-img">
//                                 <div>
//                                     <img className="img-fluid" src="./images/property-03.jpg" alt="" />
//                                 </div>
//                             </div>
                        
//                             <div className="col-lg-5 col-6 col-xl-3  col-md-5 deal ">
//                                 <ul className="best-deal-list  text-capitalize">
//                                     <li>total flat space <span className="ms-4 text-black fs-5 fw-bold float-end">185 m2</span></li>
//                                     <li>floor number <span className="ms-4 text-black fs-5 fw-bold float-end">26th</span></li>
//                                     <li>number of rooms <span className="ms-4 text-black fs-5 fw-bold float-end">4</span></li>
//                                     <li>parking available <span className="ms-4 text-black fs-5 fw-bold float-end">Yes</span></li>
//                                     <li>payment process <span className="ms-4 text-black fs-5 fw-bold float-end">Bank</span></li>
//                                 </ul>
//                             </div>    
//                             <div className="col-lg-12 p-lg-5 pt-xl-5 col-xl-4  deal-text">
//                                 <h3 className="text-capitalize text-black fs-5 "> extra info about property</h3>
//                                 <p className="long-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis velit nulla qui assumenda nemo excepturi facere ea, doloribus incidunt perspiciatis eum. Accusantium omnis hic rem cupiditate explicabo illum, reiciendis nulla?<br /></p>
//                                 <div className="special-link special-link-2 float-start d-flex  align-items-center gap-1 ">
//                                     <span className="special-icon-2 d-flex">
//                                         <span className="kuchh">
//                                             <i className="fa-solid fa-calendar text-white"></i> 
//                                         </span>
//                                         <p className="ms-2">Schedule a Visit</p>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>              
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Bestdeals

