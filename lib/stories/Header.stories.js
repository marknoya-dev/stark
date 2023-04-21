"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _Header = require("./Header");
var _default = {
  title: 'Example/Header',
  component: _Header.Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
exports.default = _default;
var LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};
exports.LoggedIn = LoggedIn;
var LoggedOut = {};
exports.LoggedOut = LoggedOut;