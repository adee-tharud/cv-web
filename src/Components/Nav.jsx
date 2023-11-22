import { menu } from "../Assests/icons"
import { navLinks } from "../Constants"

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between  max-container">
            <a href="/">
               <span className="text-4xl font-bold text-slate-50">Logo</span>
            </a>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                 {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                    href={item.href}
                    className="font-bold leading-normal text-lg text-slate-50"
                    >
                      {item.label}
                    </a>
                  </li>
                 ))}
            </ul>
    
            <div className="hidden max-lg:block">
              <img
                src={menu}
              
                alt="humburger"
                width={25}
                height={25}
              />
            </div>
        </nav>
       </header>
    )
}

export default Nav;