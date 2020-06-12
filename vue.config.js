const webpack = require('webpack');

module.exports = {
    devServer: {
        port: 9000
    },
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.common.js'
            }
        },
        entry: {
            // fafont: ['font-awesome/css/font-awesome.min.css'],
            vendor: [
                'bootstrap/dist/css/bootstrap.min.css',
                'summernote/dist/summernote-bs4.css'
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
};
