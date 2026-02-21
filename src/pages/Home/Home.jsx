import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import Hero from '../../components/Hero/Hero';
import Contact from '../../components/Contact/Contact';
import './Home.css';

const summaryCards = [
    {
        path: '/about',
        label: 'ABOUT US',
        title: '회사 소개',
        desc: '다년간의 실장 경험과 축적된 노하우를 바탕으로 안정적인 생산 품질을 제공합니다.',
        tags: ['10년 이상 실장 경력', 'SMT 전문 생산라인 보유', '산업/전자제품 실장 대응'],
    },
    {
        path: '/services',
        label: 'SERVICES',
        title: '사업 영역',
        desc: 'PCB 제작부터 전자제품 조립까지 최적의 솔루션을 제공합니다.',
        tags: ['PCB 제작', 'SMT 실장', 'DIP 및 수삽', '기능 검사', '완제품 조립(ASSY)'],
    },
    {
        path: '/vision',
        label: 'VISION',
        title: '생산 과정 / 설비',
        desc: '최신 SMT 설비와 숙련된 기술 인력을 기반으로 안정적인 생산 품질을 유지합니다.',
        tags: ['고속 칩마운터 운영', '리플로우 자동화 공정', 'AOI 검사 시스템', '출하 전 전수 검사'],
    },
];

function Home() {
    return (
        <>
            <Hero />
            <section className="home-summary section">
                <div className="container">
                    <div className="summary-grid">
                        {summaryCards.map((card) => (
                            <Link to={card.path} key={card.path} className="summary-card">
                                <span className="summary-card-label">{card.label}</span>
                                <h3 className="summary-card-title">{card.title}</h3>
                                <p className="summary-card-desc">{card.desc}</p>
                                <div className="summary-card-tags">
                                    {card.tags.map((tag) => (
                                        <span key={tag} className="summary-tag">{tag}</span>
                                    ))}
                                </div>
                                <span className="summary-card-link">
                                    자세히 보기 <ArrowRightOutlined />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}

export default Home;
