import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale] : string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	siteDescription: {
		en: 'All the basics for a brand-new blog.',
		gj: 'Die Basics für eine niegelnagelneues Blog',
		hn: 'De start voor een gloednieuw blog',
	},
	skipLink: {
		en: 'Skip to content',
		gj: 'Zum Inhalt springen',
		hn: 'Naar inhoud springen',
	},
	pageTranslationsAvailableIn: {
		en: 'This page is also available in',
		gj: 'Diese Seite gibt es auch auf',
		hn: 'Deze text is ook beschikbaar in het'
	},
	en: {
		en: 'English',
		gj: 'englisch',
		hn: 'Engels',
	},
	gj: {
		en: 'German',
		gj: 'deutsch',
		hn: 'Duits',
	},
	hn: {
		en: 'Dutch',
		gj: 'niederländisch',
		hn: 'Nederlands'
	},
	tagHeadingSingular: {
		en: 'Tag',
		gj: 'Thema',
		hn: 'Onderwerp'
	},
	tagHeadingPlural: {
		en: 'Tags',
		gj: 'Themen',
		hn: 'Onderwerpen'
	},
	postsPerTagPageDescription: {
		en: "Posts about",
		gj: 'Posts zum Thema',
		hn: 'Posts met onderwerp'
	},
	personProfilePageDescription: {
		en: "Profile of",
		gj: 'Profil von',
		hn: 'Profiel van'
	},
	pageNotFoundHeading: {
		en: 'Page not found',
		gj: 'Seite nicht gefunden',
		hn: 'Pagina niet gevonden'
	},
	pageNotFoundBody: {
		en: '404!',
		gj: '404!',
		hn: '404!'
	},
};