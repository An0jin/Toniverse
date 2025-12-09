document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
    <header class="bg-[#F7EFE5] border-b-2 border-[#F29479] sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-2">
                <img src="https://github.com/An0jin/WarmCoolUnity/blob/main/Assets/img/icon.png?raw=true"
                    alt="Toneiverse Logo" class="h-10 w-10">
                <span class="font-jua text-3xl text-[#E86A50]">Toneiverse</span>
            </a>

            <div class="hidden md:flex items-center space-x-8">
                <a href="team.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">팀원 소개</a>
                <a href="links.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">자료 모음</a>
                <a href="privacy.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">개인정보처리방침</a>
                <a href="copyRight.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">저작권</a>
                <a href="https://play.google.com/store/apps/details?id=com.an0jin.Toneiverse"
                    class="bg-[#F29479] text-white px-6 py-2 rounded-full font-bold hover:bg-[#E86A50] transition-colors shadow-md">
                    앱 다운로드
                </a>
            </div>

            <div class="md:hidden flex items-center">
                <button id="menu-btn" class="text-gray-600 hover:text-[#E86A50] focus:outline-none">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>

        <div id="mobile-menu" class="hidden md:hidden bg-[#F7EFE5] border-t border-[#F29479]">
            <div class="px-6 py-4 space-y-4 flex flex-col">
                <a href="team.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">팀원 소개</a>
                <a href="links.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">자료 모음</a>
                <a href="privacy.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">개인정보처리방침</a>
                <a href="copyRight.html" class="text-gray-600 hover:text-[#E86A50] font-bold transition-colors">저작권</a>
                <a href="https://play.google.com/store/apps/details?id=com.an0jin.Toneiverse"
                    class="bg-[#F29479] text-white px-6 py-2 rounded-full font-bold hover:bg-[#E86A50] transition-colors shadow-md text-center">
                    앱 다운로드
                </a>
            </div>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Mobile menu logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for index.html links if we are on index.html
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '/';

    if (isIndex) {
        document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }
});
