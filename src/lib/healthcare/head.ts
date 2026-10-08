import { useEffect } from "react";

interface PageHead {
  title: string;
  description: string;
  robots?: string;
  canonical?: string;
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

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  const created = !el;
  const previous = el?.getAttribute("href") ?? null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);

  return () => {
    if (created) el?.remove();
    else if (previous !== null) el?.setAttribute("href", previous);
  };
};

export const usePageHead = ({ title, description, robots, canonical }: PageHead) => {
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
    if (robots) restorers.push(upsertMeta("name", "robots", robots));
    if (canonical) {
      restorers.push(upsertCanonical(canonical));
      restorers.push(upsertMeta("property", "og:url", canonical));
    }

    return () => {
      document.title = previousTitle;
      restorers.forEach((restore) => restore());
    };
  }, [title, description, robots, canonical]);
};
