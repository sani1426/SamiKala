import { Button } from "../ui/button"




const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border-t border-t-slate-800 dark:border-t-slate-800 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-slate-800 dark:text-slate-100 mb-4">اطلاع رسانی</h3>
                <p className="text-gray-500 dark:text-gray-200 mb-4">اولین نفری باشید که در مورد محصولات جدید با خبر میشوید.</p>
                <p>ثبت نام کنید و 10 درصد تخفیف بگیرید</p>
                <form className="flex">
                    <input type="email" placeholder="ایمیل خود را وارد کنید" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 dark:border-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                    <Button type="submit" className="px-6 py-3 text-sm rounded-l-md ">ارسال</Button>
                </form>
            </div>

        </div>
    </footer>
  )
}

export default Footer