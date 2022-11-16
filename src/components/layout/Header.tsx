import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logotype from '~/svg/logo-black.svg';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-black'>
      <div className='layout flex items-center justify-between'>
        <UnstyledLink
          href='/'
          className='flex items-center gap-3 text-lg font-bold text-yellow-300'
        >
          <Logotype className='text-6xl' />
          Light Impulse
        </UnstyledLink>
        <ArrowLink href='#' className='h-8 text-sm text-yellow-300'>
          Estimate Your Project
        </ArrowLink>
      </div>
    </header>
  );
}
