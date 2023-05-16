import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">
                    <img src="https://st5.depositphotos.com/3934335/64731/i/450/depositphotos_647319216-stock-photo-a-brave-warrior-engages-in.jpg" alt="Presentation of a dragon and a knight" />
                    My ToDoList Dragons and Knights !
                </Link>
            </h1>
        </header>
    );
}

export default Header;