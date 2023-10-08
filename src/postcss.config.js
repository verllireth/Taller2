const tailwindcss = require('tailwindcss');

module.exports = {
    pliguins:[
        tailwindcss('./tailwindcss.confing.js'),
        require('autoprefixer')
    ]
}