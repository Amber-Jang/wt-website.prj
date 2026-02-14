import { Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
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
        desc: '인쇄회로기판(PCB)은 전자부품을 탑재하고 전기적으로 연결하는 핵심 기판입니다. 우텍써키트는 단면, 양면, 다층 기판은 물론 특수 PCB까지 고객의 요구에 맞춘 다양한 PCB를 제작합니다.',
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
        desc: '표면실장기술(SMT)은 PCB 위에 전자부품을 정밀하게 실장하는 공정입니다. 최신 고속 마운터와 리플로우 설비를 갖추고, 소량 다품종부터 대량 양산까지 유연하게 대응합니다.',
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
        desc: "조립(Ass'y)은 SMT 공정 이후 수삽 부품 실장, 후공정 조립, 검사까지 완제품을 만드는 최종 단계입니다. In-Housing 방식으로 납기 단축과 품질 일관성을 확보합니다.",
        features: [
            '수삽(DIP) 부품 실장',
            '웨이브 솔더링 / 선택 납땜',
            '기능 검사 (Function Test)',
            '외관 검사 및 포장 출하',
            'In-Housing 완제품 조립',
        ],
    },
];

const processSteps = [
    { step: '01', title: '설계 검토', desc: '고객 도면 및 Gerber 파일 검토' },
    { step: '02', title: 'PCB 제작', desc: '기판 제작 및 품질 검사' },
    { step: '03', title: 'SMT 실장', desc: '부품 실장 및 솔더링' },
    { step: '04', title: '검사', desc: 'AOI / 기능검사 / 외관검사' },
    { step: '05', title: '조립 출하', desc: '완제품 조립 및 포장 출하' },
];

function Services() {
    return (
        <section id="services" className="services-section section">
            <div className="container">
                <div className="services-header">
                    <span className="section-label">SERVICES</span>
                    <h2 className="section-title">
                        <span className="text-gradient">사업 영역</span>
                    </h2>
                    <p className="section-subtitle">
                        PCB 제작부터 SMT 실장, 완제품 조립까지<br />
                        원스톱 토탈 솔루션을 제공합니다.
                    </p>
                </div>

                {/* Service Detail Cards */}
                <div className="services-list">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
                        >
                            <div className="service-detail-img">
                                <img src={service.icon} alt={service.title} />
                                <div className="service-detail-badge">{service.title}</div>
                            </div>
                            <div className="service-detail-content">
                                <div className="service-detail-label">{service.subtitle}</div>
                                <h3 className="service-detail-title">{service.title}</h3>
                                <p className="service-detail-desc">{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((feat, i) => (
                                        <li key={i}>
                                            <CheckCircleOutlined className="feature-icon" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Flow */}
                <div className="process-section">
                    <h3 className="process-title">PRODUCTION PROCESS</h3>
                    <p className="process-subtitle">체계적인 생산 공정으로 최상의 품질을 보장합니다</p>
                    <div className="process-flow">
                        {processSteps.map((item, index) => (
                            <div key={index} className="process-step">
                                <div className="process-step-number">{item.step}</div>
                                <h4 className="process-step-title">{item.title}</h4>
                                <p className="process-step-desc">{item.desc}</p>
                                {index < processSteps.length - 1 && (
                                    <div className="process-arrow" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detail Gallery */}
                <div className="detail-gallery">
                    <h3 className="detail-gallery-title">설비 상세</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail1} alt="SMT 라인 설비" loading="lazy" />
                                <div className="detail-gallery-overlay">
                                    <span>SMT 라인</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail2} alt="마운터 설비" loading="lazy" />
                                <div className="detail-gallery-overlay">
                                    <span>고속 마운터</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail3} alt="검사 설비" loading="lazy" />
                                <div className="detail-gallery-overlay">
                                    <span>검사 설비</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className="detail-gallery-item">
                                <img src={detail4} alt="생산 라인" loading="lazy" />
                                <div className="detail-gallery-overlay">
                                    <span>생산 라인</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Services;
