// service-worker.js

// 캐시할 파일 리스트
const cacheFiles = [
    '/',
    '/index.html',
    '/styles.css',
    '/server.js',
    
  ];
  
  // 서비스 워커 설치 이벤트
  self.addEventListener('install', event => {
    console.log('서비스 워커 설치됨');
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll(cacheFiles);
      })
    );
  });
  
  // 서비스 워커 활성화 이벤트
  self.addEventListener('activate', event => {
    console.log('서비스 워커 활성화됨');
  });
  
  // 요청에 대한 응답 가져오기
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  