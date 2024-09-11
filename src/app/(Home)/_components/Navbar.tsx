"use client"
import * as React from "react"
import Link from "next/link"
import { Menu, PhoneCall, } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem,NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeSwitch } from "@/components/ui/ThemeSwitch"
import Image from "next/image"
import SearchBar from "./SearchBar"

const services = [
  {
    title: "Online Class",
    href: "/services/web-development",
    description: "Create stunning and functional websites tailored to your needs.",
  },
  {
    title: "Online Exam Help",
    href: "/services/mobile-app-development",
    description: "Build powerful mobile applications for iOS and Android platforms.",
  },
  {
    title: "Online Homework",
    href: "/services/ui-ux-design",
    description: "Design intuitive and visually appealing user interfaces and experiences.",
  },
  {
    title: "Essay Writing Services",
    href: "/services/ui-ux-design",
    description: "Design intuitive and visually appealing user interfaces and experiences.",
  },
  {
    title: "Assignment Help",
    href: "/services/ui-ux-design",
    description: "Design intuitive and visually appealing user interfaces and experiences.",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed z-50  w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-center h-14 items-center">
        <div className="md:flex mr-4 hidden  ">
          <Link href="/" className=" mr-6 flex  items-center space-x-2">
            <span className="hidden font-bold lg:inline-block">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</span>
            <Image className="lg:hidden inline-block" src={'/imgs/scholarly-help-logo.png'} width={50} height={50} alt="logo"></Image>
          </Link>
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuItem >
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="hover:text-blue-600">Home</div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger><Link href='/Service' className="hover:text-blue-600">Services</Link></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] hover:text-blue-700">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="hover:text-blue-600">Contact Us</div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="hover:text-blue-600">About Us</div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/Reviews" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="hover:text-blue-600">Reviews</div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="flex items-center ">
                   <PhoneCall className="stroke-blue-500 fill-blue-500 mr-2"/> 1-716-708-1869 </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <ThemeSwitch/>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center font-bold sm:hidden ">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className=" ml-auto px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5  " />
              <span className="sr-only">Toggle Menu </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileLink href="/" className="flex items-center" onOpenChange={setIsOpen}>
              <span className="font-bold">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</span>
            </MobileLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-3">
              <div className="flex flex-col space-y-3 overflow-scroll ">
                <MobileLink href="/" onOpenChange={setIsOpen}>
                  Home
                </MobileLink>
                <MobileLink href="/Service"  onOpenChange={setIsOpen}>
                 Service
                </MobileLink>
                <MobileLink href="/about" onOpenChange={setIsOpen}>
                  About
                </MobileLink>
                <MobileLink href="/contact" onOpenChange={setIsOpen}>
                  Contact
                </MobileLink>
                <MobileLink href="/Reviews" onOpenChange={setIsOpen}>
                  Reviews
                </MobileLink>
                <MobileLink href="#" >
                  <ThemeSwitch/>
                </MobileLink>
                <MobileLink href="#" >
                  <SearchBar/>
                </MobileLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange?: (open: any) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}