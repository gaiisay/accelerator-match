import Head from "next/head";
import Link from "next/link";
import Brand from "../../components/ui/Brand";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Forgot Password - Split</title>
      </Head>

      <div className='flex flex-col items-center justify-center w-full h-screen px-4'>
        <div className='w-full max-w-sm text-gray-600'>
          <div className='text-center'>
            <Brand className='mx-auto' />
            <div className='mt-5 space-y-2'>
              <h1 className='text-2xl font-bold text-gray-800 sm:text-3xl'>
                Reset your password
              </h1>
              <p>
                Enter your email and we'll send you a link to reset your
                password.
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <Input
                type='email'
                required
                className='w-full mt-3 focus:border-blue-600'
              />
            </div>
            <Button
              type='submit'
              className='w-full text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring'>
              Reset your password
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
