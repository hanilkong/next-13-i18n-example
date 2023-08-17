"use client";

import React from "react";
import { useTranslation as useTranslationOrg } from "react-i18next";
import { InitOptions } from "i18next";
import { fnInitI18nextClientSide, runsOnServerSide } from "../i18n";

fnInitI18nextClientSide("project");
/**
 * * client side i18n hooks
 * @param {string} lng 언어셋팅
 * @param {string} ns namespace default 셋팅으로 되어있음
 * @param {string} options i18n options
 * @returns t: 언어셋 사용 ex) t('title')
 */
export function useTranslationClientSide(
  argLng: string,
  argNs: string | string[] | undefined = undefined,
  argOptions: InitOptions = {}
) {
  const ret = useTranslationOrg(argNs, argOptions);
  const { i18n } = ret;
  const [stateActiveLng, setStateActiveLng] = React.useState(
    i18n.resolvedLanguage
  );

  if (runsOnServerSide && argLng && i18n.resolvedLanguage !== argLng) {
    i18n.changeLanguage(argLng);
  }

  React.useEffect(() => {
    if (runsOnServerSide && argLng && i18n.resolvedLanguage !== argLng) return;
    if (stateActiveLng === i18n.resolvedLanguage) return;
    setStateActiveLng(i18n.resolvedLanguage);
  }, [stateActiveLng, argLng, i18n.resolvedLanguage]);

  React.useEffect(() => {
    if (runsOnServerSide && argLng && i18n.resolvedLanguage !== argLng) return;
    if (!argLng || i18n.resolvedLanguage === argLng) return;
    i18n.changeLanguage(argLng);
  }, [argLng, i18n]);

  return ret;
}
