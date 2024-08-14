import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa'; // Import the icons

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/teachers');
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTeacher = () => {
    const newTeacher = {
      id: Date.now(),
      name: '',
      subject: '',
      email: '',
    };
    setTeachers([...teachers, newTeacher]);
    setEditingTeacher(newTeacher);
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
  };

  const handleDeleteTeacher = (teacherId) => {
    setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
  };

  const handleSaveTeacher = (teacherId, updatedTeacher) => {
    setTeachers(
      teachers.map(teacher =>
        teacher.id === teacherId ? updatedTeacher : teacher
      )
    );
    setEditingTeacher(null);
  };

  const handleCancelEdit = () => {
    setEditingTeacher(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Teachers</h1>
      <div className="mb-4">
        <button
          onClick={handleAddTeacher}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Add Teacher
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <TailSpin color="blue" radius="8px" width={50} height={50} />
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher.id} className="border-t">
                <td className="py-2 px-4 border-r">{teacher.id}</td>
                <td className="py-2 px-4 border-r">
                  {editingTeacher?.id === teacher.id ? (
                    <input
                      type="text"
                      value={editingTeacher.name}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, name: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    teacher.name
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingTeacher?.id === teacher.id ? (
                    <input
                      type="text"
                      value={editingTeacher.subject}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, subject: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    teacher.subject
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingTeacher?.id === teacher.id ? (
                    <input
                      type="email"
                      value={editingTeacher.email}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, email: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    teacher.email
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingTeacher?.id === teacher.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSaveTeacher(teacher.id, editingTeacher)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditTeacher(teacher)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageTeachers;
