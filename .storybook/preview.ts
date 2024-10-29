import "../src/app/globals.css";
import { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        doc: {
            controls: { exclude: ["controls"] },
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            showPanel: false,
            // page: () => (
            //   <>
            //     <Title />
            //     <Subtitle />
            //     <Description />
            //     <Controls  />
            //     <Stories />
            //   </>
            // ),
        },
    },
};

export default preview;
