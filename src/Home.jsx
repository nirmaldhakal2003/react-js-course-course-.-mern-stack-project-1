import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <>
        <nav>
            <div className="logo">
                <Link to="#">MyLogo</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </nav>
        
        <section className="content">
            <h1>I am Nirmal Dhakal</h1>
            <h1>Welcome to My Website</h1>
            <p>This is a simple webpage with a navigation bar and some content. Feel free to explore the links above.</p>
        </section>
        </>
    )
}

export default Home
