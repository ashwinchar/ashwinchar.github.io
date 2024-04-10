document.addEventListener('DOMContentLoaded', function () {
    const tabContainerHeight = 70;
    let currentId = null;
    let currentTab = null;
    const navContainer = document.querySelector('.et-hero-tabs-container');
    const tabs = document.querySelectorAll('.et-hero-tab');
    const tabSlider = document.querySelector('.et-hero-tab-slider');
    const originalNavContainerOffsetTop = navContainer.offsetTop; // Get the original top offset of the navigation container

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const offsetTop = targetSection.offsetTop - tabContainerHeight + 1;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('scroll', () => {
        let newCurrentId;
        let newCurrentTab;
        tabs.forEach(tab => {
            const targetSection = document.querySelector(tab.getAttribute('href'));
            const offsetTop = targetSection.offsetTop - tabContainerHeight;
            const offsetBottom = targetSection.offsetTop + targetSection.offsetHeight - tabContainerHeight;
            if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
                newCurrentId = tab.getAttribute('href');
                newCurrentTab = tab;
            }
        });

        if (newCurrentId !== currentId) {
            currentId = newCurrentId;
            currentTab = newCurrentTab;
            tabs.forEach(tab => tab.classList.remove('et-hero-tab-active'));
            currentTab.classList.add('et-hero-tab-active');
            setSliderCss();
        }

        // Check if the user has scrolled back above the original position of the navigation container
        if (window.scrollY > originalNavContainerOffsetTop) {
            navContainer.classList.add('et-hero-tabs-container--top');
        } else {
            navContainer.classList.remove('et-hero-tabs-container--top');
        }
    });

    function setSliderCss() {
        if (currentTab) {
            tabSlider.style.width = `${currentTab.offsetWidth}px`;
            tabSlider.style.left = `${currentTab.offsetLeft}px`;
        }
    }
});