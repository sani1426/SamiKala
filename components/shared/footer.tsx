import NavItem from "./Header/NavItem"





const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border-t border-t-slate-800 dark:border-t-slate-200 py-12 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-slate-800 dark:text-slate-100 mb-4">اطلاع رسانی</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">اولین نفری باشید که در مورد محصولات جدید با خبر میشوید.</p>
                <p className="font-medium text-sm text-gray-600 dark:text-gray-400 mb-4">ثبت نام کنید و 10 درصد تخفیف بگیرید</p>
                <form className="flex">
                    <input type="email" placeholder="ایمیل خود را وارد کنید" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                    <button type="submit" className="px-6 py-3 text-sm rounded-l-md bg-primary  ">ارسال</button>
                </form>
            </div>

            <div>
                <h3 className="text-lg text-gray-800 mb-4 dark:text-gray-300">فروشگاه</h3>
                <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
                    <NavItem />
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer