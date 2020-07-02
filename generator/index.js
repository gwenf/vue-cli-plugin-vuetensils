module.exports = function(api, options) {
  const { preset } = options

  api.extendPackage({
    dependencies: {
      'vuetensils': '0.7.1'
    }
  })

  api.render('./templates', {
    preset
  })
}
