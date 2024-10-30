'use client';
import '@/app/ui/globals.css';
import React, { useEffect } from 'react'
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/nextjs';

import SignInPage from './sign-in/[[...sign-in]]/page';
import { useRouter } from 'next/navigation';

 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ClerkProvider>
        <html lang="en">
          <head>
            <title>Reflectio</title>
          </head>
          <body>
            {/* @ts-expect-error Server Component */}
            <SignedIn><RedirectToProfile />{children}</SignedIn>
            {/* @ts-expect-error Server Component */}
            <SignedOut>
              <SignInPage/>
            </SignedOut>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
  
}
function RedirectToProfile() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/profile/home');  // Redirect to profile page
    }
  }, [isSignedIn, router]);

  return null; // Render nothing as we're only redirecting
}