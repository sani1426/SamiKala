import Link from 'next/link'
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border-t border-t-slate-800 dark:border-t-slate-200 py-12 px-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
        <div>
          <h3 className='text-lg text-slate-800 dark:text-slate-100 mb-4'>
            اطلاع رسانی
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>
            اولین نفری باشید که در مورد محصولات جدید با خبر میشوید.
          </p>
          <p className='font-medium text-sm text-gray-600 dark:text-gray-400 mb-4'>
            ثبت نام کنید و 10 درصد تخفیف بگیرید
          </p>
          <form className='flex'>
            <input
              type='email'
              placeholder='ایمیل خود را وارد کنید'
              className='p-3 w-full text-sm border-t border-l border-b border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
              required
            />
            <button
              type='submit'
              className='px-6 py-3 text-sm rounded-l-md bg-primary  '
            >
              ارسال
            </button>
          </form>
        </div>

     
        <div className=''>
          <h3 className='text-xl  text-gray-800 mb-4 dark:text-gray-300'>
            با سامی کالا
          </h3>
          <ul className='flex flex-col gap-4 text-gray-600 dark:text-gray-400'>
            <li>
              <Link href='/' className=''>فرصت های شغلی</Link>
            </li>
            <li>
              <Link href='/' className=''>فروش در سامی کالا</Link>
            </li>
            <li>
              <Link href='/' className=''>گزارش تخلف</Link>
            </li>
            <li>
              <Link href='/' className=''>اتاق خبر سامی کالا</Link>
            </li>
          </ul>
        </div>

        <div className=''>
          <h3 className='text-xl  text-gray-800 mb-4 dark:text-gray-300'>
            پشتیبانی      </h3>
          <ul className='flex flex-col gap-4 text-gray-600 dark:text-gray-400'>
            <li>
              <Link href='/' className=''>درباره ما</Link>
            </li>
            <li>
              <Link href='/' className=''>تماس با ما</Link>
            </li>
            <li>
              <Link href='/' className=''>حریم خصوصی</Link>
            </li>
            <li>
              <Link href='/' className=''>سوالات متداول</Link>
            </li>
          </ul>
        </div>

        <div>
            <h3 className='text-xl mb-4'>مارا دنبال کنید</h3>

            <div className="flex items-center gap-4 mb-6">
                <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className=''>
                    <TbBrandMeta className='w-6 h-6' />
                </a>
                <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer' className=''>
                    < IoLogoInstagram className='w-6 h-6' />
                </a>
                <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className=''>
                    <RiTwitterXFill className='w-6 h-6' />
                </a>
            </div>
            <p>با ما تماس بگیرید.</p>
            <p>
            <FiPhoneCall className="w-6 h-6" /
            </p>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
