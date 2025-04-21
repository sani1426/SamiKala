"use client"

import * as React from "react"
import { Moon, Sun , Settings } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaSun } from "react-icons/fa6"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='text-center text-primary' align="center">
        <DropdownMenuItem className="text-center" onClick={() => setTheme("light")}>
     <FaSun className="h-[2rem] w-[2rem] text-2xl" />
    
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center"  onClick={() => setTheme("dark")}>
        <Moon className="h-[2rem] w-[2rem]" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center"   onClick={() => setTheme("system")}>
        <Settings className="h-[2rem] w-[2rem]" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
