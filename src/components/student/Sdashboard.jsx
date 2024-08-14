import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sdashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <h2 className="text-xl font-semibold mb-4 text-center">
        <p><b>Welcome to the student's Dashboard!</b></p>
      </h2>
      <div className="flex justify-around flex-wrap gap-4">
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition duration-300"
          onClick={() => handleNavigate('/profile')}
        >
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>Profile information.</p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition duration-300"
          onClick={() => handleNavigate('/grades')}
        >
          <h2 className="text-xl font-semibold mb-2">Grades</h2>
          <p>Grades and academic performance.</p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition duration-300"
          onClick={() => handleNavigate('/attendance')}
        >
          <h2 className="text-xl font-semibold mb-2">Attendance</h2>
          <p>Attendance record.</p>
        </div>
      </div>
    </div>
  );
};

export default Sdashboard;