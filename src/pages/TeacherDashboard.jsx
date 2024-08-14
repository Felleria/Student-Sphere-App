
/*import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const teacherLinks = [
  { name: 'Manage Grades', path: 'manage-grades' },
  { name: 'Manage Attendance', path: 'manage-attendance' },
  { name: 'Manage Courses', path: 'manage-courses' },
];

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={teacherLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboard;
*/
// src/pages/TeacherDashboard.jsx
import { Link, Routes, Route } from 'react-router-dom';
import ManageGrades from '../components/teacher/ManageGrades';
import ManageAttendance from '../components/teacher/ManageAttendance';
import ManageCourses from '../components/teacher/ManageCourses';

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-purple-700 text-white h-screen p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="manage-grades" className="hover:text-gray-300">Manage Grades</Link>
            </li>
            <li>
              <Link to="manage-attendance" className="hover:text-gray-300">Manage Attendance</Link>
            </li>
            <li>
              <Link to="manage-courses" className="hover:text-gray-300">Manage Courses</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        <Routes>
          <Route path="manage-grades" element={<ManageGrades />} />
          <Route path="manage-attendance" element={<ManageAttendance />} />
          <Route path="manage-courses" element={<ManageCourses />} />
        </Routes>
      </main>
    </div>
  );
};

export default TeacherDashboard;
