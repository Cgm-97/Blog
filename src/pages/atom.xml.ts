import rss  from '@astrojs/rss';
import { getBlogEntry } from '@src/prework';
import { getConfig } from '@src/config';
import type { Language } from '@src/types';

const lang: Language = 'en';

export async function GET({ site }: { site: URL }) {
  const config = getConfig(lang);
  const blogs = await getBlogEntry(lang);
  return rss({
    title: config.title,
    description: config.description,
    site: `${site.origin}/`,
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.updated,
      description: post.data.description,
      link: `${site.origin}/posts/${post.data.abbrlink}`,
    })),
    customData: `<language>${lang}</language>`
  });
}
