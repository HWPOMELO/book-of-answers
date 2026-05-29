import axios from 'axios';
import { ref } from "vue";
import { defineStore } from "pinia";

export const useWebStore = defineStore('web', () => {
    const apiUrl = 'https://uapis.cn/api/v1/answerbook/ask'
    const question = ref()
    const data = ref({ question: '将你的困惑写在纸上...', answer: '您的困惑是?' })
    const handleQuestion = async () => {
        if (question.value) {
            const res = await (axios.get(apiUrl, { params: { question: question.value } }))
            data.value = res.data
            question.value = ''
        }
        else data.value = { question: '将你的困惑写在纸上...', answer: '您的困惑是?' }
    }

    return {
        question, data, handleQuestion
    }
})