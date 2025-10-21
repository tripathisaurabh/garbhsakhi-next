import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function saveToFirestore(collectionName: string, data: any) {
  try {
    console.log("🧾 Attempting to save to:", collectionName, data);
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("✅ Saved to Firestore:", collectionName);
    return { success: true };
  } catch (error) {
    console.error("❌ Firestore Error:", error);
    return { success: false, error };
  }
}
