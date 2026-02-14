import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { antTheme } from './styles/theme.config';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home/Home';
import './styles/global.css';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <Router>
        <Layout className="app-layout">
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* 향후 멀티페이지 확장 시 아래에 라우트 추가
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              */}
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
