import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

type MetaAttr = "name" | "property";

const upsertMeta = (attr: MetaAttr, key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  const created = !el;
  const previous = el?.getAttribute("content") ?? null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);

  return () => {
    if (created) el?.remove();
    else if (previous !== null) el?.setAttribute("content", previous);
  };
};

export const usePageMeta = ({ title, description, noindex = false }: PageMeta) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restorers = [
      upsertMeta("name", "description", description),
      upsertMeta("property", "og:title", title),
      upsertMeta("property", "og:description", description),
      upsertMeta("name", "twitter:title", title),
      upsertMeta("name", "twitter:description", description),
    ];
    if (noindex) restorers.push(upsertMeta("name", "robots", "noindex, nofollow"));

    return () => {
      document.title = previousTitle;
      restorers.forEach((restore) => restore());
    };
  }, [title, description, noindex]);
};
