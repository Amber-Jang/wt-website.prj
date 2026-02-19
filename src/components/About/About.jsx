import { Row, Col } from 'antd';
import {
    ToolOutlined,
    GlobalOutlined,
    ThunderboltOutlined,
    SafetyCertificateOutlined,
} from '@ant-design/icons';
import './About.css';
import company0 from '../../assets/images/company0.png';
import company1 from '../../assets/images/company1.jpeg';
import company2 from '../../assets/images/company2.png';
import company3 from '../../assets/images/company3.png';
import company4 from '../../assets/images/company4.png';

const capabilities = [
    {
        icon: <ToolOutlined />,
        title: '최첨단 제조설비',
        desc: '제조/설비 투자로 고효율 및 고품질의 제품 생산을 실현합니다.',
    },
    {
        icon: <GlobalOutlined />,
        title: '전략적 기술 제휴',
        desc: '전략적 기술 및 사업 제휴로 사업 영역을 지속적으로 확대합니다.',
    },
    {
        icon: <ThunderboltOutlined />,
        title: '매출 극대화',
        desc: '다방면 영업 전략에 따른 매출 극대화를 추구합니다.',
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: '품질 보증',
        desc: '항상 최상의 품질과 서비스를 약속하며, 고객 신뢰를 최우선으로 합니다.',
    },
];

const stats = [
    { number: '13+', label: '년 업력' },
    { number: '2', label: 'SMT 라인' },
    { number: 'N2', label: '적용 설비' },
];

function About() {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <span className="section-label">ABOUT US</span>
                <div className="about-header">
                    <h2 className="about-heading">
                        고객과 직원으로부터 신뢰를 받는<br />
                        기업으로 성장합니다
                    </h2>
                </div>

                <Row gutter={[48, 48]} className="about-cards">
                    {capabilities.map((item, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <div className="capability-card">
                                <div className="card-icon">{item.icon}</div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="about-divider" />

                <div className="about-intro">
                    <div className="about-intro-image">
                        <img src={company0} alt="우텍써키트 전경" />
                        <div className="about-intro-overlay">
                            <span className="about-overlay-label">OUR VISION</span>
                            <p className="about-intro-overlay-text">
                                내 제품을 만든다는 생각으로<br />
                                생산 파트너가 되어드리겠습니다.
                            </p>
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="about-stat-item">
                                <span className="about-stat-number">{stat.number}</span>
                                <span className="about-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-history">
                    <h3 className="about-history-title">HISTORY</h3>
                    <div className="history-list">
                        <div className="history-row">
                            <span className="history-year">2012.05</span>
                            <span className="history-desc">우텍써키트 설립 (부천)</span>
                        </div>
                        <div className="history-row">
                            <span className="history-year">2016.03</span>
                            <span className="history-desc">안양 이전, SMT 1개 라인 도입</span>
                        </div>
                        <div className="history-row">
                            <span className="history-year">2017.11</span>
                            <span className="history-desc">군포 한림 벤처타운 이전, SMT 라인 추가 도입 (N2 적용)</span>
                        </div>
                    </div>
                </div>

                <div className="about-gallery">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item"><img src={company1} alt="공장 전경" loading="lazy" /></div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item"><img src={company2} alt="SMT 설비" loading="lazy" /></div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item"><img src={company3} alt="생산 라인" loading="lazy" /></div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item"><img src={company4} alt="검사 장비" loading="lazy" /></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default About;
