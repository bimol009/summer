
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from './../../hooks/useAuth';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const { googleSignEmailPass } = useAuth();
  const handleLogGoogle = () => {
    googleSignEmailPass().then((result) => {
      const loggedUser = result.user;

      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="w-full text-center my-2">
        <button
          onClick={handleLogGoogle}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
