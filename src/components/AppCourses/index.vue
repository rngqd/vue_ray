<template>
    <div class="courses">
        <appBtn  v-for="course in courses"
                  :key="course.text"
                  :icon="course.icon"
                  :icon-bg="`rgba(var(--${course.color}), 0.1)`"
                  :text="course.text"/>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/AppBtn/index.vue';
import lIcon from '@/assets/icons/l.svg';
import rocketIcon from '@/assets/icons/rocket.svg';
import controllerIcon from '@/assets/icons/controller.svg';
import turnIcon from '@/assets/icons/turn.svg';
import tvIcon from '@/assets/icons/tv.svg';

const courses = [
    {
        icon: lIcon,
        color: 'mainRed',
        text: 'DVSA Exam',
    },
    {
        icon: rocketIcon,
        color: 'mainPurple',
        text: 'Express mode',
    },
    {
        icon: tvIcon,
        color: 'mainPurple',
        text: 'Hazard perception',
    },
    {
        icon: turnIcon,
        color: 'mainPurple',
        text: 'Road signs',
    },
    {
        icon: controllerIcon,
        color: 'mainPurple',
        text: 'Multiplayer Learning',
    },
];

</script>

<style>
.courses {
    margin-top: 24px;
    display: grid;
    width: 100%;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
}
.courses__course_big{
    grid-column: span 2;
}
</style>
