import Image from "next/image"
import Link from "next/link"


const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-slate-200 dark:bg-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row gap-x-8">
            <div className="relative flex-1">
                <Image src='/images/womens-collection.webp' alt="women collection" className="w-full h-[700px] object-cover"  />
                <div className="absolute bottom-8 left-8 bg-white dark:bg-slate-700 bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3">
                        Womens Collection
                    </h2>
                    <Link href="/collections/all?gender=women" className="text-blue-700 hover:text-violet-600 transition-all " >Shop Now</Link>
                </div>
            </div>
            <div className="relative flex-1">
                <Image src='/images/mens-collection.webp' alt="men collection" className="w-full h-[700px] object-cover"  />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        mens Collection
                    </h2>
                    <Link href="/collections/all?gender=men" className="text-gray-900 " >Shop Now</Link>
                </div>
            </div>
             </div>
    </section>
  )
}

export default GenderCollection