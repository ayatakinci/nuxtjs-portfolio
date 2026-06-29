<template>
    <div>
        <SectionsHero id="hero" v-animate-on-scroll />

        <SectionsAbout id="about" v-animate-on-scroll />

        <SectionsJobs id="jobs" v-animate-on-scroll />

        <SectionsProjects id="works" v-animate-on-scroll />

        <SectionsContact id="contact" v-animate-on-scroll />
    </div>
</template>

<script>
export default {
    scrollToTop: true,
};
</script>

<style>
</style>
