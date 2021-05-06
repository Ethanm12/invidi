<template>
    <nav>
        <div class="spacer"></div>
        <div class="top-banner">
            <div class="container" style="height:100%;">

                <div class="hamburger" :class="{open: menuOpen}" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="overlay" :class="{open: menuOpen}">
                    <div class="container">
                        <ul>
                            <li class="ham-item">
                                <a v-for="(text, hash) in navItems" :key="hash" @click.prevent="scrollTo(hash)" 
                                        class="nav-link ham-link" :href="hash" :class="{active: activeHash === hash}">
                                    {{ text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="navbar">
                    <a @click.prevent="scrollTo('')" class="nav-link officecrew-logo" href="">
                        <img src="/images/logo/officecrew-logo.svg" alt="OfficeCrew" />
                    </a>
                    <div class="nav">
                        <a v-for="(text, hash) in navItems" :key="hash" @click.prevent="scrollTo(hash)" class="nav-link nav-item" 
                                :href="hash" :class="{active: activeHash === hash}">
                            {{ text }}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    data: () => ({
        menuOpen: false,
        navItems: {
            '#story': 'About',
            '#about': 'Why Us?',
            '#service': 'Service',
            '#accreditations': 'Accreditations',
            '#contact': 'Contact',
        },
        navElements: {},

        activeHash: null
    }),
    mounted() {
        this.$nextTick(() => {
            for (const key in this.navItems) {
                this.navElements[key] = document.querySelector(key);
            }
            if (this.navItems[window.location.hash]) {
                this.scrollTo(window.location.hash);
            }
            this.checkScroll();
            window.addEventListener('scroll', this.checkScroll);
        });
    },
    destroyed() {
        window.removeEventListener('scroll', this.checkScroll);
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        },
        scrollTo(key) {
            window.scrollTo({
                top: key ? this.navElements[key].getBoundingClientRect().top - this.$el.getBoundingClientRect().height + window.scrollY : 0,
                left: 0,
                behavior: 'smooth'
            });
            if (window.location.hash != key) this.$router.push({hash: key});
            this.closeMenu();
        },
        checkScroll() {
            this.activeHash = null;
            for (const key in this.navElements) {
                if ((this.navElements[key].getBoundingClientRect().top < window.visualViewport.height / 3)
                        || window.scrollY >= document.body.scrollHeight - window.visualViewport.height) {
                    this.activeHash = key;
                }
            }
        }
    },
    watch: {
        '$route.fullPath'() {
            this.closeMenu();
        }
    }
}
</script>