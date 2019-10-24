import { configure } from "@storybook/react";
import "./addons";

// automatically import all files ending in *.stories.js
configure(require.context("../src/lessons/15", true, /\.stories\.js$/), module);
