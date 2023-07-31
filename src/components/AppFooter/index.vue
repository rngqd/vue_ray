<template>
    <div class="learning__footer footer">
        <div class="footer__btn" v-for="btn in footerBtns" :key="btn.text">
            <AppIcon
                padding="8px"
                size="24px"
                :icon="btn.icon"/>
            <span class="footer__text">{{ btn.text }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/ui/AppIcon/index.vue';
import homeIcon from '@/assets/icons/home.svg';
import routeIcon from '@/assets/icons/route.svg';
import rankingIcon from '@/assets/icons/ranking.svg';
import userIcon from '@/assets/icons/user.svg';

const footerBtns = [
    {
        icon: homeIcon,
        text: 'Home',
    },
    {
        icon: routeIcon,
        text: 'Your plan',
    },
    {
        icon: rankingIcon,
        text: 'Leaderboard',
    },
    {
        icon: userIcon,
        text: 'Profile',
    },
];

const selectedRoute = footerBtns[0].text;
</script>

<style scoped>

.footer {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 16px;
    position: fixed;
    bottom: 16px;
    left: 0;
    border-radius: 24px 24px 0 0;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
}

.footer__btn {
    display: flex;
    flex-direction: column;
    align-items: center
}

.footer__text {
    margin-top: 4px;
    font-size: 12px;
    color: rgb(var(--textSecondary));
    font-weight: 500;
    line-height: 1.16;
    text-align: center;
}
</style>
