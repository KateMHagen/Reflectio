'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage(){
  const router = useRouter()
  return ( 
    <RedirectToProfile/>
  );
}

function RedirectToProfile() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/profile');  // Redirect to profile page
    }
  }, [isSignedIn, router]);

  return null; // Render nothing as we're only redirecting
}
 
