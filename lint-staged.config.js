module.exports = {
  './**/*.{tsx,ts,js}?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,

  './**/*.{tsx,ts}?(x)': () => 'yarn typecheck',
};
