//import admin from 'firebase-admin';
//import { config } from 'firebase-functions';

// initialise app
//admin.initializeApp(config().firebase);

// handle incoming webhook
export default (event, context) => {
  const resource = context.resource;
  // log out the resource string that triggered the function
  console.log(`Function triggered by change to: ${resource}`);
  // now log the full event object
  console.log(JSON.stringify(event));

  console.log(context)
  console.log(context.params)
        console.log(context.params.timestamp)

console.log(process.env.TIME)

const target = process.env.TIME
const now = context.params.timestamp

if (now > target) {
        console.log('target passed')
} else {
        console.log('target not reached')
}






  /*const db = admin.firestore();
  const doc = db.collection('time').doc('a');

  doc.get()
    .then((existing) => {
      // check if we've already handled a message with this id - ignore resends
      if (existing.exists) {
        return 'Message already handled. Nothing to do.';
      }

      // log the message
      return doc.set({});
    }).catch(err => `Error getting accessing database. ${err}`);*/
};
