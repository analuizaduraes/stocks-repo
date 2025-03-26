"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { BarChart3, Home, LineChart, Menu, PieChart, Settings, X } from "lucide-react"

import { Button } from "@src/components/ui/button"
import { Sheet, SheetContent } from "@src/components/ui/sheet"

interface DashboardProps {
  children: ReactNode
}

export function Dashboard({ children }: DashboardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <LineChart className="h-6 w-6" />
          <span className="text-lg font-semibold tracking-tight">StockTracker</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            Settings
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[240px] flex-col border-r md:flex">
          <nav className="grid gap-2 p-4 text-sm">
            <Link href="/" className="flex items-center gap-3 rounded-md bg-primary px-3 py-2 text-primary-foreground">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <BarChart3 className="h-4 w-4" />
              Performance
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <PieChart className="h-4 w-4" />
              Portfolio
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </aside>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-[240px] p-0">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <LineChart className="h-6 w-6" />
              <span className="text-lg font-semibold tracking-tight">StockTracker</span>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close Menu</span>
              </Button>
            </div>
            <nav className="grid gap-2 p-4 text-sm">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-md bg-primary px-3 py-2 text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                <BarChart3 className="h-4 w-4" />
                Performance
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                <PieChart className="h-4 w-4" />
                Portfolio
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

