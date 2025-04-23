import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <>
  <div className='h-max flex items-center justify-center p-5'>
     <SignIn />
  </div>
  </>
}