import { getCollection } from 'astro:content'
import { getLocaleFromUrl } from '../i18n/utilities'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getPosts = async (max?: number, lang?: string) => {
	return (
	  await getCollection('blog')
	)
	  .filter(
		(post) =>
		  !post.data.draft && (!lang || getLocaleFromUrl(post.slug) === lang)
	  )
	  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
	  .slice(0, max);
  };
export const getRelatedPosts = (post:any,lang:String,posts:any) => {
	const MAX_POSTS = 3
	const lowercaseTags = post.data.tags.map((tag) => tag.toLowerCase())
	const relatedPosts = posts.filter(
		(p) => p.slug !== post.slug && p.data.tags.some((t) => lowercaseTags.includes(t.toLowerCase()))
	)
	return relatedPosts.slice(0, MAX_POSTS)
}
export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts.forEach((post) => {
		post.data.tags.forEach((tag) => {
			tags.add(tag.toLowerCase())
		})
	})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string,lang?:string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts.filter((post) => {
		return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag) && (!lang || getLocaleFromUrl(post.slug) === lang)
	})
}


export const getPostByCategory = async (category: string, lang?: string) => {
	const posts = await getPosts();
	const lowercaseCategory = category.toLowerCase();
	return posts.filter((post) => {
	  return (
		post.data.category.toLowerCase() === lowercaseCategory
		 && (!lang || getLocaleFromUrl(post.slug) === lang)
	  );
	});
  };

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
