module.exports = {
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
	tailwindConfig: "./tailwind.config.ts",
	importOrder: ["^ @core / (.*)$", "^ @server / (.*)$", "^ @ui / (.*)$", "^ [./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
