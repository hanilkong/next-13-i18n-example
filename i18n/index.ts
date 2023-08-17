import i18next, { InitOptions, createInstance } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import mI18nManager from "./settings";

export const runsOnServerSide = typeof window === "undefined";

/**
 * i18n 초기화
 * @param {string} lng language 선택
 * @param {string} ns name space ex) common.json의 common
 * @param localePath 프로젝트 언어셋 폴더
 * @returns 셋팅 된 init i18n
 */
export const fnInitI18next = async (
  lng: string,
  ns: string | readonly string[] | undefined,
  localePath: string,
  options: InitOptions
) => {
  const i18nInstance = createInstance();
  mI18nManager.options = {
    lng,
    ns,
    ...options,
  };
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${localePath}/${language}/${namespace}.json`)
      )
    )
    .init({ ...mI18nManager.options });
  return i18nInstance;
};

export const fnInitI18nextClientSide = (localePath: string) =>
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${localePath}/${language}/${namespace}.json`)
      )
    )
    .init({
      ...mI18nManager.options,
      lng: undefined, // let detect the language on client side
      detection: {
        order: ["path", "htmlTag", "cookie", "navigator"],
      },
      preload: runsOnServerSide ? mI18nManager.languageList : [],
    });
