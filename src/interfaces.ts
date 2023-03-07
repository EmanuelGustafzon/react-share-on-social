export interface ShareOnSocialProps {
  children: any;
  backdropColor?: string;
  closeText?: string;
  copyToClipboardText?: string;
  copySuccessText?: string;
  shareTo: IconListType;
  textToShare: string;
  link: string;
  linkTitle: string;
  linkMetaDesc?: string;
  linkFavicon?: string;
  openInWindow?: boolean;
  noReferer?: boolean;
  onSocialClick?: () => void;
}

export interface ShareData {
  textToShare: string;
  link: string;
  linkTitle: string;
  linkMetaDesc?: string;
  linkFavicon?: string;
}

export interface PopupProps {
  onClose;
  closeText?: string;
  copyToClipboardText?: string;
  copySuccessText?: string;
  shareTo: IconListType
  shareData: ShareData;
  onClick?;
  openInWindow?: boolean;
  noReferer?: boolean;
  fadeClass: string;
}

export interface IconProps {
  onClose;
  id: string;
  shareData: ShareData;
  onClick?;
  social: IconListType[string],
  openInWindow?: boolean;
  noReferer?: boolean;
}

export interface IconListType {
  [key: string]: {
    title: string;
    path: JSX.Element;
    url: (link: string, description: string, title: string) => string;
    color: string;
    viewBox?: string;
  };
}
