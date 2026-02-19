import { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Header.css';
import logoImg from '../../assets/images/logo.png';

const { Header: AntHeader } = Layout;

const navItems = [
    { key: 'about', label: '회사 소개' },
    { key: 'services', label: '사업 영역' },
    { key: 'vision', label: '생산 과정 / 설비' },
    { key: 'contact', label: '가격 정책' },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map((item) => item.key);
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setDrawerOpen(false);
        }
    };

    return (
        <>
            <AntHeader className={`site-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-inner container">
                    <div className="logo" onClick={() => scrollTo('hero')}>
                        <img src={logoImg} alt="Wootec Circuit Logo" className="logo-img" />
                    </div>

                    <nav className="nav-desktop">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                                onClick={() => scrollTo(item.key)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <button className="header-cta" onClick={() => scrollTo('contact')}>
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
                    selectedKeys={[activeSection]}
                    items={navItems.map((item) => ({
                        key: item.key,
                        label: item.label,
                        onClick: () => scrollTo(item.key),
                    }))}
                    className="drawer-menu"
                />
            </Drawer>
        </>
    );
}

export default Header;
