<template>
    <div class="header">
        <h1 class="header__title">Ray Driving Theory</h1>
        <div class="header__icons">
            <div class="header__icon">
                <AppIcon padding="" size="24px" :icon="crownIcon"/>
            </div>
            <div class="header__icon">
                <AppIcon padding="" size="24px" :icon="fireIcon"/>
                <span class="header__icon-text">13</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/ui/AppIcon/index.vue';
import crownIcon from '@/assets/icons/crown.svg';
import fireIcon from '@/assets/icons/fire.svg';
</script>

<style scoped>
.header {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}
.header__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
}
.header__icons {
    display: flex;
    gap: 8px;
}
.header__icon {
    padding: 4px 6px;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.header__icon-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
}
</style>
