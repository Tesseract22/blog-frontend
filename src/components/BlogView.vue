<script setup lang="ts">
import type { BlogPost } from './BlogPost.ts'
import { timeStampToString, postIdToUrl } from './BlogPost.ts'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
// import { marked } from 'marked'

const props = defineProps({
    id: {
	type: Number,
	required: true
    }
})

const blog_post: Ref<BlogPost | null> = ref(null);
onMounted(() => {
    fetch('/post/' + props.id)
    .then(res => res.json())
    .then(post => blog_post.value = post)
    .catch(err => console.error(err))
})


</script>

<template>

    <main class="container mx-auto px-4 max-w-3xl pb-20">
	{{ blog_post?.content }}
    </main>
</template>
