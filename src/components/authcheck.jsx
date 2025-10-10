import Navigation from './navbar'
import Footer from './footer'
import './signup.css'
import { useState } from 'react'

function Authcheck() {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState({
        Username:"",
        email:"",
        password:""
    });
    const [signin, setSignin] = useState({
        email:"",
        password:""
    });
    const handleUserSubmit = (e) =>{
        if(!signup.Username || !signup.email || !signup.password){
            alert("Please fill all the fields");
            return;
        }
        console.log("Signup data:", {signup});
    }
    const handleUserlogin = (e) =>{
        if(!signin.email || !signin.password){
            alert("Please fill all the fields");
            return;
        }
        console.log("Signin data:", {signin});
    }
    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:3400/User/SignUp",{
                method: "POST",
                body:JSON.stringify(signup),
                headers:{"Content-Type":"application/json"}
            });
            const data= await res.json()
            console.log("Data Is :", data);
            if(res.status === 200){
                window.location.href = "/";
                alert(data.message);
            }
        }
        catch(err){
            console.log("Error is :", err);
        }
    } 
    const handleSignIn = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:3400/User/SignIn",{
               method: "post",
               body: JSON.stringify(signin),
               headers: {"Content-Type":"application/json"} 
            })
            const data = await res.json();
            if(res.status === 200){
                localStorage.setItem("token",data.token);
                window.location.href = "/";
                alert(data.message); 
                console.log("Data Is :", data);
            }
        }
        catch(err){
            console.log("Error is :", err);
        }
    }
  return (
    <>
    <Navigation />
    <section className='container-fluid d-flex justify-content-center '>
        <div className='container d-flex justify-content-center  '>
            <div className=' w-full py-4 d-flex w-100  justify-content-center align-items-center'>
                <div className="col-lg-5">
                    {!login ? <form action="" key="signup" onSubmit={handleSignup} className='p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-white text-left'>Sign Up</h3>
                        <input type="text" name='Username' value={signup.Username} onChange={(e)=> setSignup({...signup, Username:e.target.value})} id="sign-Username" className=' rounded-0 mb-3' placeholder='Your Name' required />
                        <input type="email" name='email' value={signup.email} onChange={(e) => setSignup({...signup, email:e.target.value})} id="sign-email" className=' mb-3 rounded-0' placeholder='Your Email' required />
                        <input type="password" name='password' value={signup.password} onChange={(e) => setSignup({...signup, password:e.target.value})} id="sign-password" className=' mb-3 rounded-0' rows="1" placeholder='Your Password' required />
                        <button style={{backgroundColor: '#f35525', border: 'none'}} onClick={handleUserSubmit} type="submit" className='btn mt-1 btn-primary'>Sign Up</button>
                        <br /> <br /> <a onClick={()=> setLogin(true)} className='text-white' htmlFor="#">Already have an account? Login</a>
                    </form> :
                    <form action="" key="signin" onSubmit={handleSignIn} className='p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-white text-left'>Sign In</h3>
                        <input type="email" name='email' value={signin.email} onChange={(e) => setSignin({...signin, email:e.target.value})} id="sign-email" className=' mb-3 rounded-0' placeholder='Your Email' required />
                        <input type="password" name='password' value={signin.password}   onChange={(e) => setSignin({...signin, password:e.target.value})} id="sign-password" className=' mb-3 rounded-0' rows="1" placeholder='Your Password' required />
                        <button style={{backgroundColor: '#f35525', border: 'none'}} onClick={handleUserlogin} type="submit" className='btn mt-1 btn-primary'>Sign In</button> <br />
                        <br /><a onClick={()=> setLogin(false)} className='text-white' htmlFor="#">Don't have an account? Sign Up</a>
                    </form>
                    }
                 </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Authcheck;
