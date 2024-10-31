"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

{/* Components */ }
import SocialProfiles from '@/components/SocialProfiles';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Project', url: '/project' },
  { name: 'About Me', url: '/about' },
  { name: 'Contact', url: '/contact' }
];

export default function Header() {
  const pathname = usePathname();

  const handleDrawer = () => {
    const drawer = document.getElementById('drawer-navigation');
    if (drawer) {
      drawer.classList.toggle('-translate-y-full');
    }
  }

  return (
    <>
      <nav className="bg-background fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href={"/"}><Image
              src="/logo.png"
              width={30}
              height={30}
              alt="logo"
            /></Link>
            <Link href={"/"}><h1 className='ml-3 font-bold'>DPrasetyo</h1></Link>
          </div>
          <button onClick={handleDrawer} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#f7f7f7" />
            </svg>
          </button>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              {
                navItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.url} className={`block py-2 px-3 bg-transparent md:p-0 hover:opacity-60 ${item.url === pathname ? 'text-primary' : 'text-foreground'}`}>
                        <span className='text-primary'>\/</span> {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>

      <div id="drawer-navigation" className="fixed top-0 left-0 right-0 z-40 h-screen w-full p-4 transition-transform -translate-y-full bg-gray-800 flex flex-col justify-between" aria-labelledby="drawer-navigation-label">
        <div>
          <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">Menu</h5>
          <button onClick={handleDrawer} type="button" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-foreground" >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium text-2xl">
              {
                navItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.url} className={`flex items-center p-2 hover:bg-gray-700 group ${item.url === pathname ? 'text-primary' : 'text-foreground'}`}>
                        <span className="text-primary pr-4">\/</span>{item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div>
          <SocialProfiles exclude={["GitHub"]} />
        </div>
      </div>
    </>
  )
}