import Image from "next/image"
import Link from "next/link"


const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-slate-200 dark:bg-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row gap-x-8">
            <div className="relative flex-1 rounded-lg">
                <Image src='/images/womens-collection.webp' alt="women collection" className="w-full h-[500px] object-cover hover:opacity-0 transition-all duration-500"  />
                <Image src='/images/mens-collection.webp' alt="women collection" className="absolute top-0 w-full h-[500px] object-cover opacity-0 hover:opacity-[1] transition-all duration-500"  />
                <div className="absolute bottom-8 left-8 bg-white dark:bg-slate-700 bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3">
                        Womens Collection
                    </h2>
                    <Link href="/collections/all?gender=women" className="text-blue-700 hover:text-violet-600 transition-all " >Shop Now</Link>
                </div>
            </div>
            <div className="relative flex-1 rounded-lg">
       
                <Image src='/images/mens-collection.webp' alt="men collection" className="w-full h-[500px] object-cover hover:opacity-0 transition-all duration-500"  />
                <Image src='/images/womens-collection.webp' alt="women collection" className="absolute top-0 w-full h-[500px] object-cover opacity-0 hover:opacity-[1] transition-all duration-500"  />
                <div className="absolute bottom-8 left-8 bg-white dark:bg-slate-500 bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3">
                        mens Collection
                    </h2>
                    <Link href="/collections/all?gender=men" className="text-blue-700 hover:text-violet-600 transition-all " >Shop Now</Link>
                </div>
            </div>
       
             </div>
    </section>
  )
}

export default GenderCollection