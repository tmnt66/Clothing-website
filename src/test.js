import firebase from 'firebase/concat/app'
import 'firebase/firestore'
import { firestore } from './components/firebase/firebase-utils'

firestore = firebase.firestore();

firebase.collection('Coronav123dev').doc('EysBJVIuVuZOaX0euIUW').collection('CartItems').doc( 'DAqnLFljC5fhQGOwaF37') ;

// OR

firebase.doc('/Coronav123dev/EysBJVIuVuZOaX0euIUW/CartItems/DAqnLFljC5fhQGOwaF37');

firebase.collection('/Coronav123dev/ysBJVIuVuZOaX0euIUW/CartItems');