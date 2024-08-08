import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

const Header = ({ children, className } : HeaderProps ) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/"
            className="md:flex-1">
        <div className="hidden md:flex flex-row items-center">
          <Image src="/assets/icons/logo.png"
                 width={40}
                 height={32}
                 className="hidden md:block"
                 alt="logo" />
          <span className="md:text-2xl font-bold">
            CollabDocs
          </span>
        </div>
        <Image src="/assets/icons/logo-icon.svg"
               alt="Logo with"
               width={32}
               height={32}
               className="mr-2 md:hidden"/>
      </Link>
      {children}
    </div>
  )
}

export default Header
