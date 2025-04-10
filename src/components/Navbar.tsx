"use client"
import Image from 'next/image'
import Link from 'next/link'
// Fixed code block
import { Link as ScrollLink } from 'react-scroll';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from 'react-icons/fa';
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn} = useUser();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/image/logo.png" alt="Logo" width={120} height={120} />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <ScrollLink
                to="garden-photos"
                smooth={true}
                duration={500}
                className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
              >
                Explore
              </ScrollLink>
              <Link href="/plans" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Plans
              </Link>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={1000}
                className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
              >
               Contact us
              </ScrollLink>
            </div>
          </div>

          <div className="hidden sm:flex items-center">
            {isSignedIn ? (
              <Link href="/profile" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
               <UserButton />
              </Link>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium ml-2">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
          <div className='sm:hidden'>
            <Sheet>
              <SheetTrigger>
                <FaBars className="text-black" />
              </SheetTrigger>
              <SheetContent className='bg-amber-100'>
                <SheetHeader>
                  <SheetTitle>
                    <p className='text-yellow-400 font-bold text-xl'>NIDHIVAN</p>
                  </SheetTitle>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Link href="/" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Home
                    </Link>
                    <Link href="/plans" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Plans
                    </Link>
                    <Link href="/contact" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Contact Us
                    </Link>
                    {isSignedIn ? (
                      <Link href="/profile" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Profile
                      </Link>
                    ) : (
                      <>
                        <SignInButton mode="modal">
                          <button className="text-black hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Sign In
                          </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                            Sign Up
                          </button>
                        </SignUpButton>
                      </>
                    )}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

