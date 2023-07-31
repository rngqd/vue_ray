<template>
    <div class="course">
        <div class="course__container">
            <AppIcon :icon="capIcon"
                     bg-color="rgba(var(--contrast), 0.5)"
                     padding="13px"
                     size="32px"
            />
            <div class="course__info">
                <router-link to="/about" class="course__name">
                    <p>Learning</p>
                </router-link>
                <div class="course__category">Category В</div>
            </div>
            <router-link to="/about">
                <img :src="arrowIcon"
                     alt="course read icon"
                     class="course__btn">
            </router-link>
        </div>
        <div class="course__statistic">
            {{ passedQuestions.length }} questions out of {{ questions.length }} passed
        </div>
        <div class="course__progress" ref="progress">
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
            <div class="course__progress-cell"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    computed,
    onMounted,
    ref,
    watch,
} from 'vue';
import AppIcon from '@/components/ui/AppIcon/index.vue';
import capIcon from '@/assets/icons/cap.svg';
import arrowIcon from '@/assets/icons/right.svg';
import store from '@/store';
import { IQuestions } from '@/models';

const questions = computed(() => store.getters.getQuestions());

const passedQuestions = computed(() => {
    return questions.value.filter((item: IQuestions) => item.passed);
});
const progress = ref<HTMLDivElement>();

const cells = computed(() => progress.value?.querySelectorAll('.course__progress-cell') || []);
const percent = computed(() => {
    return (passedQuestions.value.length * 100) / questions.value.length;
});

function markCells() {
    const cellPercent = (100 / cells.value?.length);
    if (!cellPercent) return;
    const cellCount = Math.trunc(percent.value / cellPercent);
    console.log(percent.value, cellPercent);
    cells.value.forEach((cell: Element, idx:number) => {
        if (idx < cellCount) {
            cell.classList.add('course__progress-cell_active');
        } else {
            cell.classList.remove('course__progress-cell_active');
        }
    });
}

onMounted(() => {
    markCells();
});

watch(
    () => percent.value,
    () => markCells(),
);

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
