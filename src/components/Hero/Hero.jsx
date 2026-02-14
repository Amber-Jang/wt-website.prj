import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import './Hero.css';
import introImg from '../../assets/images/intro.png';

function Hero() {
    const scrollToAbout = () => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero-section">
            {/* Background overlay */}
            <div className="hero-bg" style={{ backgroundImage: `url(${introImg})` }}>
                <div className="hero-particles">
                    <div className="particle particle-1" />
                    <div className="particle particle-2" />
                    <div className="particle particle-3" />
                    <div className="particle particle-4" />
                    <div className="particle particle-5" />
                </div>
                <div className="hero-gradient" />
            </div>

            <div className="hero-content container">
                <div className="hero-badge animate-fade-in">
                    PCB · SMT · ASS'Y 생산 전문
                </div>

                <h1 className="hero-title">
                    <span className="hero-title-main animate-fade-in-up">우텍써키트</span>
                    <span className="hero-title-eng animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Wootec-Circuit
                    </span>
                </h1>

                <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    원스톱 토탈 솔루션으로<br />
                    항상 최상의 품질과 서비스를 약속합니다
                </p>

                <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Button type="primary" size="large" className="hero-btn-primary" onClick={scrollToAbout}>
                        회사 소개 보기
                    </Button>
                    <Button
                        size="large"
                        className="hero-btn-secondary"
                        onClick={() => {
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        문의하기
                    </Button>
                </div>

                <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="stat-item">
                        <span className="stat-label">ONE STOP</span>
                        <span className="stat-value">TOTAL SOLUTION</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-label">HIGH QUALITY</span>
                        <span className="stat-value">PCB · SMT</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-label">TRUST</span>
                        <span className="stat-value">& GROWTH</span>
                    </div>
                </div>
            </div>

            <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
                <ArrowDownOutlined className="scroll-arrow" />
            </button>
        </section>
    );
}

export default Hero;
