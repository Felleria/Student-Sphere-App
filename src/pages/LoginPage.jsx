// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = ({ login }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(role);
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-xl">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
//         <p className="text-center text-gray-500 mt-2">Enter your account details below</p>

//         <div className="mt-6">
//           <button
//             type="button"
//             className="w-full flex items-center justify-center py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//               {/* Google icon */}
//               <path d="M21.35 11.1h-9.3v2.85h5.65a4.85 4.85 0 01-4.85 3.35A4.85 4.85 0 018.5 12 4.85 4.85 0 0113.85 7.15a4.7 4.7 0 013.25 1.3l2.25-2.25A7.75 7.75 0 0013.85 3.5 7.85 7.85 0 006 12a7.85 7.85 0 007.85 8 7.65 7.65 0 007.5-5.85v-3.05z" />
//             </svg>
//             Log in with Google
//           </button>
//         </div>

//         <div className="mt-4 flex items-center justify-between">
//           <div className="border-t border-gray-300 w-full"></div>
//           <span className="text-gray-500 mx-4">OR</span>
//           <div className="border-t border-gray-300 w-full"></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//           <div className="relative">
//             <label className="sr-only" htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Email Address"
//             />
//           </div>

//           <div className="relative">
//             <label className="sr-only" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Password"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold">Role</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="admin">Admin</option>
//               <option value="teacher">Teacher</option>
//               <option value="student">Student</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold shadow-md hover:bg-gray-800 transition duration-300"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
//         </div>
//       </div>

//       <div
//         className="hidden md:block md:w-1/2 bg-cover bg-center"
//         style={{ backgroundImage: "url('/background-image.jpg')" }}
//       />
//     </div>
//   );
// };

// export default LoginPage;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in both email and password.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5555/login', { email, password });

//       const { token } = response.data;
//       localStorage.setItem('token', token);

//       navigate('/admin');
//     } catch (err) {
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   const handleGoogleLogin = () => {
//     console.log("Google login clicked");
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-xl">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
//         <p className="text-center text-gray-500 mt-2">Enter your account details below</p>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <div className="mt-6">
//           <button
//             type="button"
//             className="w-full flex items-center justify-center py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
//             onClick={handleGoogleLogin}
//           >
//             <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//               {/* Google icon */}
//               <path d="M21.35 11.1h-9.3v2.85h5.65a4.85 4.85 0 01-4.85 3.35A4.85 4.85 0 018.5 12 4.85 4.85 0 0113.85 7.15a4.7 4.7 0 013.25 1.3l2.25-2.25A7.75 7.75 0 0013.85 3.5 7.85 7.85 0 006 12a7.85 7.85 0 007.85 8 7.65 7.65 0 007.5-5.85v-3.05z" />
//             </svg>
//             Log in with Google
//           </button>
//         </div>

//         <div className="mt-4 flex items-center justify-between">
//           <div className="border-t border-gray-300 w-full"></div>
//           <span className="text-gray-500 mx-4">OR</span>
//           <div className="border-t border-gray-300 w-full"></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//           <div className="relative">
//             <label className="sr-only" htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Email Address"
//             />
//           </div>

//           <div className="relative">
//             <label className="sr-only" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold shadow-md hover:bg-gray-800 transition duration-300"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
//         </div>
//       </div>

//       <div
//         className="hidden md:block md:w-1/2 bg-cover bg-center"
//         style={{ backgroundImage: "url('/background-image.jpg')" }}
//       >
//         <div className="h-full w-full bg-gray-800 opacity-50"></div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
        <p className="text-center text-gray-500 mt-2">Enter your account details below</p>

        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              {/* Google icon */}
              <path d="M21.35 11.1h-9.3v2.85h5.65a4.85 4.85 0 01-4.85 3.35A4.85 4.85 0 018.5 12 4.85 4.85 0 0113.85 7.15a4.7 4.7 0 013.25 1.3l2.25-2.25A7.75 7.75 0 0013.85 3.5 7.85 7.85 0 006 12a7.85 7.85 0 007.85 8 7.65 7.65 0 007.5-5.85v-3.05z" />
            </svg>
            Log in with Google
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="text-gray-500 mx-4">OR</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="relative">
            <label className="sr-only" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold shadow-md hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        </div>
      </div>

      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      />
    </div>
  );
};

export default LoginPage;
