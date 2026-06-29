<template>
    <nav :class="{ hiddenNavbar: !showNavbar, topNavBar: !topScroll }">
        <div>
            <NuxtLink to="/">
               <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="70" height="70" viewBox="0 0 300.000000 225.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,225.000000) scale(0.050000,-0.050000)" fill="#64ffda" stroke="none"> <path d="M1503 3058 c-361 -620 -463 -810 -450 -838 9 -20 220 -383 467 -808 l450 -772 942 0 941 0 458 785 c252 432 458 803 458 825 0 22 -206 393 -457 825 l-458 785 -942 0 -942 0 -467 -802z m2740 -37 c241 -413 437 -758 437 -768 0 -19 -64 -131 -555 -973 l-321 -550 -890 -5 -890 -5 -442 760 c-243 418 -442 765 -442 772 0 7 199 353 442 770 l442 758 891 -5 892 -5 436 -749z"/> <path d="M2552 2954 c-45 -48 -140 -196 -212 -330 l-130 -243 -74 -1 c-112 0 -118 -69 -9 -106 28 -9 -156 -264 -236 -325 -101 -76 -178 -84 -240 -22 -118 119 5 314 179 282 95 -18 97 39 2 84 -189 90 -413 -136 -331 -335 52 -125 247 -205 387 -159 66 22 284 216 264 235 -4 5 14 30 41 57 27 27 44 58 37 69 -7 11 -1 20 12 20 14 0 19 6 12 13 -7 7 -4 29 7 50 30 54 330 57 312 2 -6 -19 -47 -138 -92 -265 -127 -361 -102 -477 116 -539 105 -30 125 27 27 77 -44 22 -85 55 -92 73 -20 53 -14 149 10 149 12 0 17 14 11 30 -7 17 -2 30 9 30 12 0 15 18 7 43 -9 30 -6 38 11 27 18 -11 20 -3 10 30 -10 33 -8 41 10 30 18 -11 20 -3 10 30 -11 33 -8 41 11 29 16 -9 20 -7 12 7 -17 27 78 306 112 328 14 8 17 16 8 16 -10 0 -8 12 4 27 13 15 17 33 9 40 -7 7 -1 13 13 13 14 0 20 13 14 30 -7 17 -5 30 4 30 21 0 65 141 51 163 -6 9 -1 17 9 17 26 0 51 202 33 259 -43 136 -225 155 -338 35z m203 -129 c-7 -63 -40 -191 -74 -285 l-63 -170 -124 4 c-68 2 -131 4 -140 5 -8 1 5 36 30 79 25 44 53 74 64 67 10 -6 12 -2 5 10 -7 12 0 35 16 51 16 16 24 35 17 42 -7 6 -2 12 12 12 13 0 19 9 12 20 -7 11 -2 20 10 20 12 0 17 9 10 20 -7 11 -2 20 10 20 12 0 17 8 11 18 -6 10 3 23 20 30 18 6 27 19 21 28 -15 25 100 144 140 144 29 0 32 -16 23 -115z"/> <path d="M3870 3003 c-57 -35 -137 -159 -318 -488 -72 -131 -76 -135 -153 -135 -96 0 -115 -65 -27 -94 l51 -17 -89 -120 c-188 -252 -365 -337 -435 -208 -74 139 52 298 212 268 93 -18 93 29 0 79 -225 121 -469 -214 -287 -396 133 -133 312 -140 458 -17 88 74 220 245 207 267 -6 10 -2 18 10 18 11 0 19 7 17 15 -21 78 27 105 187 105 146 0 160 -3 146 -35 -223 -517 -208 -805 41 -805 89 0 87 37 -6 80 -69 32 -111 125 -82 182 9 18 11 38 4 45 -7 7 -1 13 13 13 14 0 20 13 14 29 -6 17 -2 35 9 42 12 7 16 26 10 42 -7 16 -4 24 6 18 15 -9 67 138 71 199 0 11 9 26 19 33 9 7 17 36 17 65 0 28 8 52 19 52 10 0 13 9 6 20 -7 11 -3 20 8 20 11 0 16 14 9 30 -6 17 0 30 13 30 13 0 19 13 13 30 -7 17 -4 30 6 30 26 0 67 135 49 163 -9 15 -5 18 12 7 20 -12 23 -7 14 17 -7 18 -5 33 4 33 28 0 63 236 43 288 -45 118 -181 162 -291 95z m164 -168 c-6 -58 -40 -184 -75 -280 l-64 -175 -138 0 c-148 0 -158 8 -97 85 22 28 40 61 40 73 0 12 9 22 19 22 23 0 89 120 67 120 -9 0 -3 9 13 19 15 10 31 34 33 54 3 20 21 47 41 61 19 15 27 26 17 26 -9 0 4 23 30 50 84 89 128 68 114 -55z"/> </g> </svg> 
            </NuxtLink>
        </div>
        <div>
            <Menu
                v-animate-delay:fade="0"
                class="md:hidden relative z-50"
                :menuOpen="menuOpen"
                :navLinks="navLinks"
                @click.native="emitMenuStatus()"
            />
            <Drawer
                class="z-0 md:hidden"
                :open="menuOpen"
                :navLinks="navLinks"
                @eventCloseDrawer="emitMenuStatus()"
            />

            <div class="hidden md:flex">
                <NuxtLink
                    v-for="(link, index) in navLinks"
                    :key="link.name"
                    :to="{ path: link.url }"
                    class="navBtn"
                    v-animate-delay:fade-down="index * 100"
                >
                    <span class="text-bcColor font-normal"
                        >0{{ index + 1 }}.
                    </span>
                    {{ link.name }}
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: true,
            topScroll: true,
            lastScrollPosition: 0,
            scrollValue: 0,
        };
    },
    props: {
        menuOpen: {
            type: Boolean,
            require: true,
        },
        navLinks: {
            type: Array,
            require: true,
        },
    },
    mounted() {
        // Handle window resize
        window.addEventListener("resize", this.onResize);
        // Handle scroll event
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
        const viewportMeta = document.createElement("meta");
        viewportMeta.name = "viewport";
        viewportMeta.content = "width=device-width, initial-scale=1";
        document.head.appendChild(viewportMeta);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        emitMenuStatus() {
            this.$emit("eventMenuStatus", !this.menuOpen);
        },
        onResize() {
            if (this.menuOpen === true && window.innerWidth >= "768") {
                this.emitMenuStatus();
            }
        },
        onScroll() {
            if (window.pageYOffset < 0) {
                return;
            }

            // Top position event
            window.pageYOffset === 0
                ? (this.topScroll = true)
                : (this.topScroll = false);
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
                return;
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
        },
    },
};
</script>

<style lang="scss" scoped>
nav {
    @apply fixed flex justify-between items-center w-full font-mono h-bcNavHeight  
    px-6 md:px-10 lg:px-12 backdrop-filter backdrop-blur-sm shadow-appbar transition-all;

    .logo {
        @apply fill-current text-bcColor;
    }
    .navBtn {
        @apply font-normal p-bcTabP mr-bcTabMR text-bcXs text-bcLightestSlate hover:text-bcColor;
    }
}
.hiddenNavbar {
    @apply transform translate-y-[-70px];
}
.topNavBar {
    @apply h-bcNavScrollHeight;
}
</style>