// 페이지의 모든 HTML 요소가 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 필요한 HTML 요소들을 가져옵니다.
    const tabs = document.querySelectorAll('.menu-button');
    const contentSections = document.querySelectorAll('.content-section');

    // 2. 각 탭 버튼에 클릭 이벤트를 추가합니다.
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 3. 클릭 이벤트가 발생하면 실행될 내용입니다.

            // 먼저, 모든 탭에서 'active' 클래스를 제거합니다.
            tabs.forEach(item => item.classList.remove('active'));

            // 그리고 방금 클릭한 탭에만 'active' 클래스를 추가합니다.
            tab.classList.add('active');

            // 클릭된 탭의 data-target 값을 가져옵니다. (예: "home" 또는 "support")
            const targetId = tab.dataset.target;

            // 모든 콘텐츠 섹션을 숨깁니다.
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // targetId와 일치하는 id를 가진 콘텐츠 섹션만 찾아서 'active' 클래스를 추가하여 보여줍니다.
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});