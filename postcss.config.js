module.exports = () => ({
    plugins: {
        autoprefixer: {},
        'postcss-preset-env': {
            stage: 0,
            features: {
                'custom-properties': false,
                'nesting-rules': false
            }
        },
        'postcss-functions': {
            functions: {
                em: function (value, base = 16) {
                    const _value = String(value).split('px')[0]
                    const _base = String(base).split('px')[0]
                    return `${_value / _base}em`
                }
            }
        }
    }
})
