import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CyberJardin",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "fr-FR",
    baseUrl: "jardin.bachrc.net",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather",
        body: "Lora",
        code: "Jetbrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f4ff",
          lightgray: "#f0e6ff",
          gray: "#e0d0ff",
          darkgray: "#6040a1ff",
          dark: "#6337a4ff",
          secondary: "#9370db",
          tertiary: "#c8e6c9",
          highlight: "rgba(148, 0, 211, 0.15)",
          textHighlight: "#e6e6fa",
        },
        darkMode: {
          light: "#170b2cff",
          lightgray: "#2a1a3f",
          gray: "#3a2a4f",
          darkgray: "#cfc3ecff",
          dark: "#e6e6fa",
          secondary: "#a080ff",
          tertiary: "#a0c0a0",
          highlight: "rgba(148, 0, 211, 0.15)",
          textHighlight: "#e6e6fa",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
