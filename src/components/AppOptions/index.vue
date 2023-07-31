<template>
    <div class="options">
        <div class="options__option" v-for="option in options" :key="option.text">
            <AppIcon
                padding="15px"
                bg-color="rgb(var(--contrast))"
                size="28px"
                :icon="option.icon"/>
            <span class="options__text">{{ option.text }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon/index.vue';
import penIcon from '@/assets/icons/pen.svg';
import statisticIcon from '@/assets/icons/statistic.svg';
import bookIcon from '@/assets/icons/book.svg';
import favoritesIcon from '@/assets/icons/favorites.svg';

const options = [
    {
        icon: penIcon,
        text: 'Mistakes',
    },
    {
        icon: statisticIcon,
        text: 'Statistics',
    },
    {
        icon: bookIcon,
        text: 'Highway Code',
    },

    {
        icon: favoritesIcon,
        text: 'Favorites',
    },
];
</script>

<style scoped>
.options {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}
.options__option {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.options__text {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
}
</style>
