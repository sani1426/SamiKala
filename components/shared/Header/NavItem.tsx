"use client"

import { nav_link } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem = () => {

    const pathname = usePathname()
  return (
    <>
      {nav_link.map((link) => {
            return (
              <Link
                key={link.id}
                className={`${pathname === link.href ? 'bg-primary text-slate-200' :''} text-sm rounded-xl text-gray-700 hover:bg-primary px-4 py-2 dark:text-slate-200 transition-all duration-500`}
                href={link.href}
              >
                {link.label}
              </Link>
            )
          })}
    </>
  )
}

export default NavItem