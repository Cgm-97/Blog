import type { Language, SiteConfig } from './types';

const configEn = {
    title: "Cgm's Blog",
    description: "🚩CTF Player @ RCEs \n Goal: NTUST(NTU) CSIE x ECE \n 一個正在資工系熬夜爆肝的高三生",
    keywords: "CTF, Development, Electronics",
    author: "Cgm._.97",
    copy: {
        enable: true,
        copyright: {
            enable: false,
            limit_count: 50
        }
    },
    language: "en" as const,
    source_dir: "source",
    public_dir: "public",
    tag_dir: "tags",
    archive_dir: "archives",
    category_dir: "categories",
    subtitle: {
        enable: true,
        effect: true,
        typed_option: null,
        source: false,
        sub: ["Capture the Flag"]
    },
    menu: {
        "Archives": "/archives/ || fas fa-archive",
        "Categories": "/categories/ || fas fa-folder-open",
        "Link": "/link/ || fas fa-link",
        "About": "/board/ || fas fa-user"
    },
    aside: {
        card_announcement: {
            content: 'Hello. \n <a href="https://astro.build/themes/details/astrofly/" target="_blank">Themes</a>'
        }
    },
    date_format: "YYYY-MM-DD",
    per_page: 10
} satisfies SiteConfig;

export const getConfig = (_language: Language): SiteConfig => {
    return configEn;
};
