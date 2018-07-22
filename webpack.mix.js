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
		'node_modules/jquery/dist/jquery.js',
		'node_modules/flickity/dist/flickity.pkgd.js',
		'src/script.js'
	], 'public/script.js')
	.sass('src/style.scss', 'public')
	.options({
		processCssUrls: false
	});