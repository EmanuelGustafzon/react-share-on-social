import React from "react";
import favicon from "../assets/favicon.png";
import ReactSocialShare from "../src/index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "ReactSocialShare",
  component: ReactSocialShare,
  argTypes: {
    children: {
      description: "The JSX element that triggers the popup on click.",
      table: {
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};

export const Default = ReactSocialShare.bind({});
Default.args = {
  children: <button>Share 🔗</button>,
  closeText: "Stäng",
  copyToClipboardText: "Kopiera länken till testet",
  copySuccessText: "Länk kopierad",
  linkMetaDesc: " Test and learn about the security of your internet habits with Nätklok.",
  link: "https://natklok.sakerhetskollen.se",
  linkFavicon: favicon,
  linkTitle: "Nätklok | The test that makes you safe online.",
  textToShare: "Kolla in det här! ",
  openInWindow: true,
  onClick: () => console.log("share successful!"),
};
