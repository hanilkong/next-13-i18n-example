"use client";

import * as React from "react";
import { useTranslationClientSide } from "../../hooks";
import mI18nManager from "../../i18n/settings";
import Link from "next/link";

export default function Page() {
  const { t } = useTranslationClientSide(mI18nManager.language, [
    "test1",
    "test",
  ]);
  return (
    <section>
      <h1>{t("hello", { ns: "common" })}</h1>
      <h1>{t("testStr", { ns: "test" })}</h1>
      <h1>{t("testStr1", { ns: "test1" })}</h1>
      <Link href={`${mI18nManager.language}/second`}>second</Link>
    </section>
  );
}
