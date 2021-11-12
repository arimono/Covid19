import { db } from '@/firebase'
import { doc, updateDoc } from 'firebase/firestore'

class updateData {
  async update(type, id, data) {
    try {
      const patientRef = doc(db, type, id)
      await updateDoc(patientRef, data)
    } catch (e) {
      console.error('Error updating document: ', e)
    }
  }
}
export default new updateData()
