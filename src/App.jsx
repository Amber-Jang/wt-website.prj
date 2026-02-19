import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { antTheme } from './styles/theme.config';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import VisionPage from './pages/Vision/VisionPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <Router>
        <ScrollToTop />
        <Layout className="app-layout">
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/vision" element={<VisionPage />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
