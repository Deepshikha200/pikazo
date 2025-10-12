**--landing page header with sidebar--**

**--header.jsx--**
import { Container } from "react-bootstrap"
import './Header.scss'
import logo from '../../../assets/icons/images/logo.png'
import { CloseIcon, MenuIcon, ProfileIcon } from "../../../assets/icons/SvgIcons"
import { useState } from "react"
import { useEffect } from "react"
const Header = () => {
const [active, setActive] = useState(false)

    const navlinks = [
        { label: "Dashboard", path: "/" },
        { label: "Explore", path: "/" },
        { label: "About", path: "/" },
        { label: "Contact us", path: "/" },
    ]
    useEffect(() => {
        if (window.innerWidth <= 992) {
            document.body.style.overflow = active ? "hidden" : "auto";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [active])
    return (
        <header className="header">
            <Container>
                <div className="header_in">
                    <div onClick={() => setActive(!active)} className={`sidebar_overlay ${active ? 'active_overlay' : ""}`}></div>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className={`nav_links ${active ? "active_sidebar" : ""}`}>
                        <div className="sidebar_logo">
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <ul>
                            {
                                navlinks.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.path} onClick={() => setActive(false)}>
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="header_action">
                        <div className="profile">
                            <ProfileIcon />
                        </div>
                        <button className='menu_btn' onClick={() => setActive(!active)}>
                            {
                                !active ? (<MenuIcon />) : (<CloseIcon />)
                            }
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )

}

export default Header

**--header.scss--**
.header {
background: linear-gradient(90deg, #0A1F44 0%, #1C1C1C 50%, #0A1F44 100%);
padding: 2.5rem 0;

    .container {
        max-width: 154rem;
    }

    .header_in {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            a {
                img {}
            }
        }

        .nav_links {
            @media (max-width:991px) {
                position: fixed;
                top: 0;
                left: 0;
                min-height: 100dvh;
                background: #0A1F44;
                padding: 2rem;
                width: 25rem;
                border-right: 1px solid #29ABE233;
                transition: .3s ease-in-out;
                transform: translateX(-100%);
                z-index: 2;
            }

            &.active_sidebar {
                transform: translateX(0%);
            }

            .sidebar_logo {
                @media (min-width:992px) {
                    display: none;
                }
            }

            ul {
                display: flex;
                align-items: center;
                gap: 5rem;

                @media (max-width:991px) {
                    flex-direction: column;
                    align-items: start;
                    gap: 3rem;
                    margin-top: 4rem;
                }

                li {
                    a {
                        font-size: 1.8rem;
                        color: white;
                    }
                }
            }
        }

        .header_action {
            display: flex;
            align-items: center;

            .profile {
                width: 3.2rem;
                height: 3.2rem;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFD700;
            }

            .menu_btn {
                padding: 0;
                border: transparent;
                background: transparent;
                position: relative;
                z-index: 2;
                margin-left: 1.5rem;

                @media (min-width:992px) {
                    display: none;
                }

                svg {
                    fill: white;
                    // height: 2rem;
                    // width: 2rem;
                }
            }
        }

        .sidebar_overlay {
            position: fixed;
            width: 100%;
            height: 100dvh;
            top: 0;
            left: 0;
            z-index: 1;
            visibility: hidden;
            background-color: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(10px);
            opacity: 0;
            transition: .3s ease-in-out;

            @media (min-width:991px) {
                display: none;
            }

            &.active_overlay {
                visibility: visible;
                opacity: 1;
            }
        }
    }

}

**--SvgIcons.jsx--**

export const MenuIcon = () =>
<svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="28"
        height="28"
        viewBox="0 0 464.205 464.205"
        fill="#fff"
    >
<path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" />
</svg>

export const CloseIcon = () =>
<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 329.269 329"
        fill="#fff"
    >
<path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
</svg>

export const ProfileIcon = () =>
<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.662109 14.5C0.662109 13.5311 0.906401 12.6333 1.39498 11.8067C1.8658 11.0067 2.50096 10.3711 3.30046 9.9C4.12661 9.41111 5.02383 9.16667 5.99211 9.16667C6.96039 9.16667 7.85761 9.41111 8.68376 9.9C9.48326 10.3711 10.1184 11.0067 10.5892 11.8067C11.0778 12.6333 11.3221 13.5311 11.3221 14.5H9.98961C9.98961 13.78 9.8075 13.1089 9.44328 12.4867C9.08795 11.8822 8.60825 11.4022 8.00418 11.0467C7.38235 10.6822 6.71166 10.5 5.99211 10.5C5.27256 10.5 4.60187 10.6822 3.98003 11.0467C3.37597 11.4022 2.89627 11.8822 2.54093 12.4867C2.17672 13.1089 1.99461 13.78 1.99461 14.5H0.662109ZM5.99211 8.5C5.26368 8.5 4.59298 8.31778 3.98003 7.95333C3.37597 7.59778 2.89627 7.11778 2.54093 6.51333C2.17672 5.9 1.99461 5.22889 1.99461 4.5C1.99461 3.77111 2.17672 3.1 2.54093 2.48667C2.89627 1.88222 3.37597 1.40222 3.98003 1.04667C4.59298 0.682221 5.26368 0.5 5.99211 0.5C6.72054 0.5 7.39123 0.682221 8.00418 1.04667C8.60825 1.40222 9.08795 1.88222 9.44328 2.48667C9.8075 3.1 9.98961 3.77111 9.98961 4.5C9.98961 5.22889 9.8075 5.9 9.44328 6.51333C9.08795 7.11778 8.60825 7.59778 8.00418 7.95333C7.39123 8.31778 6.72054 8.5 5.99211 8.5ZM5.99211 7.16667C6.47181 7.16667 6.91598 7.04667 7.32461 6.80667C7.73324 6.56667 8.05748 6.24222 8.29733 5.83333C8.53718 5.42444 8.65711 4.98 8.65711 4.5C8.65711 4.02 8.53718 3.57555 8.29733 3.16667C8.05748 2.75778 7.73324 2.43333 7.32461 2.19333C6.91598 1.95333 6.47181 1.83333 5.99211 1.83333C5.51241 1.83333 5.06824 1.95333 4.65961 2.19333C4.25098 2.43333 3.92673 2.75778 3.68688 3.16667C3.44703 3.57555 3.32711 4.02 3.32711 4.5C3.32711 4.98 3.44703 5.42444 3.68688 5.83333C3.92673 6.24222 4.25098 6.56667 4.65961 6.80667C5.06824 7.04667 5.51241 7.16667 5.99211 7.16667Z" fill="#0A1F44" />
</svg>
