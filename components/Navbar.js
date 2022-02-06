import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">NEXT TODO</a>
        </Link>
        <Link href="/create">
            <a className="create">Create Todo</a>
        </Link>
    </nav>
)

export default Navbar;