let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
		'./node_modules/slick-carousel/slick/slick.js',
		'./assets/script.js'
	], 'assets/compiled/script.js')
	.sass('assets/style.scss', 'assets/compiled')
	.options({
		processCssUrls: false
	});