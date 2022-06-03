import firebase from 'firebase/concat/app'
import 'firebase/firestore'
import { firestore } from './components/firebase/firebase-utils'

firestore = firebase.firestore();

firebase.collection('user').doc('osj').collection('cartItems').doc('dddd')