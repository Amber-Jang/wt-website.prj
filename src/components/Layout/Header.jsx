import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Header.css';
import logoImg from '../../assets/images/logo.png';

const { Header: AntHeader } = Layout;

const navItems = [
    { key: '/about', label: '회사 소개' },
    { key: '/services', label: '사업 영역' },
    { key: '/vision', label: '생산 과정 / 설비' },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactClick = () => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        setDrawerOpen(false);
    };

    return (
        <>
            <AntHeader className={`site-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-inner container">
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="Wootec Circuit Logo" className="logo-img" />
                    </Link>

                    <nav className="nav-desktop">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                to={item.key}
                                className={`nav-link ${location.pathname === item.key ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <button className="header-cta" onClick={handleContactClick}>
                        견적 문의하기
                    </button>

                    <Button
                        className="menu-toggle"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerOpen(true)}
                    />
                </div>
            </AntHeader>

            <Drawer
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                width={280}
                className="mobile-drawer"
                closeIcon={<CloseOutlined />}
            >
                <div className="drawer-logo">
                    <span className="logo-text">Wootec</span>
                    <span className="logo-accent">Circuit</span>
                </div>
                <Menu
                    mode="vertical"
                    selectedKeys={[location.pathname]}
                    items={navItems.map((item) => ({
                        key: item.key,
                        label: item.label,
                        onClick: () => { navigate(item.key); setDrawerOpen(false); },
                    }))}
                    className="drawer-menu"
                />
            </Drawer>
        </>
    );
}

export default Header;
