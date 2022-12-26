import { Footer, Navbar } from '@comps';
import { FC } from 'react';
import { JSXElement } from '@babel/types';

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