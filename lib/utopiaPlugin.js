const plugin = require("tailwindcss/plugin");

const defaults = {
  viewportMin: 316,
  fontSizeMin: 16,
  scaleMin: 1.25,
  viewportMax: 1172,
  fontSizeMax: 21,
  scaleMax: 1.5,
  steps: [-1, 0, 1, 2, 3, 4],
  spaces: {
    "3xs": 0.25,
    "2xs": 0.5,
    xs: 0.75,
    s: 1,
    m: 1.5,
    l: 2,
    xl: 3,
    "2xl": 4,
    "3xl": 6,
  },
  gutterMinSpace: "s",
  gutterMaxSpace: "m",
  columns: 12,
  columnMaxWidth: "xl",
};

const utopiaPlugin = plugin.withOptions(
  (options = {}) =>
    ({ addBase, addComponents }) => {
      const {
        viewportMin = defaults.viewportMin,
        fontSizeMin = defaults.fontSizeMin,
        scaleMin = defaults.scaleMin,
        viewportMax = defaults.viewportMax,
        fontSizeMax = defaults.fontSizeMax,
        scaleMax = defaults.scaleMax,
        steps = defaults.steps,
        spaces = defaults.spaces,
        gutterMinSpace = defaults.gutterMinSpace,
        gutterMaxSpace = defaults.gutterMaxSpace,
        columns = defaults.columns,
        columnMaxWidth = defaults.columnMaxWidth,
      } = options;

      addBase({
        ":root": {
          "--fluid-min-width": `${viewportMin}`,
          "--fluid-max-width": `${viewportMax}`,
          "--fluid-screen": "100vw",
          "--fluid-bp":
            "calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)))",
          [`@media screen and (min-width: ${viewportMax}px)`]: {
            "--fluid-screen": "calc(var(--fluid-max-width) * 1px)",
          },
          [`@media screen and (max-width: ${viewportMin}px)`]: {
            "--fluid-screen": "calc(var(--fluid-min-width) * 1px)",
          },
        },
      });

      steps.forEach((step) => {
        addBase({
          ":root": {
            [`--f-${step}-min`]: `${fontSizeMin * Math.pow(scaleMin, step)}`,
            [`--f-${step}-max`]: `${fontSizeMax * Math.pow(scaleMax, step)}`,
            [`--step-${step}`]: `calc(((var(--f-${step}-min) / 16) * 1rem) + (var(--f-${step}-max) - var(--f-${step}-min)) * var(--fluid-bp))`,
          },
        });
      });

      Object.entries(spaces).forEach(([spaceName, spaceScale]) => {
        addBase({
          ":root": {
            [`--fc-${spaceName}-min`]: `(var(--f-0-min) * ${spaceScale})`,
            [`--fc-${spaceName}-max`]: `(var(--f-0-max) * ${spaceScale})`,
            [`--space-${spaceName}`]: `calc(((var(--fc-${spaceName}-min) / 16) * 1rem) + (var(--fc-${spaceName}-max) - var(--fc-${spaceName}-min)) * var(--fluid-bp))`,
          },
        });
      });

      addBase({
        ":root": {
          "--grid-max-width": `calc(((var(--grid-columns) * var(--fc-${columnMaxWidth}-max) + (var(--grid-columns) + 1) * var(--fc-${gutterMaxSpace}-max)) / 16) * 1rem)`,
          "--grid-gutter": `calc(((var(--fc-${gutterMinSpace}-min) / 16) * 1rem) + (var(--fc-${gutterMaxSpace}-max) - var(--fc-${gutterMinSpace}-min)) * var(--fluid-bp))`,
          "--grid-columns": `${columns}`,
        },
      });

      addComponents({
        ".container": {
          maxWidth: "var(--grid-max-width)",
          paddingInline: "var(--grid-gutter)",
          marginInline: "auto",
        },
      });
    },

  (options = {}) => {
    const { steps = defaults.steps, spaces = defaults.spaces } = options;

    return {
      theme: {
        fontSize: Object.fromEntries(
          steps.map((step) => [`${step}`, `var(--step-${step})`])
        ),
        spacing: Object.fromEntries(
          Object.entries(spaces).map(([spaceName, _spaceScale]) => [
            spaceName,
            `var(--space-${spaceName})`,
          ])
        ),
      },
    };
  }
);

module.exports = utopiaPlugin;
