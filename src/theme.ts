import type { ThemeConfig } from './types';

export const theme: ThemeConfig = {
    footer: {
        owner: {
            enable: true,
            since: 2025,
        },
        custom_text: '',
        copyright: true,
    },
    display_mode: 'light',
    avatar: {
        img: "/img/Profile.png",
        effect: false
    },
    error_img: {
        flink: "",
        post_page: ""
    },
    index_img: '/img/Desk.png',
    archive_img: '/img/Desk.png',
    category_img: '/img/Desk.png',
    nav: {
        logo: null,
        display_title: true,
        fixed: false
    },
    subtitle: {
        enable: true,
        effect: true,
        typed_option: null,
        source: false,
        sub: [
            "ERROR",
        ]
    },
    social: {
        "fab fa-github": "https://github.com/Cgm-97 || Github || '#24292e'",
        "fab fa-instagram": "https://www.instagram.com/cgm._.97/ || Instagram || '#f50021'",
    },
    preloader: {
        enable: false,
        source: 1,
        pace_css_url: null
    },
    favicon: "/img/title.jpg",
    aside: {
        enable: true,
        hide: false,
        button: true,
        mobile: true,
        position: "right",
        display: {
          archive: true,
          tag: true,
          category: true
        },
        card_author: {
          enable: true,
          description: null,
          button: {
            enable: true,
            icon: "fab fa-github",
            text: "Find Me",
            link: "https://github.com/Cgm-97"
          }
        },
        card_announcement: {
          enable: true,
          content: "Hello"
        },
        card_recent_post: {
          enable: true,
          limit: 5,
          sort: "date",
          sort_order: null
        },
        card_categories: {
          enable: true,
          limit: 8,
          expand: "none",
          sort_order: null
        },
        card_tags: {
          enable: true,
          limit: 40,
          color: false,
          orderby: "random",
          order: 1,
          sort_order: null
        },
        card_archives: {
          enable: true,
          type: "monthly",
          format: "MMMM YYYY",
          order: -1,
          limit: 8,
          sort_order: null
        },
        card_webinfo: {
          enable: true,
          post_count: true,
          last_push_date: true,
          sort_order: null
        },
        card_post_series: {
          enable: true,
          orderBy: "date",
          order: -1
        }
    },
    post_meta: {
        page: {
          date_type: "created",
          date_format: "date",
          categories: true,
          tags: false,
          label: true
        },
        post: {
          position: "left",
          date_type: "both",
          date_format: "date",
          categories: true,
          tags: true,
          label: true
        }
    },
    default_top_img: "/img/Desk.png",
    lazyload: {
        enable: true,
        field: 'site',
        placeholder: null,
        blur: false
    },
    toc: {
        post: true,
        page: false,
        number: true,
        expand: false,
        style_simple: false,
        scroll_percent: true
    },
    rightside_item_order: {
        enable: false,
        hide: null,
        show: null
    },
    waline: {
        serverURL: "",
        bg: "mysql",
        pageview: true,
        option: null
    }
};
