import { Row, Col, Card } from 'antd';
import {
    SafetyCertificateOutlined,
    ThunderboltOutlined,
    ToolOutlined,
    GlobalOutlined,
    CalendarOutlined,
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

const historyItems = [
    { year: '2012.05', title: '우텍써키트 설립', desc: '부천 소재 창업' },
    { year: '2016.03', title: '안양 이전', desc: 'SMT 1개 라인 도입' },
    { year: '2017.11', title: '군포 이전', desc: '한림 벤처타운 이전, SMT 라인 추가 도입 (N2 적용)' },
];

function About() {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <span className="section-label">ABOUT US</span>
                        <h2 className="section-title">
                            우텍써키트를<br />
                            <span className="text-gradient">소개합니다</span>
                        </h2>
                        <p className="section-subtitle">
                            SMT 전문 회사로서 고객과 직원으로부터 신뢰를 받을 수 있는 기업으로 성장하고 있습니다.
                            최첨단 설비와 축적된 기술력을 바탕으로 고객의 니즈를 만족시키는 최상의 파트너가 되겠습니다.
                        </p>
                    </div>
                    <div className="about-image-content">
                        <img src={company0} alt="우텍써키트 전경" className="about-main-image" />
                    </div>
                </div>

                <Row gutter={[24, 24]} className="about-cards">
                    {capabilities.map((item, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <Card className="capability-card" hoverable>
                                <div className="card-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.desc}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Company History */}
                <div className="about-history">
                    <h3 className="history-title">
                        <CalendarOutlined className="history-title-icon" />
                        회사 연혁
                    </h3>
                    <div className="history-timeline">
                        {historyItems.map((item, index) => (
                            <div key={index} className="history-item">
                                <div className="history-dot" />
                                <div className="history-year">{item.year}</div>
                                <div className="history-content">
                                    <h4 className="history-item-title">{item.title}</h4>
                                    <p className="history-item-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-gallery">
                    <h3 className="gallery-title">보유 설비 및 전경</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item">
                                <img src={company1} alt="공장 전경" loading="lazy" />
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item">
                                <img src={company2} alt="SMT 설비" loading="lazy" />
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item">
                                <img src={company3} alt="생산 라인" loading="lazy" />
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <div className="gallery-item">
                                <img src={company4} alt="검사 장비" loading="lazy" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default About;
