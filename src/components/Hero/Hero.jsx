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
                        PCB 설계부터 조립까지
                        <span className="sr-only"> - 우텍써키트 PCB·SMT·ASSY 생산 전문</span>
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
                        <div className="hero-keyword-item">
                            <div className="hero-keyword">다품종 소량부터 양산까지 유연한 생산 대응</div>
                            <div className="hero-keyword-caption">고객 요구에 맞춘 맞춤형 생산 시스템</div>
                        </div>
                        <div className="hero-keyword-item">
                            <div className="hero-keyword">체계적인 품질관리 시스템 운영</div>
                            <div className="hero-keyword-caption">AOI · 기능검사 · 출하검사까지 전 공정 품질 검증</div>
                        </div>
                        <div className="hero-keyword-item">
                            <div className="hero-keyword">합리적인 단가와 정확한 납기 준수</div>
                            <div className="hero-keyword-caption">공정 최적화를 통한 원가 절감 및 납기 안정화</div>
                        </div>
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
