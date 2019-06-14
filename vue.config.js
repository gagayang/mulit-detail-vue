let path = require('path')
let glob = require('glob')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')

function getEntry(globPath) {
	let entries = {},
		basename, tmp, pathname;

	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp = entry.split('/').splice(-3);
		pathname = basename;

		entries[pathname] = {
			entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			title:  tmp[2],
			filename: tmp[2]
		};
	});
	return entries;
}

let pages = getEntry('./src/pages/**?/*.html');
module.exports = {
	lintOnSave: false, //禁用eslint
	productionSourceMap: false,
	pages,
	css: {
		extract: false
	},
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		index: 'home.html', //默认启动serve 打开page1页面
		open: true,
		host: '',
		port: 8088,
		https: false,
		hotOnly: false
	},
	configWebpack: {
		plugin:[
			new SkeletonPlugin({
				pathname: path.resolve(__dirname, './shell'),
				staticDir: path.resolve(__dirname, './dist'),
				routes: ['/'],
				excludes: ['.van-nav-bar', '.van-tabbar']
				
			})
		]
	},
	chainWebpack: config => {
		if(process.env.NODE_ENV !== 'development') {
			config.plugin('html').tap(opts => {
				opts[0].minify.removeComments = false
				return opts;
			})
		}
	}
	// chainWebpack: config => {
	// 	config.module
	// 	.rule('images')
	// 	.use('url-loader')
	// 	.loader('url-loader')
	// 	.tap(options => {
	// 		options.limit = 100
	// 		return options
	// 	})
	// 	Object.keys(pages).forEach(entryName => {
	// 		config.plugins.delete(`prefetch-${entryName}`);
	// 	});
	// 	if(process.env.NODE_ENV === "production") {
	// 		// config.plugin("extract-css").tap(() => [{
	// 		// 	path: path.join(__dirname, "./dist"),
	// 		// 	filename: "css/[name].[contenthash:8].css"
	// 		// }]);
	// 	}
	// 	console.log(config.css)
	// }
}