import { useTranslationServerSide } from "../../../hooks";
import mI18nManager from "../../../i18n/settings";

export default async function Page() {
  const { t } = await useTranslationServerSide(mI18nManager.language, [
    "common",
  ]);
  return (
    <section>
      <h1>{t("second", { ns: "common" })}</h1>
    </section>
  );
}
