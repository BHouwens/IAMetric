module.exports = {
    plugins: [
        require('autoprefixer'),
        require('rucksack-css'),
        require('postcss-css-variables'),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-sassy-mixins'),
        require('postcss-colour-functions'),
        require('css-mqpacker')
    ]
}