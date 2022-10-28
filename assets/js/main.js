﻿import {
  getFirestore,
  doc,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js'
import app from './firebase.js'
import { updateScore } from './presentation.js'

const db = getFirestore(app)

onSnapshot(doc(db, 'matches', 'br-01'), doc => {
  const { br, other } = doc.data()
  updateScore('br-01', br, other)
})

onSnapshot(doc(db, 'matches', 'br-02'), doc => {
  const { br, other } = doc.data()
  updateScore('br-02', br, other)
})

onSnapshot(doc(db, 'matches', 'br-03'), doc => {
  const { br, other } = doc.data()
  updateScore('br-03', br, other)
})
