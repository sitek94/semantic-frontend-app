module.exports = {
  branches: ['main', 'next', { name: 'alpha', prerelease: true }],
  plugins: [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ],
}
