<template>
    <div :class="`button ${className}`">
        <AppIcon :icon="icon"
                 :bg-color="iconBg"
                 padding="8px"
                 size="24px"/>
        <p class="button__text">{{ text }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import AppIcon from '@/components/ui/AppIcon/index.vue';

const props = defineProps<{
    text: string,
    className?: string,
    icon: string,
    iconBg: string,
}>();
</script>

<style>
.button {
    padding: 16px 12px;
    background-color: #FFF;
    border-radius: 20px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center
}
.button__text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    margin-left: 8px;
}
</style>
