<template>
  <div class="book-cover">
    <div class="book-stack">
      <div class="book-bar"></div>
      <BookLeft />
      <BookRight />
    </div>
  </div>
</template>

<script setup>
import BookLeft from '@/components/BookLeft.vue'
import BookRight from '@/components/BookRight.vue'
</script>
