<template>
    <section class="max-w-[1000px] transition-all">
        <h2 class="numberedHeading">Things I've Built</h2>
        <ul>
            <Project
                v-for="post in projects"
                :key="post.id"
                :order="post.order"
                :title="post.title"
                :githubUrl="post.githubUrl"
                :demoLink="post.demoLink"
                :previewTexts="post.previewTexts"
                :thumbnailUrl="post.thumbnailUrl"
                :tags="post.tags"
            />
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: "project-1",
                    order: 0,
                    title: "CS Marketplace",
                    githubUrl: null,
                    demoLink: "",
                    previewTexts: [{
                        point1: "Built a containerized partner marketplace platform enabling external partners to integrate services within the CS main platform using isolated microfrontend architecture. Also built an internal UI component library with shared utilities and integration helpers to standardize implementation across partner projects.",
                    }],
                    thumbnailUrl: require("/static/img/first-project.png"),
                    tags: ["Webpack Module Federation", "JavaScript", "React", "Npm", "Tailwind", "Bootstrap"],
                },
                {
                    id: "project-2",
                    order: 1,
                    title: "DevTaskHub",
                    githubUrl: "https://github.com/ayatakinci/DevTaskHub",
                    demoLink: "",
                    previewTexts: [{
                        point1: "A multi-tenant SaaS management platform with organization/workspace hierarchy, role-based access control, and a drag-and-drop Kanban board. Implemented S3 file attachments and a partner portal using Module Federation for external collaborator access with automated testing and OIDC authentication.",
                    }],
                    thumbnailUrl: require("/static/img/second-project.png"),
                    tags: ["TypeScript", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS"],
                },
                {
                    id: "project-3",
                    order: 0,
                    title: "Component & Helper Libraries",
                    githubUrl: null,
                    demoLink: "",
                    previewTexts: [{
                        point1: "Built an internal UI component library with shared utilities and integration helpers to standardize implementation across partner projects.",
                    }],
                    thumbnailUrl: require("/static/img/third-project.png"),
                    tags: ["Tailwind", "React", "Npm", "Bootstrap"],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
a {
    @apply hover:text-bcColor;
}
</style>
