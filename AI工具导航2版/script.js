import aiTools from './config.js';

document.addEventListener('DOMContentLoaded', function() {
    // 搜索框功能
    const searchInput = document.getElementById('ai-search');
    const quickLinks = document.querySelectorAll('.quick-links a');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch(this.value.trim());
        }
    });

    // 快捷链接点击
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const query = searchInput.value.trim();
            if (query) {
                e.preventDefault();
                window.open(`${this.href}?q=${encodeURIComponent(query)}`, '_blank');
            }
        });
    });

    // 动态生成AI工具列表
    const toolsContent = document.getElementById('tools-content');
    
    function createToolElement(tool) {
        const link = document.createElement('a');
        link.href = tool.url;
        link.className = 'tool-btn';
        link.target = '_blank';
        link.textContent = tool.name;
        return link;
    }

    function initializeTools() {
        toolsContent.innerHTML = '';
        aiTools.forEach(tool => {
            toolsContent.appendChild(createToolElement(tool));
        });
    }

    initializeTools();
    const toolBtns = toolsContent.querySelectorAll('.tool-btn');

    // 复制工具按钮实现无缝滚动
    function cloneTools() {
        toolBtns.forEach(btn => {
            const clone = btn.cloneNode(true);
            toolsContent.appendChild(clone);
        });
    }
    
    cloneTools();
    
    // 定义滚动速度和状态
    let scrollSpeed = 1;
    let scrollInterval;
    let isHovered = false;
    let isPaused = false;
    let activeToolBtn = null;
    
    // 开始滚动
    function startScroll() {
        if (!isHovered && !isPaused) {
            scrollInterval = setInterval(() => {
                if (toolsContent.scrollLeft >= (toolsContent.scrollWidth / 2)) {
                    toolsContent.scrollLeft = 0;
                } else {
                    toolsContent.scrollLeft += scrollSpeed;
                }
            }, 20);
        }
    }
    
    // 停止滚动
    function stopScroll() {
        clearInterval(scrollInterval);
    }
    
    const toolsContainer = document.getElementById('tools-container');
    
    // 鼠标事件
    toolsContainer.addEventListener('mouseenter', () => {
        isHovered = true;
        stopScroll();
    });
    
    toolsContainer.addEventListener('mouseleave', () => {
        isHovered = false;
        if (!isPaused) {
            startScroll();
        }
    });

    // 工具按钮点击事件
    toolsContent.addEventListener('click', (e) => {
        const link = e.target.closest('.tool-btn');
        if (link) {
            // 移除之前的活动状态
            if (activeToolBtn) {
                activeToolBtn.classList.remove('active');
            }
            
            // 设置新的活动状态
            link.classList.add('active');
            activeToolBtn = link;
            isPaused = true;
            stopScroll();

            const query = searchInput.value.trim();
            if (query) {
                e.preventDefault();
                window.open(`${link.href}?q=${encodeURIComponent(query)}`, '_blank');
            }
        }
    });

    // 点击其他区域恢复滚动
    document.addEventListener('click', (e) => {
        if (!toolsContainer.contains(e.target)) {
            isPaused = false;
            if (activeToolBtn) {
                activeToolBtn.classList.remove('active');
                activeToolBtn = null;
            }
            if (!isHovered) {
                startScroll();
            }
        }
    });

    // 图片轮播功能
    const carousel = document.querySelector('.carousel-container');
    const images = ['list-img-1.png', 'list-img-2.png'];
    let currentImageIndex = 0;
    let isCarouselPaused = false;
    let carouselInterval;

    function rotateImages() {
        if (!isCarouselPaused) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            const img = carousel.querySelector('img');
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = `images/${images[currentImageIndex]}`;
                img.style.opacity = '1';
            }, 500);
        }
    }

    // 图片轮播交互
    carousel.addEventListener('click', () => {
        isCarouselPaused = !isCarouselPaused;
        carousel.style.borderColor = isCarouselPaused ? '#1a73e8' : 'transparent';
    });

    // 每3秒切换一次图片
    carouselInterval = setInterval(rotateImages, 3000);

    // 搜索按钮点击
    document.querySelector('.search-btn').addEventListener('click', function() {
        handleSearch(searchInput.value.trim());
    });

    function handleSearch(query) {
        if (query) {
            const randomPlatform = Math.random() < 0.5 ? 
                'https://chat.deepseek.com' : 
                'https://chat.qwen.ai';
            window.open(`${randomPlatform}?q=${encodeURIComponent(query)}`, '_blank');
        }
    }

    // 启动走马灯
    startScroll();
});
