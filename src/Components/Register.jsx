import { Link } from 'react-router-dom';
import Navbar from '../Pages/Home/Shared/Navbar';
import { useContext } from 'react';
import { authContext } from '../AuthComponent/AuthComponet';

const Register = () => {
    const {createUser}=useContext(authContext)

    const registerHanler=e=>{
        e.preventDefault()
        const myForm=new FormData(e.currentTarget)
        const name=myForm.get("name")
        const photoUrl=myForm.get("photoUrl")
        const email=myForm.get("email")
        const password=myForm.get("password")

        console.log(name,photoUrl,email,password)
        createUser(email,password)
        .then(resut=>{
            console.log(resut.user)
            
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex">
                    <form onSubmit={registerHanler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='text-center mb-3'>
                        <p>You Have Accout?<Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;