import { Row, Col } from 'antd';
import {
    RocketOutlined,
    TeamOutlined,
    TrophyOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import './Vision.css';

const processSteps = [
    { step: '01', title: '설계 검토', desc: 'Gerber 파일 검토' },
    { step: '02', title: 'PCB 제작', desc: '기판 제작 및 검사' },
    { step: '03', title: 'SMT 실장', desc: '부품 실장/솔더링' },
    { step: '04', title: '검사', desc: 'AOI / 기능검사' },
    { step: '05', title: '조립 출하', desc: '완제품 포장 출하' },
];

const visionItems = [
    {
        icon: <RocketOutlined />,
        number: '01',
        title: '고효율 생산',
        desc: '제조/설비 투자로 고효율 및 고품질의 제품을 생산합니다.',
    },
    {
        icon: <TeamOutlined />,
        number: '02',
        title: '사업 영역 확대',
        desc: '전략적 기술 및 사업 제휴로 사업 영역을 확대합니다.',
    },
    {
        icon: <TrophyOutlined />,
        number: '03',
        title: '매출 극대화',
        desc: '다방면 영업 전략에 따른 매출 극대화를 실현합니다.',
    },
    {
        icon: <HeartOutlined />,
        number: '04',
        title: '신뢰 성장',
        desc: '고객과 직원으로부터 신뢰를 받을 수 있는 기업으로 성장합니다.',
    },
];

function Vision() {
    return (
        <section id="vision" className="vision-section section">
            <div className="container">
                <div className="vision-header">
                    <span className="section-label vision-label">2026 BUSINESS GOALS</span>
                    <h2 className="vision-title">
                        믿고 맡기면 끝나는<br />
                        <span className="vision-highlight">원스톱 토탈 솔루션</span>
                    </h2>
                    <p className="vision-subtitle">체계적인 생산 공정으로 최상의 품질을 보장합니다</p>
                </div>

                {/* Production Process */}
                <div className="process-section">
                    <span className="section-label vision-label">PRODUCTION PROCESS</span>
                    <div className="process-flow">
                        {processSteps.map((item, index) => (
                            <div key={index} className="process-step">
                                <div className="process-step-number">{item.step}</div>
                                <h4 className="process-step-title">{item.title}</h4>
                                <p className="process-step-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision Cards */}
                <Row gutter={[48, 48]} className="vision-grid">
                    {visionItems.map((item, index) => (
                        <Col xs={24} sm={12} key={index}>
                            <div className="vision-card">
                                <div className="vision-card-icon">{item.icon}</div>
                                <div className="vision-card-content">
                                    <h3 className="vision-card-title">{item.title}</h3>
                                    <p className="vision-card-desc">{item.desc}</p>
                                </div>
                                <span className="vision-card-number">{item.number}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default Vision;
