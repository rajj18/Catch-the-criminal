module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "D:/Catch-the-criminal/frontend/styleMock.js",
    },
        transform: {
          "^.+\\.jsx?$": "babel-jest",
        },
          
  };
  