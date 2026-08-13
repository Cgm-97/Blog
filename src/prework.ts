import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'articles'>;

export async function getBlogEntry(): Promise<BlogEntry[]> {
    const blogEntries = await getCollection('articles');
    (blogEntries as BlogEntry[]).sort((a: BlogEntry, b: BlogEntry) => new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime());
    return blogEntries;
}

export async function getCategoryList(): Promise<{ name: string; path: string; count: number }[]> {
    const categoryMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry();
    blogEntries.forEach(entry => {
        const category = entry.data.categories;
        if (category) {
            if (!categoryMap[category]) {
                categoryMap[category] = { name: category, path: `/categories/${encodeURIComponent(category)}`, count: 0 };
            }
            categoryMap[category].count += 1;
        }
    });
    return Object.values(categoryMap);
}

export async function getTagList(): Promise<{ name: string; path: string; count: number }[]> {
    const tagMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry();

    blogEntries.forEach(entry => {
        const tags = entry.data.tags;
        const tagList = Array.isArray(tags) ? tags : typeof tags === 'string' ? [tags] : [];

        tagList.forEach(tag => {
            if (!tagMap[tag]) {
                tagMap[tag] = { name: tag, path: `/tags/${encodeURIComponent(tag)}`, count: 0 };
            }
            tagMap[tag].count += 1;
        });
    });

    return Object.values(tagMap).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getArchiveLength(): Promise<number> {
    const blogEntries = await getBlogEntry();
    return blogEntries.length;
}