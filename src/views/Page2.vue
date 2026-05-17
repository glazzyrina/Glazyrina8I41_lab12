<template>
  <div class="container">
    <h1>Данные с API</h1>
    <button @click="store.getApidata()">Загрузить пользователей</button>
    
    <ul v-if="store.fetchdata">
      <li v-for="item in store.fetchdata" :key="item.id">
        {{ item.name }} | {{ item.email }} | {{ item.address.city }}
      </li>
    </ul>
    <p v-else>Нажмите кнопку для загрузки...</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/store'
const store = useCounterStore()
</script>

<style scoped>
.container { padding: 20px; }
ul { list-style: none; padding: 0; }
li { padding: 5px 0; border-bottom: 1px solid #eee; }
button { padding: 10px 15px; margin-top: 10px; cursor: pointer; }
</style>