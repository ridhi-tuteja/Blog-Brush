// // 
// import { useState, useEffect } from 'react'
// import {useDispatch} from "react-redux";
// import './App.css'
// import authService from './appwrite/auth'
// import { Footer, Header } from './components';
// import { login, logout } from './store/authSlice';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600">
//         Loading...
//       </div>
//     );
//   }
// return (
//   <div className="h-screen w-screen flex flex-col bg-gray-50 text-gray-800 font-sans overflow-hiddenxx">
//     <Header />

//     <main className="flex-grow w-full px-4 py-6 bg-gray-100">
//       <Outlet />
//     </main>

//     <Footer />
//   </div>
// );


// }

// export default App;
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import './App.css';
import authService from './appwrite/auth';
import { Footer, Header } from './components';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50 text-gray-800 font-sans overflow-hidden">
      <Header />

      <main className="flex-grow w-full px-4 py-6 bg-gray-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
