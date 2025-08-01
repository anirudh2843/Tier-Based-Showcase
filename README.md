# Psypher AI Events 

A tier-based event management platform built with **Next.js**, **Clerk Authentication**, and **Supabase** for event storage.  
Users can sign in, view events according to their membership tier (Free, Silver, Gold, Platinum), and simulate tier upgrades for demo purposes.

---

##  Tech Stack
- **Frontend:** Next.js 14 (App Router) + Tailwind CSS  
- **Authentication:** Clerk  
- **Database:** Supabase (PostgreSQL)  
- **Deployment:** Vercel  

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/anirudh2843/Tier-Based-Showcase.git 
cd psypher-ai-events


2️⃣ Install Dependencies
npm install


3️⃣ Set Up Environment Variables
Create a .env.local file in the root folder and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

4️⃣ Run Locally
npm run dev

🔑 Demo User Credentials

You can use the following demo credentials (simulate tier upgrades using the in-app "Upgrade Tier" buttons):

Tier	Email	Password
Free : freeuser@gmail.com	FreeUser123
Silver :	silveruser@gmail.com	SilverUser123
Gold :	golduser@gmail.com	GoldUser123
Platinum :	platinumuser@gmail.com	PlatinumUser123

🌐 Live Demo
🔗 Live Deployment (Vercel):  https://tier-based-showcase.vercel.app/

🔗 GitHub Repository: https://github.com/anirudh2843/Tier-Based-Showcase.git

✨ Features
✅ User authentication with Clerk
✅ Tier-based event filtering (Free, Silver, Gold, Platinum)
✅ Supabase for event storage & real-time updates
✅ Simulated tier upgrade buttons (for demo)
✅ Responsive UI with Tailwind CSS and animations


🖼️ Screenshots

<img width="1888" height="824" alt="image" src="https://github.com/user-attachments/assets/2a428e51-8d7b-4010-9876-1b05495b22ac" />
<img width="1878" height="862" alt="image" src="https://github.com/user-attachments/assets/e98f245b-b12a-41f1-83f6-3d4f421ea9a3" />
<img width="1532" height="864" alt="image" src="https://github.com/user-attachments/assets/917fd6e6-4d1c-4f27-899f-32612f12b63e" />
<img width="1690" height="645" alt="image" src="https://github.com/user-attachments/assets/b6b3fd4f-8a96-40ff-9575-9c4a1185e8ab" />



