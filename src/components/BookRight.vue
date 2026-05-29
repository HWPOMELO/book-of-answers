<template>
    <div class="page right">
        <p class="text-right line">THE REVELATION 启示</p>
        <div>
            <p class="text-[#8b1e20] text-xl">心中所问 / THE QUESTION</p>
            <p class="animate-text text-2xl" :key="webStore.data.question">“ {{ webStore.data.question }}”</p>
        </div>
        <div>
            <p class="text-2xl text-[#858276]">诠释</p>
            <p class="text-4xl mt-8 animate-text" :key="webStore.data.answer">{{ webStore.data.answer }}</p>
        </div>
        <p class="text-right text-[#858276]">正文 · 01</p>
    </div>
</template>
AC
<script setup>
import { useWebStore } from '@/stores/web'
const webStore = useWebStore()
</script>
