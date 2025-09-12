"use client";

import { logoutAction } from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bot, Github, LogOut, User, UserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data, status } = useSession();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MyBot</span>
          </div>

          {/* Profile and Actions */}
          <div className="flex items-center space-x-4">
            {status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="rounded-full bg-gray-100 size-8 cursor-pointer hover:bg-gray-200 duration-300 grid place-items-center">
                    <UserIcon className="w-5" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <Link href={`/user/${data?.user?.id}`}>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>

                  <DropdownMenuItem onClick={() => logoutAction()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/account">
                <Button size="sm">Get Started</Button>
              </Link>
            )}
            <div className="rounded-full bg-gray-100 size-8 cursor-pointer hover:bg-gray-200 duration-300 grid place-items-center">
              {" "}
              <Link href="https://github.com/ehmasuk" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
