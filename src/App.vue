<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import store from '@/store';

onMounted(() => {
    store.dispatch('fetchQuestions');
});
</script>

<style>
:root {
    --secondary: 255,227,221;
    --contrast: 255, 115, 85;
    --mainGreen: 82, 167, 84;
    --mainPurple: 107, 42, 188;
    --mainRed: 255, 32, 69;
    --textPrimary: 44, 45, 46;
    --textSecondary: 135, 137, 143;
    --border: 243, 243, 243;
}
h1,h2,h3,h4,h5,h6,p {
    margin: 0;
}

#app {
    width: 100%;
    height: 808px;
    max-width: 360px;
    min-width: 320px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Inter, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    border: 1px solid grey;
    margin: 0 auto;
    background-color: #f8f8f8;
    color: var(--textPrimary);
}

#nav {
    position: absolute;
    text-align: center;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
}

#nav a {

    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: var(--mainPurple);
}
</style>
