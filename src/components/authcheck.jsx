import './signup.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
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
    const navigate = useNavigate();
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
            const res = await fetch("https://jaipurflats-backend.onrender.com/User/SignUp",{
                method: "POST",
                body:JSON.stringify(signup),
                headers:{"Content-Type":"application/json"}
            });
            const data= await res.json()
            console.log("Data Is :", data);
            if(res.status === 200){
                navigate("/");
                alert(data.message);
            }
        }
        catch(err){
            console.log("Error is :", err);
        }
    } 
    const handleSignIn = async (e) => {
        e.preventDefault();
        if(localStorage.getItem("token")){
            alert("You are already logged in");
            navigate("/");
            return;
        }
        try{
            const res = await fetch("https://jaipurflats-backend.onrender.com/User/SignIn",{
               method: "post",
               body: JSON.stringify(signin),
               headers: {"Content-Type":"application/json"} 
            })
            const data = await res.json();
            if(res.status === 200){
                localStorage.setItem("token",data.token);
                localStorage.setItem("role",data.role)
                navigate("/");
                alert(data.message); 
                console.log("Data Is :", data);
            }
            if(res.status === 404){
                alert(data.message);
                return;
            }
            if(res.status === 401){
                alert(data.message);
                return;
            }
        }
        catch(err){
            console.log("Error is :", err);
        }
    }
  return (
    <>
    <section className='container-fluid d-flex justify-content-center '>
        <div className='container d-flex justify-content-center  '>
            <div className=' w-full py-4 d-flex w-100  justify-content-center align-items-center'>
                <div className="col-lg-5">
                    {!login ? <form action="" key="signup" onSubmit={handleSignup} className='p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-white text-left'>Sign Up</h3>
                        <input type="text" name='Username' value={signup.Username} onChange={(e)=> setSignup({...signup, Username:e.target.value})} id="sign-Username" className=' rounded-0 mb-3' placeholder='Your Name' required />
                        <input type="email" name='email' value={signup.email} onChange={(e) => setSignup({...signup, email:e.target.value})} id="sign-email" className=' mb-3 rounded-0' placeholder='Your Email' required />
                        <input type="password" name='password' value={signup.password} onChange={(e) => setSignup({...signup, password:e.target.value})} id="sign-password" className=' mb-3 rounded-0' rows="1" placeholder='Your Password' required />
                        <p className="text-danger bold">* Please Login After Sign Up</p>
                        <button style={{backgroundColor: '#f35525', border: 'none'}} onClick={handleUserSubmit} type="submit" className='btn mt-1 btn-primary'>Sign Up</button>
                        <br /> <br /> <a onClick={()=> setLogin(true)} className='form-link text-white' htmlFor="#">Already have an account? Login</a>
                    </form> :
                    <form action="" key="signin" onSubmit={handleSignIn} className='p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-white text-left'>Sign In</h3>
                        <input type="email" name='email' value={signin.email} onChange={(e) => setSignin({...signin, email:e.target.value})} id="sign-email" className=' mb-3 rounded-0' placeholder='Your Email' required />
                        <input type="password" name='password' value={signin.password}   onChange={(e) => setSignin({...signin, password:e.target.value})} id="sign-password" className=' mb-3 rounded-0' rows="1" placeholder='Your Password' required />
                        <button style={{backgroundColor: '#f35525', border: 'none'}} onClick={handleUserlogin} type="submit" className='btn mt-1 btn-primary'>Sign In</button> <br />
                        <br /><a onClick={()=> setLogin(false)} className='form-link text-white' htmlFor="#">Don't have an account? Sign Up</a>
                    </form>
                    }
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Authcheck;
