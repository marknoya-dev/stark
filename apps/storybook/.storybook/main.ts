import { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: { useSWC: true } },
  },

  stories: [
    {
      directory: "../stories",
      files: "*.stories.*",
    },
  ],
  staticDirs: ["./public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /.css$/,
            include: path.resolve(
              __dirname,
              "../../../package/stark/index.css"
            ),
            use: [
              {
                loader: "css-loader",
              },
              {
                loader: "postcss-loader",
                options: { implementation: "postcss" },
              },
            ],
          },
        ],
      },
    },
  ],
};
export default config;
