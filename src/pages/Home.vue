<template>
    <div class="learning">
        <AppHeader />
        <AppCourse />
        <AppCourses />
        <AppOptions/>
        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader/index.vue';
import AppCourse from '@/components/AppCourse/index.vue';
import AppCourses from '@/components/AppCourses/index.vue';
import AppOptions from '@/components/AppOptions/index.vue';
import AppFooter from '@/components/AppFooter/index.vue';

</script>

<style>
.learning {
    padding: 16px;
}
</style>
