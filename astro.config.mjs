import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
    site: 'https://gilleland.ca',
    integrations: [
        starlight({
            title: 'Gilleland.ca',
            social: {
                github: 'https://github.com/dagilleland/dagilleland.github.io',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', link: '/guides/example/' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'Tour',
                    items: [
                        { label: 'Site Tour', link: '/tour/' },
                    ],
                }
            ],
            customCss: ['./src/tailwind.css'],
            plugins: [starlightBlog({
                // Values here are the defaults, unless otherwise specified.
                title: 'Blog',
                postCount: 5,
                recentPostCount: 10,
                authors: {
                    dan: {
                        name: 'Dan Gilleland',
                        title: 'Owner of Gilleland.ca',
                        picture: '/DanGilleland.jpg',
                        url: 'https://gilleland.ca',
                    }
                },
                prevNextLinksOrder: 'reverse-chronological',
                prefix: 'blog', // BTW, this means "look under src/content/blog",

            })],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
