import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Language } from './types';

type BlogEntry = CollectionEntry<'en_blog'>;

export async function getBlogEntry(_lang: Language): Promise<BlogEntry[]> {
    const blogEntries = await getCollection('en_blog');
    (blogEntries as BlogEntry[]).sort((a: BlogEntry, b: BlogEntry) => new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime());
    return blogEntries;
}

export async function getCategoryList(lang: Language):Promise<{ name: string; path: string; count: number }[]> {
    const categoryMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry(lang);
    blogEntries.forEach(entry => {
        const category = entry.data.categories;
        if (category) {
            if (!categoryMap[category]) {
                categoryMap[category] = { name: category, path: `/categories/${category}`, count: 0 };
            }
            categoryMap[category].count += 1;
        }
    });
    return Object.values(categoryMap);
}

export async function getArchiveLength(lang: Language):Promise<number> {
    const blogEntries = await getBlogEntry(lang);
    return blogEntries.length;
}
