'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { notFound } from '@/assets';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <Image
        src={notFound} 
        alt="Not Found"
        width={400}
        height={400}
        className="animate-fade-in"
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page not found</h1>
      <p className="text-gray-500 text-sm max-w-md">
        We can&lsquo;t seem to find the page you&lsquo;re looking for. It might have been removed or doesn&lsquo;t exist anymore.
      </p>

      <Button
        onClick={() => router.back()}
        className="mt-4 px-6 py-3 rounded-full bg-[#365553] hover:bg-[#2b3f3b] text-white text-sm flex items-center gap-2"
      >
        <ArrowLeftCircle size={18} />
        Go back home
      </Button>
    </div>
  );
};

export default NotFoundPage;
