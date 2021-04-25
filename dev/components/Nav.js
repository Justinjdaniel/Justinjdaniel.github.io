import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { CgMenu, CgClose } from 'react-icons/cg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CgClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <CgMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="./CIRLCE_LOGO.svg"
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="./CIRLCE_LOGO.svg"
                    alt="Logo"
                  />
                </div>
                <div className="text-white uppercase py-2 ml-2 text-lg font-bold hidden lg:block hover:text-purple-600">
                  Justin J Daniel
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-3 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-3"
                  href="https://github.com/justinjdaniel"
                >
                  <span className="sr-only">Github Link</span>
                  <FaGithub className="h-6 w-6" aria-hidden="true" />
                </a>
                <a
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  href="https://www.linkedin.com/in/justin-j-daniel/"
                >
                  <span className="sr-only">Github Link</span>
                  <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
