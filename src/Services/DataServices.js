import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'
class dataService {
  async create(type, data) {
    try {
      const docRef = await addDoc(collection(db, { type }), {
        data,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}
export default new dataService()
