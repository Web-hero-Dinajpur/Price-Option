import { useState } from "react";
import Link from "../Link/Link";



const NavBar = () => {
    const [icon, setIcon] = useState(false);
    const routs = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/servises', name: 'Servises' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
    ]
    return (
        <div>
            <div className="md:hidden text-2xl" onClick={() => setIcon(!open)}>
                {
                    open === true ?
                       <img src="https://img.icons8.com/?size=50&id=46&format=png" alt="" />:<img src="https://img.icons8.com/?size=50&id=3096&format=png" alt="" />
                }
                
               
            </div>
            <ul className="md:flex">
                {
                    routs.map(rout => <Link
                        className="mr-6"
                        key={rout.id}
                        rout={rout}
                    ></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;