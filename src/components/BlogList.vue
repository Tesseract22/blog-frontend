
<script setup lang="ts">
import { ref } from 'vue'
interface BlogPost {
    created_time?: number,
    modified_time?: number,
    title?: string,
    views?: number,
    author?: string,
    content?: string,
    published?: number,
    cover_url?: string,
    id: number,
}

function timeStampToString(UNIX_timestamp: number, include_hour: boolean): string {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    if (include_hour) {
	let hour = a.getHours();
	let min = a.getMinutes();
	let sec = a.getSeconds();
	time += ' ' + hour + ':' + min + ':' + sec ;
    }
    return time;
}

let blog_posts = ref([
    { title: "Title 1", created_time: 1715678827 }, 
    { title: "Title: 2", created_time: 1714866029 },
]);

</script>

<template>
    <main class="container mx-auto px-4 max-w-3xl pb-20">
	<!-- Recent Posts -->
	<section>
	    <div class="space-y-12">
		<!-- Post 1 -->
		<article v-for="post in blog_posts" class="post-card">
		    <div class="mb-3 flex items-center">
			<span class="text-sm text-gray-500">{{ timeStampToString(post.created_time, false) }}</span>
			<span class="mx-2 text-gray-400">•</span>
			<span class="text-sm text-gray-500">8 min read</span>
		    </div>
		    <h3 class="text-2xl font-bold mb-3">
			<a href="#" class="hover:text-indie-blue">{{ post.title }}</a>
		    </h3>
		    <p class="text-gray-700 mb-4">Navigating the ever-changing landscape of JavaScript frameworks and tools.</p>
		</article>
	    </div>
	</section>
    </main>
</template>
