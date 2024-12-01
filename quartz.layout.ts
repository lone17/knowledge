import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { byFrontMatterModifiedDateThenTitle } from "./quartz/components/myUltils"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "lone17/knowledge",
        repoId: "R_kgDONWep-Q",
        category: "Announcements",
        categoryId: "DIC_kwDONWep-c4CkugQ",
        mapping: "pathname",
        strict: true,
        reactionsEnabled: true,
        inputPosition: "top",
        darkTheme: "noborder_dark",
        lightTheme: "noborder_light",
        themeUrl: "https://giscus.app/themes",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/lone17",
      LinkedIn: "https://www.linkedin.com/in/vmhieu/",
      "Google Scholar": "https://scholar.google.com/citations?user=iRZlaI8AAAAJ&hl=en",
      CV: "https://github.com/lone17/curriculum-vitae/blob/main/HieuVu-CV-short.pdf",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.RecentNotes({
      title: "Recently Updated",
      limit: 5,
      showTags: true,
      sort: byFrontMatterModifiedDateThenTitle(),
    }),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
