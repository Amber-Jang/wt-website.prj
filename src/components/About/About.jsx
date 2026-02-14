import { Row, Col, Card } from 'antd';
import {
    SafetyCertificateOutlined,
    ThunderboltOutlined,
    ToolOutlined,
    GlobalOutlined,
} from '@ant-design/icons';
import './About.css';

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

function About() {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <div className="about-header">
                    <span className="section-label">ABOUT US</span>
                    <h2 className="section-title">
                        우텍써키트를<br />
                        <span className="text-gradient">소개합니다</span>
                    </h2>
                    <p className="section-subtitle">
                        SMT 전문 회사로서 고객과 직원으로부터 신뢰를 받을 수 있는 기업으로 성장하고 있습니다.
                    </p>
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
            </div>
        </section>
    );
}

export default About;
