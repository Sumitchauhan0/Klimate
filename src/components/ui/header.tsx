import { Sun ,Moon} from 'lucide-react';
import { useTheme } from './context/theme-provider';
import { Link } from 'react-router-dom' 
import {CitySearch} from './city-search';
const Header     = () => {

    const{theme,setTheme}=useTheme();
    const isDark = theme === 'dark';
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to={"/"}>
            <img
            src={theme === 'dark' ? '/logo.png' : '/logo2.png'} // Use appropriate logo paths
            alt='Logo'
             className='h-12'/>
            </Link>
        <div className='flex items-center gap-4'>
            <CitySearch />
            {/*Toggle*/}
            <div 
            onClick={()=> setTheme(isDark? 'light' : 'dark')}
            className={`flex items-center justify-center cursor-pointer transition-transform duration-300
                ${isDark ? 'rotate-180' : 'rotate-0'}`}
            >
                {isDark ? <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' /> : <Moon className='h-6 w-6 text-gray-500 rotate-0 transition-all' />}

            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
