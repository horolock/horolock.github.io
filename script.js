// script.js 파일

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // a 태그의 기본 동작(페이지 이동)을 막음
            event.preventDefault(); 

            // 모든 탭에서 'active' 클래스 제거
            tabs.forEach(t => t.classList.remove('active'));
            // 클릭된 탭에만 'active' 클래스 추가
            tab.classList.add('active');

            // 모든 콘텐츠를 숨김
            contents.forEach(content => content.classList.remove('active'));

            // 클릭된 탭과 연결된 콘텐츠를 보여줌
            // (a 태그의 href 값과 section의 id 값을 연결)
            const targetId = tab.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});