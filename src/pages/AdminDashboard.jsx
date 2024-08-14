/*import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';



const adminLinks = [
  { name: 'Manage Students', path: 'manage-students' },
  { name: 'Manage Teachers', path: 'manage-teachers' },
  { name: 'Manage Classes', path: 'manage-classes' },
  { name: 'Assigned Teachers', path: 'assigned-teachers' },
  { name: 'Reports', path: 'reports' },
];

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={adminLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
*/

// src/pages/AdminDashboard.jsx
import { Link, Routes, Route } from 'react-router-dom';
import ManageStudents from '../components/admin/ManageStudents';
import ManageTeachers from '../components/admin/ManageTeachers';
import ManageClasses from '../components/admin/ManageClasses';
/*import AssignedTeachers from '../components/admin/AssignedTeachers';*/
import Reports from '../components/admin/Reports';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-purple-700 text-white h-screen p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="manage-students" className="hover:text-gray-300">Manage Students</Link>
            </li>
            <li>
              <Link to="manage-teachers" className="hover:text-gray-300">Manage Teachers</Link>
            </li>
            <li>
              <Link to="manage-classes" className="hover:text-gray-300">Manage Classes</Link>
            </li>
            <li>
              <Link to="reports" className="hover:text-gray-300">Reports</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        <Routes>
          <Route path="manage-students" element={<ManageStudents />} />
          <Route path="manage-teachers" element={<ManageTeachers />} />
          <Route path="manage-classes" element={<ManageClasses />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
