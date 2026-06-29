<template>
    <section class="max-w-900 h-auto">
        <h2 class="numberedHeading">About Me</h2>
        <div class="block md:grid grid-flow-col grid-cols-5 grid-rows-1 gap-12">
            <div class="col-span-3">
                <div>
                    <p class="my-4">
                        I'm a Full Stack Developer passionate about building
                        scalable, well-crafted software from the ground up.
                    </p>
                    <p class="my-4">
                        I believe that without understanding the fundamentals, every framework and library
                        you use is just syntax — a tool you don't truly own. So before reaching for any
                        abstraction, I focused on the core: data structures &amp; algorithms, OOP &amp; SOLID
                        principles, and how software interacts with hardware.
                    </p>
                    <p class="my-4">
                        Resources I follow: <strong class="text-bcColorTitle">CoreDumped &amp; ThePrimeagen</strong> for systems thinking and engineering
                        mindset, <strong class="text-bcColorTitle">Frontend Masters</strong> for deep production-grade frontend knowledge,
                        <strong class="text-bcColorTitle">Boot.dev &amp; CodeCrafters</strong> for backend fundamentals through building,
                        and <strong class="text-bcColorTitle">LeetCode</strong> for sharpening problem-solving consistently.
                    </p>
                    <p>
                        Here are technologies I've been working with recently:
                    </p>
                </div>
                <ul
                    class="
                        mt-5
                        overflow-hidden
                        list-none
                        grid grid-flow-col grid-cols-2 grid-rows-4
                        gap-y-0 gap-x-4 deneme
                    "
                >
                    <li
                        class="relative mb-[10px] pl-5 font-mono text-bcSm"
                        v-for="skill in skills"
                        :key="skill"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="col-span-2 max-w-[300px] mt-6 mb-60 mx-auto">
                <div class="imgWrapper">
                    <img src="~/static/img/profile_image.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                "TypeScript", "Node.js", "NestJS",
                "React / Next.js", "Vue.js / Nuxt.js", "Tailwind CSS",
                "PostgreSQL", "Docker / CI-CD", "AWS",
                "Playwright", "Redux", "Webpack",
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
p {
    @apply text-bcLg;
}
li:before {
    content: "▹";
    @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
}

.imgWrapper {
    @apply block relative w-full rounded-xl bg-bcColor;
    &:hover,
    &:focus {
        @apply bg-transparent outline-none;

        &:after {
            @apply top-[15px] left-[15px];
        }

        img {
            filter: none;
        }
    }

    img {
        @apply relative rounded-xl transition-all z-50 inline-block;
        filter: grayscale(100%) contrast(1);
    }

    &:before,
    &:after {
        content: "";
        @apply block absolute w-full h-full rounded-xl transition-all;
    }

    &:before {
        @apply top-0 left-0 bg-bgColor z-50;
    }

    &:after {
        @apply border-2 border-solid border-bcColor top-[20px] left-[20px] z-0;
    }
}
@media screen and (max-width: 500px) {
 .deneme{
    display:flex;
    flex-direction:column;
 }
}
</style>
