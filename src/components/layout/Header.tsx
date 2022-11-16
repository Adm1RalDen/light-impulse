import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Logotype from '~/svg/logo-black.svg';

const links = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-black'>
      <div className='layout flex items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <Logotype className='text-6xl' />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4 text-white'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
