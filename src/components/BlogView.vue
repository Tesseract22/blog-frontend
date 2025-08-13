<script setup lang="ts">
import type { BlogPost } from './BlogPost.ts'
import { timeStampToString, postIdToUrl } from './BlogPost.ts'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { marked } from 'marked'
import type { Token } from 'marked'
import markedKatex from "marked-katex-extension";
const props = defineProps({
    id: {
	type: Number,
	required: true
    }
})

const blog_content_marked = ref('')
const blog_post: Ref<BlogPost | null> = ref(null);
const tailwind_renderer = {
  heading({ tokens, depth }: any): string {
    const text: string = (this as any).parser.parseInline(tokens);
    
    // Define class mappings for each heading level
    const headingClasses: Record<number, string> = {
      1: 'text-3xl md:text-4xl font-bold mb-6',       // h1
      2: 'text-2xl md:text-3xl font-bold mb-5',       // h2
      3: 'text-xl md:text-2xl font-semibold mb-4',    // h3
      4: 'text-lg md:text-xl font-semibold mb-3',     // h4
      5: 'text-base md:text-lg font-medium mb-2',     // h5
      6: 'text-sm md:text-base font-medium mb-1'      // h6
    };

    // Get the appropriate classes for the current depth
    const classes = headingClasses[depth] || headingClasses[6]; // Fallback to h3 style
    
    return `
      <h${depth} class="${classes}">
        ${text}
      </h${depth}>`;
  },
};

const tailwind_opt = { renderer: tailwind_renderer };

marked.use({
    ...tailwind_opt,
    ...markedKatex()
});
onMounted(() => {
    fetch('/post/' + props.id)
    .then(res => res.json())
    .then(post => {
	blog_post.value = post;
	return marked.parse(post.content);
    })
    .then(content => blog_content_marked.value = content)
    .catch(err => console.error(err));
})


</script>

<script lang="js">

</script>

<template>

    <main class="container mx-auto px-4 max-w-3xl pb-20">

	<!-- Post Title -->
	<h1 class="text-3xl md:text-4xl font-bold mb-6 font-mono">
	    {{ blog_post?.title! }}
	</h1>

	<div class="mb-4 flex items-center">
	    <span class="text-sm text-gray-500">created •</span>
	    <span class="text-sm text-gray-500">{{ timeStampToString(blog_post?.modified_time!, true) }}</span>
	</div>
	<div class="mb-4 flex items-center">
	    <span class="text-sm text-gray-500">last edit •</span>
	    <span class="text-sm text-gray-500">{{ timeStampToString(blog_post?.modified_time!, true) }}</span>
	</div>
	<article class="prose prose-lg max-w-none" v-html="blog_content_marked">
	</article>
    </main>
</template>
