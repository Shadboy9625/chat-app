import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../utils/firebase';
import { collection, orderBy, query } from 'firebase/firestore';

export default function useChats(user) {
  const [snapshot] =  useCollection(
    query(collection(db, `users/${user.uid}/chats`), orderBy('timestamp', 'desc'))
  );
  
  const chats = snapshot?.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }));

  return chats;
}