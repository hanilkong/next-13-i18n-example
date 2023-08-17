import { InitOptions } from "i18next";

/**
 * * i18n manager
 */
class I18nManager {
  // language 기본 값
  #fallbackLng: string;

  // 현재 language
  #language: string;

  // 기본 namespace
  #defaultNs: string | readonly string[] | undefined;

  // i18n option
  #i18nOptions: InitOptions;

  // 언어 리스트
  #languageList: string[];

  constructor() {
    this.#language = "ko";
    this.#fallbackLng = "ko";
    this.#languageList = [this.#fallbackLng, "en"];
    this.#defaultNs = "common";
    this.#i18nOptions = {
      // debug: true,
      defaultNS: this.#defaultNs,
      fallbackLng: this.#fallbackLng,
      lng: this.#fallbackLng,
      ns: this.#defaultNs,
      supportedLngs: this.#languageList,
      fallbackNS: this.#defaultNs,
    };
  }

  set options(argOptions: InitOptions) {
    this.#i18nOptions = {
      ...this.#i18nOptions,
      ...argOptions,
    };
  }

  get options(): InitOptions {
    return this.#i18nOptions;
  }

  set language(lan: string) {
    this.#language = lan;
  }

  get language(): string {
    return this.#language;
  }

  get languageList(): string[] {
    return this.#languageList;
  }

  get fallbackLng(): string {
    return this.#fallbackLng;
  }
}

const mI18nManager = new I18nManager();

export default mI18nManager;
