import {app, apps, initializeApp, credential} from "firebase-admin";
import serviceAccount from "../../serviceAccountKey.json";

const { cert, refreshToken } = credential

export function getClientApp() {
  if(apps.length) return app()

  return initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
