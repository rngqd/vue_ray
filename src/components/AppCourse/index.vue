<template>
    <div class="course">
        <div class="course__container">
            <AppIcon :icon="capIcon"
                     bg-color="rgba(var(--contrast), 0.5)"
                     padding="13px"
                     size="32px"
            />
            <div class="course__info">
                <router-link to="/tests" class="course__name">
                    <p>Learning</p>
                </router-link>
                <div class="course__category">Category В</div>
            </div>
            <router-link to="/tests">
                <img :src="arrowIcon"
                     alt="course read icon"
                     class="course__btn">
            </router-link>
        </div>
        <div class="course__statistic">
            {{ passedQuestions.length }} questions out of {{ questions.length }} passed
        </div>
        <div class="course__progress">
            <div v-for="number in CELL_COUNT"
                 :key="number"
                 :class="`course__progress-cell
                 ${checkCellActive() >= number ? 'course__progress-cell_active' : ''}`"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '@/store';
import { IQuestions } from '@/models';
import AppIcon from '@/components/ui/AppIcon/index.vue';
import capIcon from '@/assets/icons/cap.svg';
import arrowIcon from '@/assets/icons/right.svg';

const CELL_COUNT = 7;
const MAX_PERCENT = 100;
const CELL_PERCENT = MAX_PERCENT / CELL_COUNT;

const questions = computed(() => store.getters.getQuestions());

const passedQuestions = computed(() => {
    return questions.value.filter((item: IQuestions) => item.passed);
});

const percent = computed(() => {
    return (passedQuestions.value.length * MAX_PERCENT) / questions.value.length;
});

function checkCellActive() {
    return Math.trunc(percent.value / CELL_PERCENT);
}
</script>

<style>
.course {
    padding: 24px;
    background-color: #FFF;
    border-radius: 20px;
    border: 1px solid var(--border);
}

.course__container {
    display: flex;
    align-items: center
}

.course__info {
    width: 100%;
    margin-left: 16px;
}

.course__name {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    text-decoration: none;
}

.course__name:visited {
    color: rgb(var(--textPrimary));
}

.course__category {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: var(--textSecondary);
}

.course__statistic {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.4;
}

.course__btn {
    width: 24px;
    height: 24px;
}

.course__progress {
    margin-top: 8px;
    display: flex;
    gap: 4px;
}

.course__progress-cell {
    border-radius: 5px;
    width: 100%;
    height: 6px;
    background: rgba(var(--mainGreen), 0.1);
}

.course__progress-cell_active {
    background: rgb(var(--mainGreen));
}
</style>
