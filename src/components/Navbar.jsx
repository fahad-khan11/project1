const Navbar =()=>{
    return (
            <nav className="container">
               <div className="Logo">
               <img src="/images/brand_logo.jpg"alt="Logo"/>
               </div>
               <ul>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
               </ul>
               <button>Login</button>
            </nav>
    );
}

export default Navbar;