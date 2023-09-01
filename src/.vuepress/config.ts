import { defineUserConfig } from "vuepress";
import theme from "./theme/theme.js";
import { gitPlugin } from "@vuepress/plugin-git";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "",
	description: "技术文档",
	theme,
	// 智能光学感知研究项目组
	// Enable it with pwa
	// shouldPrefetch: false,
	plugins: [
		gitPlugin({
			// 配置项
			createdTime: false
		}),
		searchProPlugin({
			// 索引全部内容
			indexContent: true,
			// 为分类和标签添加索引
			customFields: [
				{
					getter: (page) => page.frontmatter.category,
					formatter: "分类：$content",
				},
				{
					getter: (page) => page.frontmatter.tag,
					formatter: "标签：$content",
				},
			],
		}),
	],
});