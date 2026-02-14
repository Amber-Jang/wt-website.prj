# AWS Server Setup Guide — Wootec-Circuit

## 1. SSH 접속

```bash
# 키 파일 권한 설정 (최초 1회)
chmod 400 wt-key.pem

# 서버 접속
ssh -i wt-key.pem ec2-user@43.201.77.86
```

---

## 2. Node.js 설치 (nvm)

```bash
# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc

# Node.js LTS 설치
nvm install --lts
node -v && npm -v
```

---

## 3. Nginx 설치 및 설정

```bash
# Nginx 설치
sudo dnf install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Nginx 설정 파일 편집

```bash
sudo vi /etc/nginx/conf.d/wootec.conf
```

아래 내용을 붙여넣기:

```nginx
server {
    listen 80;
    server_name wootecsmt.co.kr www.wootecsmt.co.kr;

    root /home/ec2-user/wt-website/dist;
    index index.html;

    # SPA 라우팅 (React Router 지원)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 정적 파일 캐싱
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 압축
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
    gzip_min_length 1000;
}
```

```bash
# 설정 테스트 및 재시작
sudo nginx -t
sudo systemctl restart nginx
```

---

## 4. 보안 그룹 설정 (AWS 콘솔)

AWS Console → EC2 → Security Groups에서 인바운드 규칙:

| Type  | Port | Source    | 용도       |
|-------|------|-----------|-----------|
| SSH   | 22   | My IP     | 관리자 접속 |
| HTTP  | 80   | 0.0.0.0/0 | 웹 서비스  |
| HTTPS | 443  | 0.0.0.0/0 | SSL 서비스 |

---

## 5. 빌드 파일 배포

### 로컬에서 빌드 후 업로드

```bash
# 로컬에서
npm run build

# 서버로 전송
scp -i wt-key.pem -r dist/* ec2-user@43.201.77.86:/home/ec2-user/wt-website/dist/
```

### 또는 서버에서 직접 빌드

```bash
# 서버에서
cd /home/ec2-user/wt-website
npm install
npm run build
```

---

## 6. HTTPS (SSL) 설정 — Let's Encrypt

```bash
# certbot 설치
sudo dnf install certbot python3-certbot-nginx -y

# SSL 인증서 발급 (도메인 DNS가 서버 IP로 연결된 후)
sudo certbot --nginx -d wootecsmt.co.kr -d www.wootecsmt.co.kr

# 자동 갱신 설정
sudo systemctl enable certbot-renew.timer
```
