import React from 'react'
import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image src="/assets/icons/loader.svg"
             width={32}
             height={32}
             className="animate-spin"
             alt="loader" />
      Loading...
    </div>
  )
}

export default Loader
