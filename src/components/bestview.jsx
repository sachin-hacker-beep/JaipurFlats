import featured from '../assets/featured.jpg';
import featured_icon from '../assets/featured-icon.png';
import info_icon1 from '../assets/info-icon-01.png';
import info_icon2 from '../assets/info-icon-02.png';
import info_icon3 from '../assets/info-icon-03.png';
import info_icon4 from '../assets/info-icon-04.png'; 
function Bestview() {
  return (
    <div>
      <section className="hero2 container-fluid">
        <div className="container featured-div row p-0 " >
            <div className="container p-md-5  pb-0 main-feature">
                <figure className="col-lg-4 col-6 col-md-6 main-feature-box1">
                    <img className="img-fluid" src={featured} alt="Featured"/>
                    <div className="pic-div d-none d-md-flex ">
                        <a href=""><img src={featured_icon} alt="Featured Icon"/></a>    
                    </div>
                </figure>
                
                <div className="col-lg-6 col-md-6 col-12 me-4 main-feature-box2">
                    <h4 className="text-danger hero-head mb-4">| featured</h4>
                    <h1 className="text-capitalize s">best className<br/>appartment & className<br/>see view</h1>
                    <div className="accordion accordion-style accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header question active">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Accordion Item #2
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              Accordion Item #3
                            </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=" main-feature-box3 row gy-5 mt-0">
                    <div className="col-lg-3 col-6 col-md-6 d-flex  justify-content-center align-items-center">
                        <img className="info-img" src={info_icon1} alt="" />
                        <h4>
                            250 m2
                            className<br/>
                            <span className="about-texti">Total Flat Space</span>

                        </h4>
                    </div>
                    <div className="col-lg-3 col-6 col-md-6 d-flex justify-content-center align-items-center">
                        <img className="info-img" src={info_icon2} alt="" />
                        <h4>
                            Contract
                            className<br/>
                            <span className="about-texti">Contract Ready</span>

                        </h4>
                    </div>
                    <div className="col-lg-3 col-6 col-md-6 d-flex justify-content-center align-items-center"> 
                        <img className="info-img" src={info_icon3} alt="" />
                        <h4>
                            Payment
                            className<br/>
                            <span className="about-texti">Payment Process</span>

                        </h4>
                    </div>
                    <div className="col-lg-3 col-6 col-md-6 d-flex  justify-content-center align-items-center">
                        <img className="info-img" src={info_icon4} alt="" />
                        <h4>
                            Safety
                            className<br/>
                            <span className="about-texti"> 24/7 Under Control</span>
                        </h4>
                    </div>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Bestview;
