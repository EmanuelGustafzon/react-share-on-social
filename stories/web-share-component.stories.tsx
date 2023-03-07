import React from "react";
import favicon from "../assets/favicon.png";
import ShareOnSocial from "../src/index";

// import { iconList } from "../src/config/socials";

// iconList.test = {
//   title: 'Test',
//   path: (
//     <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
//   ),
//   viewBox: '0 0 16 16',
//   url: (link: string, description: string, title: string) => `http://example.com/?t=${link}`,
//   color: 'red'
// }

// /** @ts-ignore */
// iconList.whatsapp.url = (l, t) => {

//   return `https://web.whatsapp.com/send?text=${t} ${l}`
// }

// console.log(iconList)

//👇 This default export determines where your story goes in the story list
export default {
  title: "ShareOnSocial",
  component: ShareOnSocial,
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

export const Default = ShareOnSocial.bind({});
Default.args = {
  children: <button>Share 🔗</button>,
  closeText: "Stäng",
  // shareTo: iconList,
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
