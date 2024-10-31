
'use client';
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import '@/app/ui/globals.css';
import React from 'react'
import SignUpPage from './sign-up/[[...sign-up]]/page';
import SignInPage from '../../sign-in/[[...sign-in]]/page';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <html lang="en">
      <head>
        <title>Reflectio</title>
      </head>
      <body>
        {/* @ts-expect-error Server Component */}
      <ClerkProvider>
        {/* @ts-expect-error Server Component */}
        <SignedIn>
          {children}
        </SignedIn>
        {/* @ts-expect-error Server Component */}
        <SignedOut>
          {pathname.includes('/sign-up') ? <SignUpPage /> : <SignInPage />}
        </SignedOut>
      </ClerkProvider>
          
      
      </body>
      </html>
    </>
  );
}

