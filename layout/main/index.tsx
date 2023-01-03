import { Footer, Navbar } from '@comps';
import { FC } from 'react';

interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[]
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}