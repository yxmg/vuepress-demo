module.exports = {
    title: 'Banggood CRM',
    description: 'BG front end',
    base: '/vuepress-demo/docs/',
    configureWebpack: {
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