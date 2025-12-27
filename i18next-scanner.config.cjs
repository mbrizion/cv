module.exports = {
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "./",

  options: {
    debug: false,
    removeUnusedKeys: false,

    func: {
      list: ["t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },

    lngs: ["en", "fr"],
    ns: ["translation"],
    defaultLng: "en",
    defaultNs: "translation",

    resource: {
      loadPath: "src/i18n/locales/{{lng}}/{{ns}}.json",
      savePath: "src/i18n/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
    },

    keySeparator: ".",
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
};
