"use client";
import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { login } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import NoticeModal from '../NoticeModal';

const Login = () => {

  const currentUser = useSelector((state) => state.user.currentUser);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [showNotice, setShowNotice] = useState(false);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [noticeData, setNoticeData] = useState(null);

  useEffect(() => {
    let mounted = true;
    if(mounted){
      console.log('currentUser', currentUser);
      console.log('isLoggedIn', isLoggedIn);
      setNoticeData({isShow: true, message: isLoggedIn ? 'Login Success!' : 'Login Failed!', description: isLoggedIn ? `Welcome, ${currentUser.username}! You have successfully logged in. This is how a user login and signup workflow with modern react redux toolkit works.` : 'Oops! Failed To Logged In. This is how a User login and signup workflow with modern react redux toolkit works.', buttons: '', autoClose: false})
    }
  }, [isLoggedIn, currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setShowNotice(true)
  };

  return (
    <div>
      <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
                  autoFocus 
                  autoComplete="true"
                  required 
                />
              </div>
      
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password" 
                  minLength="6" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete="true"
                  required 
                />
              </div>
      
              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>
      
              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lgpx-4 py-3 mt-6">Log In</button>
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
              <img className="w-6 h-6 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              <span>Login with Google</span>
            </button>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you don't have an account...</p>
              <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400">Register</button>
            </div>
          </div>

          <div className="w-1/2 md:block hidden ">
            <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" />
          </div>
        </div>
      </section>

      {showNotice &&
        <NoticeModal 
          isShow={noticeData.isShow}
          message={noticeData.message}
          description={noticeData.description}
          buttons={noticeData.buttons}
          autoClose={noticeData.autoClose}
        />
      }
    </div>
  );
};

export default Login;