module.exports = [
  {
    name: 'preset',
    message: 'Where do you want to use your Vuetensils components?',
    type: 'list',
    choices: [
      { name: 'Global', value: 'global' },
      { name: 'Local', value: 'local' }
    ],
    default: 'global'
  }
]