# GarbhSakhi – Next.js Landing (SEO + Firebase + Render)

## Quickstart
```bash
npm i
npm run dev
```

## Env (.env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## Deploy on Render (Node SSR)
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Instance Type: Web Service → Node
- Add the env vars above in **Environment**

> Firestore Security (dev suggestion):
Allow writes from your domain during MVP, and tighten later.
```
// VERY OPEN – lock down before prod
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{docId} {
      allow create: if true;
    }
  }
}
```
