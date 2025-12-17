import { Link,Outlet } from "react-router-dom";


export default function Layout() {
    return <>
    <ul>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='about'>ABOUT</Link></li>
      <li><Link to='products'>products</Link></li>

    </ul>
    <Outlet/>
    </>
}
