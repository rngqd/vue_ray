<template>
    <img :src="icon"
         alt="app icon"
         class="icon"
         :style="{
            padding: padding,
            width: size,
            height: size,
            minWidth: size,
            minHeight: size,
            backgroundColor: bgColor || 'transparent',
            borderRadius: radius || 'auto'
        }"
    >
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    size: string
    padding: string,
    icon: string,
    bgColor?: string,
    radius?: string,
}>();
</script>

<style>
.icon {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
</style>
