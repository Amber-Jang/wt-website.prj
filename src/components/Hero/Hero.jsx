import { ArrowDownOutlined } from '@ant-design/icons';
import './Hero.css';
import introImg from '../../assets/images/intro.png';

function Hero() {
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            {/* Top: White area with text */}
            <div className="hero-top">
                <div className="container hero-top-content animate-fade-in-up">
                    <span className="hero-eyebrow">Wootec Circuit</span>
                    <h1 className="hero-title">
                        PCB 개발부터 조립까지
                    </h1>
                    <p className="hero-subtitle">
                        원스톱 토탈 솔루션으로<br />
                        항상 최상의 품질과 서비스를 약속합니다
                    </p>
                </div>
            </div>

            {/* Bottom: Dark image overlay with keywords */}
            <div className="hero-bottom">
                <div className="hero-bg" style={{ backgroundImage: `url(${introImg})` }}>
                    <div className="hero-overlay" />
                </div>
                <div className="container hero-bottom-content animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="hero-bottom-label">PCB · SMT · ASS'Y 생산 전문</span>
                    <div className="hero-keywords">
                        <div className="hero-keyword">다품종 소량 생산</div>
                        <div className="hero-keyword">품질 관리</div>
                        <div className="hero-keyword">합리적인 단가 및 납기</div>
                    </div>
                </div>
            </div>

            <button className="scroll-indicator animate-fade-in" style={{ animationDelay: '0.5s' }} onClick={scrollDown} aria-label="Scroll down">
                <ArrowDownOutlined className="scroll-arrow" />
            </button>
        </section>
    );
}

export default Hero;
