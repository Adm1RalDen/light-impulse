import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({
  children,
  isRenderHeader = true,
}: {
  children: React.ReactNode;
  isRenderHeader?: boolean;
}) {
  // Put Header or Footer Here
  return (
    <>
      {isRenderHeader && <Header />}
      {children}
    </>
  );
}
