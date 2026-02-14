import { Layout } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Footer.css';

const { Footer: AntFooter } = Layout;

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AntFooter className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">Wootec</span>
                            <span className="logo-accent">Circuit</span>
                        </div>
                        <p className="footer-desc">
                            PCB·SMT 생산 전문 기업<br />
                            원스톱 토탈 솔루션
                        </p>
                    </div>

                    <div className="footer-info">
                        <div className="footer-contact-item">
                            <PhoneOutlined />
                            <span>031) 464-9801</span>
                        </div>
                        <div className="footer-contact-item">
                            <MailOutlined />
                            <span>wootecsmt@naver.com</span>
                        </div>
                        <div className="footer-contact-item">
                            <EnvironmentOutlined />
                            <span>경기도 군포시 공단로 284, 6층 606호</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Wootec-Circuit. All rights reserved.</p>
                </div>
            </div>
        </AntFooter>
    );
}

export default Footer;
