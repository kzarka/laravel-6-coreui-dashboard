const mix = require('laravel-mix');

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
mix.webpackConfig({   
  	resolve: {      
    	alias: {
 			"@": __dirname + '/resources/assets/admin/coreui' 
    	}
  	}  
})
mix.js('resources/assets/admin/coreui/main.js', 'public/assets/admin/js')
    .sass('resources/assets/admin/coreui/assets/scss/style.scss', 'public/assets/admin/css');
