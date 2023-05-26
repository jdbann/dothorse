import textr from "textr";
import typgraphicBase from "typographic-base";

/** Can be used to define line breaking boundaries */
const zeroWidthSpace = "​";

/** Adds zero-width spaces to emailaddress.horse for nicer wrapping on narrow viewports. */
function breakSiteName(text: string) {
  return text.replaceAll(
    "emailaddress.horse",
    `email${zeroWidthSpace}address${zeroWidthSpace}.horse`
  );
}

const typographicTransformations = textr({ locale: "en-uk" })
  .use(typgraphicBase)
  .use(breakSiteName);

export default typographicTransformations;
