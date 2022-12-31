import { db } from "./firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";

export const fetchFromFirestore = async(idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('idCategory', '==', parseInt(idCategory)))
    } else {
        q = query(collection(db, "products"));
    }       
    const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }));
            return dataFromFirestore;
        }

export const fetchOneFromFirestore = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
      } else {
        console.log("No such document!");
      }
}