

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  Swal  from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location?.state?.from.pathname || "/";


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Log in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    });
  };

  return (
    <div>
      <Helmet>
        <title>SummerSchool | Login </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="card  w-1/2 max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
          
              <div className="form-control mt-6">
                <button className="btn btn-primary ">
                  Login
                </button>
              </div>
              <p>
                <small>
                  New Here? <Link to="/register">Create An Account</Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
