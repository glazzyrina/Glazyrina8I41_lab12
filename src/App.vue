<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/api">API</router-link> |
    <router-link to="/form">Форма</router-link>
  </nav>
  <router-view />
</template>

<style>
body { margin: 0; font-family: sans-serif; }
nav { padding: 15px; background: #eee; text-align: center; }
a { margin: 0 10px; text-decoration: none; color: #333; }
.router-link-active { color: #42b883; font-weight: bold; }
</style>