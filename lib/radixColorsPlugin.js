const plugin = require("tailwindcss/plugin");
const colors = require("@radix-ui/colors");

const defaults = {
  scales: ["indigo", "slate", "violet", "cyan", "grass"],
  aliases: {
    main: "indigo",
    base: "slate",
  },
};

function mapScale(scaleName, { keyFn, valueFn, dark = false }) {
  const scale = colors[`${scaleName}${dark ? "Dark" : ""}`];
  return Object.fromEntries(
    Object.entries(scale).map(([stepName, stepValue]) => [
      keyFn({ scaleName, stepName, stepValue }),
      valueFn({ scaleName, stepName, stepValue }),
    ])
  );
}

const cssVariable = ({ scaleName, stepName }) =>
  `--${scaleName}-${stepName.replace(scaleName, "")}`;
const cssVariableFn = ({ scaleName, stepName }) =>
  `var(--${scaleName}-${stepName.replace(scaleName, "")})`;
const step = ({ scaleName, stepName }) => stepName.replace(scaleName, "");
const value = ({ stepValue }) => stepValue;

const radixColorsPlugin = plugin.withOptions(
  (options = {}) =>
    ({ addBase }) => {
      const { scales = defaults.scales } = options;

      scales.forEach((scaleName) => {
        addBase({
          ":root": mapScale(scaleName, { keyFn: cssVariable, valueFn: value }),
        });
      });

      scales.forEach((scaleName) => {
        addBase({
          "@media (prefers-color-scheme: dark)": {
            ":root": mapScale(scaleName, {
              keyFn: cssVariable,
              valueFn: value,
              dark: true,
            }),
          },
        });
      });
    },
  (options = {}) => {
    const { scales = defaults.scales, aliases = defaults.aliases } = options;

    const scaleColors = Object.fromEntries(
      scales.map((scaleName) => [
        scaleName,
        mapScale(scaleName, { keyFn: step, valueFn: cssVariableFn }),
      ])
    );

    const aliasColors = Object.fromEntries(
      Object.entries(aliases).map(([aliasName, scaleName]) => [
        aliasName,
        mapScale(scaleName, { keyFn: step, valueFn: cssVariableFn }),
      ])
    );

    return {
      theme: {
        colors: {
          revert: "revert",
          ...scaleColors,
          ...aliasColors,
        },
      },
    };
  }
);

module.exports = radixColorsPlugin;
