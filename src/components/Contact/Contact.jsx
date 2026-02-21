import {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
    PrinterOutlined,
} from '@ant-design/icons';
import './Contact.css';

const contactInfo = [
    { icon: <PhoneOutlined />, label: 'TEL', value: '031) 464-9801', href: 'tel:031-464-9801' },
    { icon: <PrinterOutlined />, label: 'FAX', value: '031) 464-9802', href: null },
    { icon: <MailOutlined />, label: 'EMAIL', value: 'wootecsmt@naver.com', href: 'mailto:wootecsmt@naver.com' },
    { icon: <EnvironmentOutlined />, label: 'ADDRESS', value: '경기도 군포시 공단로 284, 6층 606호', href: 'https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EA%B3%B5%EB%8B%A8%EB%A1%9C%20284' },
];

function Contact() {
    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <span className="section-label">CONTACT</span>
                <h2 className="contact-heading">
                    문의사항이 있으시면 연락주세요.
                </h2>
                <p className="contact-sub">
                    프로젝트 상담부터 양산까지<br />
                    신속하게 대응해드립니다.
                </p>

                <div className="contact-grid">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="contact-item">
                            <div className="contact-item-icon">{item.icon}</div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">{item.label}</span>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="contact-item-value"
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="contact-item-value">{item.value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="map-container">
                    <iframe
                        src="https://maps.google.com/maps?q=Gyeonggi-do,+Gunpo-si,+Geumjeong-dong,+689-6&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '16px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="우텍써키트 위치"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;
