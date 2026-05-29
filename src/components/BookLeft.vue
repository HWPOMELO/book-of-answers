<template>
    <div class="page left">
        <p class="text-left line">THE BOOK OF ANSWERS 答案之书</p>
        <div class="text-4xl">答案之书</div>
        <div class="text-left text-2xl">这是一本关于释怀与指引的媒介。当你心中饱含困惑、犹豫不决或者企图寻找某种共鸣时，请在心中默念你的问题五秒钟，并在下方亲手镌刻下它。</div>
        <div class="text-left text-xl text-[#858276]">注意：请闭上双眼，问出那些真正困扰你、且能够用“是”或“否”来回答的具象问题。转动钥匙，答案即在彼岸。</div>
        <input placeholder="将你的困惑写在纸上..." v-model.trim="webStore.question" @keyup.enter="webStore.handleQuestion"
            @keyup="handleQuestion" class="input text-xl">

        <p class="text-left text-[#858276]">扉页 · 启</p>
    </div>
</template>

<script setup>
import { useWebStore } from '@/stores/web'
const webStore = useWebStore()
</script>
