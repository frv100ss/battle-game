var paths = require('./config/paths');
module.exports = {
    entry: 'mocha!./src/tests/index.js',
    output: {
        filename: 'test.build.js',
        path: 'tests/',
        publicPath: 'http://' + 'localhost' + ':' + 8080 + '/tests'
    },
    module: {
        loaders: [
            // ** ADDING/UPDATING LOADERS **
            // The "url" loader handles all assets unless explicitly excluded.
            // The `exclude` list *must* be updated with every change to loader extensions.
            // When adding a new loader, you must add its `test`
            // as a new entry in the `exclude` list for "url" loader.

            // "url" loader embeds assets smaller than specified size as data URLs to avoid requests.
            // Otherwise, it acts like the "file" loader.
            {
                exclude: [
                    /\.html$/,
                    // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
                    // because you might change the hot reloading server from the custom one
                    // to Webpack's built-in webpack-dev-server/client?/, which would not
                    // get properly excluded by /\.(js|jsx)$/ because of the query string.
                    // Webpack 2 fixes this, but for now we include this hack.
                    // https://github.com/facebookincubator/create-react-app/issues/1713
                    /\.(js|jsx)(\?.*)?$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: 'babel',
                query: {

                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true
                }
            },
            // "postcss" loader applies autoprefixer to our CSS.
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // "style" loader turns CSS into JS modules that inject <style> tags.
            // In production, we use a plugin to extract that CSS to a file, but
            // in development "style" loader enables hot editing of CSS.
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=1!postcss'
            },
            // JSON is not enabled by default in Webpack but both Node and Browserify
            // allow it implicitly so we also enable it.
            {
                test: /\.json$/,
                loader: 'json'
            },
            // "file" loader for svg
            {
                test: /\.svg$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
            // ** STOP ** Are you adding a new loader?
            // Remember to add the new extension(s) to the "url" loader exclusion list.
        ]
    },
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
    },
    devServer: {
        host: 'localhost',
        port: 8080
    }
};


