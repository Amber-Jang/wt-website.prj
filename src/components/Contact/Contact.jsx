import { Row, Col, Card } from 'antd';
import {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
    PrinterOutlined,
} from '@ant-design/icons';
import './Contact.css';

const contactInfo = [
    {
        icon: <PhoneOutlined />,
        label: 'TEL',
        value: '031) 464-9801',
        href: 'tel:031-464-9801',
    },
    {
        icon: <PrinterOutlined />,
        label: 'FAX',
        value: '031) 464-9802',
        href: null,
    },
    {
        icon: <MailOutlined />,
        label: 'EMAIL',
        value: 'wootecsmt@naver.com',
        href: 'mailto:wootecsmt@naver.com',
    },
    {
        icon: <EnvironmentOutlined />,
        label: '주소',
        value: '경기도 군포시 공단로 284, 6층 606호',
        href: 'https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EA%B3%B5%EB%8B%A8%EB%A1%9C%20284',
    },
];

function Contact() {
    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <div className="contact-header">
                    <span className="section-label">CONTACT</span>
                    <h2 className="section-title">
                        <span className="text-gradient">연락처</span>
                    </h2>
                    <p className="section-subtitle">
                        우텍써키트에 문의사항이 있으시면 아래 연락처로 연락주세요.
                    </p>
                </div>

                <Row gutter={[24, 24]} className="contact-grid">
                    {contactInfo.map((item, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <Card className="contact-card" hoverable>
                                <div className="contact-icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="contact-label">{item.label}</div>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="contact-value contact-link"
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <div className="contact-value">{item.value}</div>
                                )}
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Map placeholder */}
                <div className="map-container">
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.5!2d126.935!3d37.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rK966-E64-EIOq1sO2PrOyLnCDqs7Xri6jroZwgMjg0!5e0!3m2!1sko!2skr!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="우텍써키트 위치"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
