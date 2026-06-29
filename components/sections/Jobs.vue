<template>
    <section class="max-w-[700px]">
        <h2 class="numberedHeading">Where I've Experienced</h2>
        <div class="flex min-h-[450px] sm:min-h-[340px]">
            <div class="flex flex-col relative w-max p-0 m-0 list-none">
                <button
                    v-for="(job, index) in jobs"
                    :key="index"
                    @click="activeTabId = index"
                    :class="{ 'text-bcColor': activeTabId === index }"
                >
                    {{ job.company }}
                </button>
                <span
                    class="highLight"
                    :style="{
                        transform: 'translateY(calc(' + activeTabId * 42 + 'px))',
                    }"
                ></span>
            </div>
            <div class="inner">
                <transition name="fade" v-for="(job, index) in jobs" :key="index">
                    <div v-if="activeTabId === index" class="absolute">
                        <h3>
                            {{ job.title }}
                            <span class="text-bcColor">&nbsp;@ {{ job.company }}</span>
                        </h3>
                        <p>{{ job.period }}</p>
                        <ul>
                            <li v-for="item in job.bullets" :key="item">
                                {{ item }}
                            </li>
                        </ul>
                        <div v-if="job.tech && job.tech.length" class="mt-4">
                            <p class="text-bcLightSlate font-mono text-bcXs mb-2">Technologies:</p>
                            <div class="flex flex-wrap gap-x-4">
                                <span
                                    v-for="t in job.tech"
                                    :key="t"
                                    class="font-mono text-bcXs text-bcColor"
                                >{{ t }}</span>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeTabId: 0,
            jobs: [
                {
                    company: "CloudSigma",
                    title: "Frontend Developer",
                    period: "Jan 2024 – Jan 2026",
                    bullets: [
                        "Onboarded 3+ external partners by reviewing codebases, customizing repositories, and leading production rollouts end-to-end.",
                        "Translated stakeholder requirements into scalable feature implementations, balancing technical constraints with business priorities.",
                        "Collaborated closely with internal and external teams to understand and solve pain points, documenting the process in clear technical guides.",
                        "Used AI coding assistants as a core part of daily development.",
                    ],
                    tech: ["JavaScript", "Webpack", "Jira", "Npm", "Figma", "Playwright"],
                },
                {
                    company: "Elektromarketim",
                    title: "Frontend Developer",
                    period: "Aug 2022 – Jan 2023",
                    bullets: [
                        "Utilized responsive design principles for usability across various devices.",
                        "Contributed to the redesign and enhancement of the project.",
                        "Utilized Figma and Photoshop for designing the newly added interfaces.",
                        "Wrote unit and end-to-end test suites with Playwright to validate partner integrations before production rollout.",
                    ],
                    tech: ["JavaScript", "HTML", "CSS", "Nuxt.js", "Bootstrap"],
                },
                {
                    company: "Education",
                    title: "BSc – Computer Science & Engineering",
                    period: "Yalova University",
                    bullets: [
                        "Bachelor of Science in Computer Science and Engineering.",
                    ],
                    tech: [],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
li {
    @apply relative mb-[10px] pl-5 font-mono text-bcSm;
    &:before {
        content: "▹";
        @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
    }
}

.fade-enter-active {
    @apply transition-all duration-1000;
}
.fade-leave-active {
    @apply transition-all duration-500;
}
.fade-enter,
.fade-leave-active {
    @apply opacity-0;
}

button {
    @apply font-mono items-center w-full h-bcTabHeight px-2 sm:px-5 pt-0 pb-[2px] bg-transparent
    border-l-2 border-solid border-bcLightestNavy focus:outline-none
    text-bcXl text-left whitespace-nowrap hover:bg-bcLightNavy focus:bg-bcLightNavy
    hover:text-bcColor focus:text-bcColor transition duration-500 ease-in-out;
}
.highLight {
    @apply absolute top-0 left-0 w-[2px] h-bcTabHeight rounded bg-bcColor transition-all delay-100;
}
.inner {
    @apply w-full relative h-auto py-[10px] px-1 ml-2 sm:ml-5;
    h3 {
        @apply mb-[2px] text-bcXl font-medium leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
</style>
