import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'

class deleteData {
  async delete(type, id) {
    try {
      await deleteDoc(doc(db, type, id))
      console.log('Document ID ', id, ' is deleted')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}
export default new deleteData()
