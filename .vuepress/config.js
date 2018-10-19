module.exports = {
    title: 'Banggood CRM',
    description: 'BG front end',
    base: '',
    configureWebpack: {
        alias: {
            '@alias': 'path/to/some/dir'
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
        ],
        sidebar: [
            '/',
            '/about',
            ['/guide', '导向']
        ]
    },

}