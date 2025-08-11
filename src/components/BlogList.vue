
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import type { Ref, Reactive } from 'vue'
import type { BlogPost } from './BlogPost.ts'
import { timeStampToString, postIdToUrl } from './BlogPost.ts'
import { RouterLink, RouterView } from 'vue-router'

let blog_posts: Ref<BlogPost[]> = ref([]);
onMounted(() => {
    console.log("here");
    fetch('/post')
    .then(res => res.json())
    .then(data => blog_posts.value = data)
});
</script>

<template>
    <main class="container mx-auto px-4 max-w-3xl pb-20">
	<!-- Recent Posts -->
	<section>
	    <div class="space-y-12">
		<!-- Post 1 -->
		<article v-for="post in blog_posts" class="post-card">
		    <div class="mb-3 flex items-center">
			<span class="text-sm text-gray-500">{{ timeStampToString(post.created_time!, false) }}</span>
			<span class="mx-2 text-gray-400">•</span>
			<span class="text-sm text-gray-500">8 min read</span>
		    </div>
		    <h3 class="text-2xl font-bold mb-3">
			<RounterLink :to="postIdToUrl(post.id)" class="hover:text-indie-blue">{{ post.title }}</RounterLink>
		    </h3>
		    <p class="text-gray-700 mb-4">{{ post.content }}</p>
		</article>
	    </div>
	</section>
    </main>
</template>
