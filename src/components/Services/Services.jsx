import { Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Services.css';
import pcbImg from '../../assets/images/pcb.png';
import smtImg from '../../assets/images/smt.png';
import assyImg from "../../assets/images/ass'y.png";
import detail1 from '../../assets/images/detail1.jpeg';
import detail2 from '../../assets/images/detail2.jpeg';
import detail3 from '../../assets/images/detail3.jpeg';
import detail4 from '../../assets/images/detail4.jpeg';

const services = [
    {
        id: 'pcb',
        title: 'PCB',
        subtitle: 'Printed Circuit Board',
        icon: pcbImg,
        desc: '인쇄회로기판(PCB)은 전자부품을 탑재하고 전기적으로 연결하는 핵심 기판입니다.',
        features: [
            '단면 / 양면 / 다층(Multi-layer) PCB',
            'FR-4, CEM-3 등 다양한 원자재 대응',
            '고밀도 미세회로 패턴 구현',
            '임피던스 제어 기판 설계',
            '시제품부터 양산까지 일괄 대응',
        ],
    },
    {
        id: 'smt',
        title: 'SMT',
        subtitle: 'Surface Mount Technology',
        icon: smtImg,
        desc: '표면실장기술(SMT)은 PCB 위에 전자부품을 정밀하게 실장하는 공정입니다.',
        features: [
            '고속 칩마운터 운용 (N2 적용)',
            '크림솔더 인쇄 (Screen Printer)',
            '리플로우 솔더링 (Reflow Oven)',
            'AOI 검사를 통한 품질 보증',
            '0201 사이즈 초소형 부품 실장 가능',
        ],
    },
    {
        id: 'assy',
        title: "ASS'Y",
        subtitle: 'Assembly & Inspection',
        icon: assyImg,
        desc: "조립(Ass'y)은 수삽 부품 실장, 후공정 조립, 검사까지 완제품을 만드는 최종 단계입니다.",
        features: [
            '수삽(DIP) 부품 실장',
            '웨이브 솔더링 / 선택 납땜',
            '기능 검사 (Function Test)',
            '외관 검사 및 포장 출하',
            'In-Housing 완제품 조립',
        ],
    },
];

function Services() {
    return (
        <section id="services" className="services-section section">
            <div className="container">
                <span className="section-label">WHAT DO WE DO?</span>
                <div className="services-header">
                    <h2 className="services-heading">
                        PCB 제작부터 완제품 조립까지<br />
                        최적의 솔루션을 제공합니다
                    </h2>
                </div>

                {/* Service cards - 3 column, exso-style */}
                <Row gutter={[48, 48]} className="services-cards">
                    {services.map((service) => (
                        <Col xs={24} md={8} key={service.id}>
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <h3 className="service-card-title">{service.title}</h3>
                                <span className="service-card-subtitle">{service.subtitle}</span>
                                <p className="service-card-desc">{service.desc}</p>
                                <ul className="service-card-features">
                                    {service.features.map((feat, i) => (
                                        <li key={i}>
                                            <span className="feat-bullet">*</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Divider + CTA */}
                <div className="services-divider-row">
                    <div className="services-divider-line" />
                    <button
                        className="services-cta"
                        onClick={() => {
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        문의하기
                        <ArrowRightOutlined className="services-cta-icon" />
                    </button>
                </div>

                {/* Detail Gallery */}
                <div className="detail-gallery">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail1} alt="SMT 라인 설비" loading="lazy" />
                                <div className="detail-gallery-overlay"><span>SMT 라인</span></div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail2} alt="마운터 설비" loading="lazy" />
                                <div className="detail-gallery-overlay"><span>고속 마운터</span></div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail3} alt="검사 설비" loading="lazy" />
                                <div className="detail-gallery-overlay"><span>검사 설비</span></div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail4} alt="생산 라인" loading="lazy" />
                                <div className="detail-gallery-overlay"><span>생산 라인</span></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Services;
