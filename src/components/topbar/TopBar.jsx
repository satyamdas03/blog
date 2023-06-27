import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem" style={{ textDecoration: "none", color: "inherit" }}>ABOUT</li>
                    <li className="topListItem" style={{ textDecoration: "none", color: "inherit" }}>CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write" style={{ textDecoration: "none", color: "inherit" }}>
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem" style={{ textDecoration: "none", color: "inherit" }}>LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src=" https://img.freepik.com/premium-vector/geek-glasses-cat-working-laptop-tech-office-programmer-animal-mascot-cartoon-vector-illustration_7102-687.jpg?w=2000"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTZT98Wrb63H8BkadsNjeFngpod7072jpdvP7hrZTE3kAZaPTXdnBCzXk_465MdGHSRWNhwm_BU8ZJHcDI&psig=AOvVaw3i3j30PQRJEhKZSUxxbWEZ&ust=1687629185370000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCtweP62f8CFQAAAAAdAAAAABAE