import React, { useState, useEffect } from 'react';

const ManageStudents = () => {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [grades, setGrades] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch the number of students
    fetch('http://127.0.0.1:5555/students')
      .then(response => response.json())
      .then(data => setStudents(data.count));

    // Fetch the number of courses
    fetch('http://127.0.0.1:5555/courses')
      .then(response => response.json())
      .then(data => setCourses(data.count));

    // Fetch grades summary
    fetch('')
      .then(response => response.json())
      .then(data => setGrades(data));

    // Fetch recent activities
    fetch('/api/teacher/recent-activities')
      .then(response => response.json())
      .then(data => setRecentActivities(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Widget for Number of Students */}
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Total Students</h2>
        <p className="text-4xl">{students}</p>
      </div>

      {/* Widget for Number of Courses */}
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Total Courses</h2>
        <p className="text-4xl">{courses}</p>
      </div>

      {/* Widget for Grades Summary */}
      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Grades Summary</h2>
        <ul className="list-disc pl-5">
          {grades.map((grade, index) => (
            <li key={index} className="text-lg">
              {grade.courseName}: {grade.averageGrade}
            </li>
          ))}
        </ul>
      </div>

      {/* Widget for Recent Activities */}
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Recent Activities</h2>
        <ul className="list-disc pl-5">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-lg">
              {activity.description} - {new Date(activity.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageStudents;