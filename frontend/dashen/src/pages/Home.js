import { Link } from "react-router-dom";

export default function Home() {
    return <>
        <h1>home page</h1>
        <Link to="/">HOME</Link>
        <Link to="/About">about</Link>
    </>
}