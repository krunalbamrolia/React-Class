import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { saveEmployee, getAllEmployees, deleteEmployee, updateEmployee } from '../firebase/functions/function';

function EmployeeCRUD() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({ name: '', position: '', department: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const allEmployees = await getAllEmployees();
      setEmployees(allEmployees);
    };

    fetchEmployees();
  }, []);

  const addOrUpdateEmployee = async () => {
    if (isEditing) {
      await updateEmployee(currentEmployee.id, currentEmployee);
      setEmployees(
        employees.map((emp) => (emp.id === currentEmployee.id ? currentEmployee : emp))
      );
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Employee details have been updated.',
      });
      setIsEditing(false);
    } else {
      const newEmployee = { ...currentEmployee, id: `${Date.now()}` };
      await saveEmployee(newEmployee);
      setEmployees([...employees, newEmployee]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'New employee has been added.',
      });
    }

    setCurrentEmployee({ name: '', position: '', department: '' });
  };

  const cancelEditing = () => {
    setCurrentEmployee({ name: '', position: '', department: '' }); 
    setIsEditing(false); 
  };

  const removeEmployee = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    });

    if (result.isConfirmed) {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'The employee has been removed.',
      });
    }
  };

  const startEditing = (employee) => {
    setCurrentEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div className="employee-crud">
      <div className="employee-form">
        <h2>{isEditing ? 'Edit Employee' : 'Add New Employee'}</h2>
        <div className="employee-form-fields">
          <input
            type="text"
            placeholder="Name"
            value={currentEmployee.name}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Position"
            value={currentEmployee.position}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, position: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department"
            value={currentEmployee.department}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, department: e.target.value })}
          />
          <button onClick={addOrUpdateEmployee}>
            {isEditing ? (
              <>
                <i className="fa fa-edit"></i>
                Update
              </>
            ) : (
              <>
                <i className="fa fa-plus"></i>
                Add
              </>
            )}
          </button>

          {isEditing && (
            <button onClick={cancelEditing} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="employee-list">
        <h2>Employees List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>
                  <button
                    onClick={() => startEditing(employee)}
                    className="edit-button"
                  >
                    <i className="fa fa-pencil"></i>
                    Edit
                  </button>
                  <button
                    onClick={() => removeEmployee(employee.id)}
                    className="delete-button"
                  >
                    <i className="fa fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeCRUD;
