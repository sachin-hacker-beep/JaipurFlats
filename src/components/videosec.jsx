import React from 'react'
import video_frame from '../assets/video-frame.jpg';
import video_bg from '../assets/video-bg.jpg';

function Videosec() {
  return (
    <>
        <section style={{backgroundImage:`url(${video_bg})`}} className="hero3 container-fluid">
            <div className="container">
                <p className="video-text hero-head text-uppercase  text-center mt-5">| video-view</p>
                <p className="lh-base text-capitalize text-center fs-1 fw-bold text-white">get closer view <br/>& different <br/>feelings</p>
            </div>
            <div className="container">
                <div className="sofa">
                    <img className="img-fluid" src={video_frame} alt="" />
                    <span className="play-div" >
                        <a className="p-2" href="">
                            <i className="fa fa-play"></i>
                        </a>
                    </span>    
                </div>

            </div>
        </section>
        <section className="hero4 container-fluid">
        <div className="container">
            <div className="row achieve-div gx-5 gy-4 gy-md-4 pt-xl-5 mt-xl-5 d-flex ps-5 pe-5  ">
                <div className="achievement col-lg-3 col-md-5 p-4 me-1 "><h2>34</h2><p className=" text-capitalize achievement-text">building finished now</p></div>
                <div className="achievement col-lg-3 col-md-5 p-4 me-1 "><h2>12</h2><p className="achievement-text text-capitalize">year experience</p></div>
                <div className="achievement col-lg-3 col-md-5 p-4 me-1 "><h2>5</h2><p className="achievement-text text-capitalize">awards won 20223</p></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Videosec;
