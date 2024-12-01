import { SortFn } from "./PageList"

export function byFrontMatterModifiedDateThenTitle(): SortFn {
  return (f1, f2) => {
    const f1ModifiedDate = f1.frontmatter?.modified ?? null
    const f2ModifiedDate = f2.frontmatter?.modified ?? null

    if (f1ModifiedDate && f2ModifiedDate) {
      // sort descending
      // have to use as string because Date object cannot parse my format without using
      // another library
      return -f1ModifiedDate.localeCompare(f2ModifiedDate)
    } else if (f1ModifiedDate && !f2ModifiedDate) {
      // prioritize files with dates
      return -1
    } else if (!f1ModifiedDate && f2ModifiedDate) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}
