import * as React from "react";
import mI18nManager from "../../i18n/settings";
import { dir } from "i18next";

interface ILanguageProps extends React.PropsWithChildren {
  params: {
    language: string;
  };
}

export async function generateStaticParams() {
  return mI18nManager.languageList.map((language) => ({ language }));
}

export default function RootLayout(props: ILanguageProps) {
  const {
    params: { language: propLanguage },
    children,
  } = props;
  mI18nManager.language = propLanguage;
  return (
    <html lang={propLanguage} dir={dir(propLanguage)}>
      <body>{children}</body>
    </html>
  );
}
