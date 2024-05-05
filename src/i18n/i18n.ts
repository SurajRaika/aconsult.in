export type Locale = "en" | "hn" | "gj" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "en"
export const locales = ["en", "hn", "gj"]
export const fallback: Fallback = {
	hn: "en",
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		gj: 'blog',
		hn: 'blog'
	},
}
export const directoryNames: PathNames = {
	// Define the path for the tag pages (tags list, posts per tag).
	tags: {
		en: 'tag',
		gj: 'thema',
		hn: 'onderwerp'
	},
	// Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
	people: {
		en: 'about',
		gj: 'ueber',
		hn: 'over'
	}
}