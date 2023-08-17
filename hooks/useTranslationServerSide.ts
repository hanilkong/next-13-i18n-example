import { InitOptions } from "i18next";
import { fnInitI18next } from "../i18n";
/**
 * * i18n을 사용 하기위한 custom hooks (server side)
 * * https://www.i18next.com/
 * @param {string} lng 언어셋팅
 * @param {string} ns namespace default 셋팅으로 되어있음
 * @param {string} options i18n options
 * @returns t: 언어셋 사용 ex) t('title')
 */
export async function useTranslationServerSide(
  argLng: string,
  argNs: string | string[] | undefined = undefined,
  i18nOptions: InitOptions = {}
) {
  const ns = argNs || "";
  const i18nextInstance = await fnInitI18next(
    argLng,
    ns,
    "project",
    i18nOptions
  );
  return {
    t: i18nextInstance.getFixedT(argLng, ns),
    i18n: i18nextInstance,
  };
}
