<template>
  <div class="container">
    <h1>Форма отправки POST-запроса</h1>
    
    <div>
      <label for="first_name">Имя</label>
      <input 
        type="text" 
        id="first_name" 
        v-model="store.firstname"
        placeholder="Введите ваше имя" 
        required 
      />
    </div>

    <div>
      <label for="second_name">Фамилия</label>
      <input 
        type="text" 
        id="second_name" 
        v-model="store.secondname"
        placeholder="Введите вашу фамилию" 
        required 
      />
    </div>

    <button type="submit" @click="store.sendmessage()">Отправить</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/store'
const store = useCounterStore()
</script>

<style scoped>
.container { padding: 20px; max-width: 400px; }
div { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; font-weight: bold; }
input { width: 100%; padding: 8px; box-sizing: border-box; }
button { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; }
</style>