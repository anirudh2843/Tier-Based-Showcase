import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
