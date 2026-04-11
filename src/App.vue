<template>
  <div class="h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-3/4 h-3/4 bg-white rounded-4xl shadow-xl p-16 space-y-8">
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-gray-900">答案之书</h1>
        <p class="text-xl text-gray-400">想要获得人生问题的神秘答案吗？</p>
      </div>
      <div class="flex gap-4 w-full">
        <input type="text" placeholder="请输入您的问题" ref="ipu"
          class="text-xl grow p-8 border w-3/4 border-gray-200 rounded-xl focus:outline-blue-400"
          v-model.trim="question" @keyup.enter="handleClick">
        <button class="text-xl px-8 w-1/4 bg-blue-400 text-white rounded-xl hover:bg-blue-800" @click="handleClick">
          提交
        </button>
      </div>
      <div class="w-full h-2/3 border border-gray-200 rounded-4xl flex flex-col justify-center items-center">
        <p v-if="data" class="text-2xl  text-gray-400">{{ data.question }}</p>
        <p v-if="data" class="text-4xl  font-extrabold">{{ data.answer }}</p>
      </div>
      <div class="text-center text-gray-400">&copy;答案之书 2026</div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const ipu = ref(null)
const question = ref()
const apiUrl = 'https://uapis.cn/api/v1/answerbook/ask'
const data = ref()
const handleClick = async () => {
  if (question.value) {
    ipu.value.blur()
    const res = await (axios.get(apiUrl, { params: { question: question.value } }))
    data.value = res.data
    question.value = ''
  }
  else data.value = { question: '', answer: '您的问题是什么?' }
}
</script>
