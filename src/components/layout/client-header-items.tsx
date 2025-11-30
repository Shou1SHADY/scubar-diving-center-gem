
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

export default function ClientHeaderItems() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Button asChild variant="ghost" className="hidden sm:inline-flex">
      <Link href={`tel:${siteConfig.contact.phone.replace(/\\D/g, '')}`}>
        {siteConfig.contact.phone}
      </Link>
    </Button>
  );
}
