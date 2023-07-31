<template>
  <div class="tests">
      <div class="tests__header">
          <router-link to="/">
              <AppIcon padding="0" size="24px" :icon="arrowIcon" />
          </router-link>
          <h2 class="tests__title">Learning</h2>
      </div>
      <div class="tests__tabs">
          <h3 class="tests__tab">
              Tests
          </h3>
      </div>
      <div class="questions__container">
          <div v-for="question in questions"
               :key="question.number"
               class="question"
               @click="changePassed(question.number)">
                {{ question.number }}
                <img v-if="question.passed"
                     :src="checkIcon"
                     alt="check question"
                     class="question__check">
          </div>

      </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '@/store';
import AppIcon from '@/components/ui/AppIcon/index.vue';
import arrowIcon from '@/assets/icons/arrow-left.svg';
import checkIcon from '@/assets/icons/check.svg';

const questions = computed(() => store.getters.getQuestions());

function changePassed(questionNumber: number) {
    store.commit('setQuestionsPassed', questionNumber);
}
</script>

<style>
.tests {
    padding: 0 16px;
}
.tests__header {
    margin-top: 32px;
    display: flex;
    align-items: center;
    padding: 15px 0;
}

.tests__title {
    margin-left: 16px;
}
.tests__tabs {
    text-align: center;
}
.tests__tab {
    margin: 0 auto;
    padding: 14px 0;
    width: 109px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: rgb(var(--contrast));
    border-bottom: 2px solid rgb(var(--contrast));
}

.questions__container {
    width: 100%;
    margin-top: 26px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}
.question {
    width: 100%;
    height: 71px;
    position: relative;
    grid-column: span 1;
    font-size: 18px;
    line-height: 1.3;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0 0 4px 0 rgba(18, 25, 43, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
}

.question::after {
    position: absolute;
    display: block;
    content: "";
    width: 62px;
    height: 62px;
    background: url("../../src/assets/icons/Subtract.svg");
    background-size: contain;
    bottom: 0;
    right: 0;
}

.question__check {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    object-fit: cover;
    z-index: 2;
}
</style>
