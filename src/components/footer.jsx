function Footer(){
   return(
    <>
    <footer className="footer w-full py-3">
        <section>
            
            <div className="d-flex flex-column">
                <ul className="list-unstyled footer-item d-flex  gap-2 justify-content-center align-items-center">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Jobs</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className="icon-div footer-item d-flex justify-content-center align-items-center gap-2">
                    <a href="#twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#youtube"><i className="fab fa-youtube"></i></a>
                </div>
                <p className=" footer-item text-center pt-3">CopyRight &copy; All right reserved by <span className="underlined">Sachin.Pvt.Ltd</span></p>
            </div>
        </section>
    </footer>
    </>
   )
}

export default Footer;