module.exports = function(api) {
  // Caches the configuration to improve performance
  api.cache(true);

  return {
    // Presets used for transpiling the code
    presets: ['babel-preset-expo'],

    // Plugins used for additional functionality
    plugins: [
      'react-native-reanimated/plugin', // Adds support for react-native-reanimated
      'module:react-native-dotenv' // Adds support for loading environment variables from a .env file
    ]
  };
};
