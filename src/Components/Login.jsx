import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar";
import { useContext } from "react";
import { authContext } from "../AuthComponent/AuthComponet";

const Login = () => {
    const { loginUser } = useContext(authContext)
    const location = useLocation()
    console.log("login location", location.state)
    const naviget = useNavigate()

    const loginHanler = (e) => {
        e.preventDefault()
        const myForm = new FormData(e.currentTarget)
        const email = myForm.get("email")
        const password = myForm.get("password")
        // console.log(email,password)
        loginUser(email, password)
            .then(result => {
                console.result(result.user)
                naviget(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex">
                    <form onSubmit={loginHanler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='text-center mb-3'>
                        <p>Are You New?<Link to="/register">Rgister</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;