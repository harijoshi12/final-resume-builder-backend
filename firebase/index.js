import admin from 'firebase-admin'

import serviceAccount from "../config/serviceAccountKey.json" assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin

// function checkAuth(req, res, next) {
//   if (req.headers.authtoken) {
//     admin.auth().verifyIdToken(req.headers.authtoken)
//       .then(() => {
//         next()
//       }).catch(() => {
//         res.status(403).send('Unauthorized')
//       });
//   } else {
//     res.status(403).send('Unauthorized')
//   }
// }