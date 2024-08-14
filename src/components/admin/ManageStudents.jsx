import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa'; // Import the icons

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:5555/students');
      const data = await response.json();
      console.log(data); // Check the structure of the fetched data
      setStudents(Array.isArray(data) ? data : []); // Ensure data is an array
    } catch (error) {
      console.error('Error fetching students:', error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: '',
      email: '',
    };
    setStudents([...students, newStudent]);
    setEditingStudent(newStudent);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const handleSaveStudent = (studentId, updatedStudent) => {
    setStudents(
      students.map(student =>
        student.id === studentId ? updatedStudent : student
      )
    );
    setEditingStudent(null);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Students</h1>
      <div className="mb-4">
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Add Student
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
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4 border-r">{student.id}</td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
                    <input
                      type="text"
                      value={editingStudent.name}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, name: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="py-2 px-4 border-r">
                  {editingStudent?.id === student.id ? (
                    <input
                      type="email"
                      value={editingStudent.email}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, email: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingStudent?.id === student.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSaveStudent(student.id, editingStudent)}
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
                        onClick={() => handleEditStudent(student)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
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

export default ManageStudents;
