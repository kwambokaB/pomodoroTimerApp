import * as React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='md-w-20 sticky top-0 z-50'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='flex flex-row items-center font-bold hover:text-gray-600'>
          <AiFillCheckCircle color='#fff' size={23} />
          <p className='px-2 text-xl text-white'>Pomofocus</p>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            <li>
              <Button variant='light-transparent' className='hover:text-gray-600'>
                <div className='flex flex-row items-center justify-center text-white'>
                  <BiBarChartSquare color='#fff' />
                  Report
                </div>
              </Button>
            </li>
            <li>
              <Button variant='light-transparent' className='hover:text-gray-600'>
                <div className='flex flex-row items-center justify-center text-white'>
                  <IoMdSettings color='#fff' />
                  Settings
                </div>
              </Button>
            </li>
            <li>
              <Button variant='light-transparent' className='hover:text-gray-600'>
                <div className='flex flex-row items-center justify-center text-white'>
                  <FaUserCircle color='#fff' />
                  Login
                </div>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
