import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="w-[70%] mx-auto">
      <p className="text-gray-color mb-12">Welcome Back,</p>

      <form action="" className="text-gray-color">
        <div className="flex flex-col gap-16 mb-4">
          <div>
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-16">
          <div className="flex gap-5">
            <input type="radio" id="remember" name="remember" />
            <label className="text-[1.4rem]" htmlFor="remember">
              Remember Me
            </label>
          </div>
          <small className="text-[1.4rem]">Forgot Password?</small>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-primary-color text-white-color text-[1.6rem] py-[0.7rem] px-[5.6rem] mb-12 rounded-[1.2rem]"
            type="submit"
          >
            Log In
          </button>
        </div>

        <div className="text-center text-[1.6rem]">
          Don't have an account?{' '}
          <Link to="/" className="text-primary-color">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
