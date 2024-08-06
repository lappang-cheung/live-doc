import Link from "next/link";
import Image from "next/image";

const Header = ({ children } : HeaderProps ) => {
  return (
    <div className="header">
      <Link href="/"
            className="md:flex-1">
        <Image src="/assets/icons/logo.svg"
               width={120}
               height={32}
               className="hidden md:block"
               alt="logo" />
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
