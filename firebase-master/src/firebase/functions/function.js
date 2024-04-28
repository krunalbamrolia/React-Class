import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "../config";

// export const saveItem = async (data) => {
//   console.log(data);
//   await setDoc(doc(firestore, "test", `${Date.now()}`), data, { merge: true });
// };

// export const getAllData = async () => {
//   const allItems = await getDocs(collection(firestore, "test"));
//   allItems.docs.map((doc) => console.log(doc.data()));
// };



// import { collection, doc, getDocs, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// import { firestore } from "../config";

// // Create or Update a Document
// export const saveItem = async (data) => {
//   await setDoc(doc(firestore, "first-attempt", `${Date.now()}`), data, { merge: true });
// };

// // Get All Documents
// export const getAllData = async () => {
//   const allItems = await getDocs(collection(firestore, "first-attempt"));
//   return allItems.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
// };

// // Update a Specific Document by ID
// export const updateItem = async (id, updatedData) => {
//   const docRef = doc(firestore, "first-attempt", id);
//   await updateDoc(docRef, updatedData);
// };

// // Delete a Specific Document by ID
// export const deleteItem = async (id) => {
//   const docRef = doc(firestore, "first-attempt", id);
//   await deleteDoc(docRef);
// };


export const saveItem = async (data) => {
  try {
    await setDoc(doc(firestore, "first-attempt", `${Date.now()}`), data, { merge: true });
    console.log("Item saved successfully");
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const getAllData = async () => {
  try {
    const allItems = await getDocs(collection(firestore, "first-attempt"));
    return allItems.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  } catch (error) {
    console.error("Error getting all data:", error);
  }
};
