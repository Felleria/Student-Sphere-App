import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data from API
    fetch('http://127.0.0.1:5001/profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);
      })
      .catch(error => {
        setError(error);
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>
      {error && <p className="text-red-500 text-center mb-4">Error: {error.message}</p>}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Attribute</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {profile ? (
            <>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Name</td>
                <td className="border border-gray-300 px-4 py-2">{profile.name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Date of Birth</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(profile.date_of_birth).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Enrollment Date</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(profile.enrollment_date).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Gender</td>
                <td className="border border-gray-300 px-4 py-2">{profile.gender}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Phone Number</td>
                <td className="border border-gray-300 px-4 py-2">{profile.phone_number}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">User ID</td>
                <td className="border border-gray-300 px-4 py-2">{profile.user_id}</td>
              </tr>
            </>
          ) : (
            !error && (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center">Loading profile...</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;

