import { collection, doc, getDocs, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../config"; 

//set document in the database
export const saveEmployee = async (employee) => {
  await setDoc(doc(firestore, "employees", `${Date.now()}`), employee, { merge: true });
};

// Get all employees 
export const getAllEmployees = async () => {
  const employeeCollection = await getDocs(collection(firestore, "employees"));
  return employeeCollection.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Update a specific employee by ID
export const updateEmployee = async (id, updatedEmployee) => {
  const docRef = doc(firestore, "employees", id);
  await updateDoc(docRef, updatedEmployee);
};

// Delete a specific employee by ID
export const deleteEmployee = async (id) => {
  const docRef = doc(firestore, "employees", id);
  await deleteDoc(docRef);
};
