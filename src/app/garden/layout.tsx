import Navbar from "@/components/Navbar"

import { ReactNode } from 'react';

const GardenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-3xl min-w-0 mx-3 lg:mx-auto mt-7 md:mt-20 lg:mt-32">
      <Navbar />
      {children}
    </div>
  )
}

export default GardenLayout