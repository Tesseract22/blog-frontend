<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './Header.vue'
import BlogList from './components/BlogList.vue'
</script>

<template>
    <div class="bg-indie-light text-indie-dark font-sans">
	<Header />
	<BlogList />
    </div>
</template>
