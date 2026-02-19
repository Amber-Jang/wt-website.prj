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
        desc: '고객과 직원으로부터 신뢰를 받는 기업으로 성장합니다.',
        tags: ['13+ 년 업력', 'SMT 2라인', 'N2 적용'],
    },
    {
        path: '/services',
        label: 'SERVICES',
        title: '사업 영역',
        desc: 'PCB 제작부터 완제품 조립까지 최적의 솔루션을 제공합니다.',
        tags: ['PCB', 'SMT', "ASS'Y"],
    },
    {
        path: '/vision',
        label: 'VISION',
        title: '생산 과정 / 설비',
        desc: '체계적인 생산 공정으로 최상의 품질을 보장합니다.',
        tags: ['설계 검토', 'SMT 실장', '검사 출하'],
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
