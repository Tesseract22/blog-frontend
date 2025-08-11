<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './Header.vue'
</script>

<template>
    <div class="bg-indie-light text-indie-dark font-sans">
	<Header />
	<RouterView />
    </div>
</template>
