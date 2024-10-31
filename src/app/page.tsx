'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage(){
  
  return ( 
    <RedirectToProfile/>
  );
}

function RedirectToProfile() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const { user } = useUser()
  const username = user?.username
  
  useEffect(() => {
    if (isSignedIn) {
      router.push(`/profile/${username}`);  // Redirect to profile page
    }
  }, [isSignedIn, router]);

  return null; // Render nothing as we're only redirecting
}
 
