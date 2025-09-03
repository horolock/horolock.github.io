document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.menu-button');
    const contentSections = document.querySelectorAll('.content-section');

    // 특정 ID를 가진 콘텐츠를 보여주는 함수
    const showContent = (targetId) => {
        // 유효한 targetId가 없으면 'home'으로 기본 설정
        if (!targetId || !document.getElementById(targetId)) {
            targetId = 'home';
        }

        // 모든 탭과 콘텐츠 섹션에서 'active' 클래스 제거
        tabs.forEach(item => item.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        // 목표로 하는 탭과 콘텐츠 섹션을 찾아서 'active' 클래스 추가
        const targetTab = document.querySelector(`.menu-button[data-target="${targetId}"]`);
        const targetContent = document.getElementById(targetId);

        if (targetTab) {
            targetTab.classList.add('active');
        }
        if (targetContent) {
            targetContent.classList.add('active');
        }
    };

    // 각 탭 버튼에 클릭 이벤트 추가
    tabs.forEach(tab => {
        if (tab.dataset.target) {
            tab.addEventListener('click', (event) => {
                event.preventDefault(); // 링크의 기본 동작(페이지 이동) 방지
                const targetId = tab.dataset.target;
                
                // 콘텐츠를 보여주는 함수 호출
                showContent(targetId);
                
                // URL의 해시(hash)를 수동으로 업데이트
                if (history.pushState) {
                    history.pushState(null, null, `#${targetId}`);
                } else {
                    window.location.hash = `#${targetId}`;
                }
            });
        }
    });

    // 페이지가 처음 로드될 때 URL의 해시를 확인하고 해당 콘텐츠 표시
    const currentHash = window.location.hash.substring(1);
    showContent(currentHash);
});