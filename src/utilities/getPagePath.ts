import { defaultLocale } from '../i18n/i18n';
import {sluglify} from '../utils/sluglify.ts';

export default function getPagePath(locale: string, directories:Array<string>, slug: string, addLeadingSlash: boolean = true){
  const leadingSlash = addLeadingSlash ? '/' : ''
  const localePath = locale === defaultLocale ? '' : `${locale}/`
  let directoryPath = ''
	directories.map((dir)=> directoryPath += `${ sluglify(dir)}/`)
  slug = `${sluglify(slug)}`
  return `${leadingSlash}${localePath}${directoryPath}${slug}`
}