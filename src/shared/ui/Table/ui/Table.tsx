import { useEffect, useRef } from "react";

import {
  NewsFeedTable,
  NewsFeedTableBody,
  NewsFeedTableBodyRow,
  NewsFeedTableHead,
} from "@/widgets/administration/ui/NewsFeedTable.styles";

export function Table({ children }: { children: React.ReactNode }) {
  return <NewsFeedTable>{children}</NewsFeedTable>;
}

Table.Head = function ({ children }: { children: React.ReactNode }) {
  return <NewsFeedTableHead>{children}</NewsFeedTableHead>;
};

Table.Body = function ({ children }: { children: React.ReactNode }) {
  return <NewsFeedTableBody>{children}</NewsFeedTableBody>;
};
Table.BodyRow = function ({
  children,
  link = "",
  isBlank,
}: {
  children: React.ReactNode;
  link?: string;
  isBlank?: boolean;
}) {
  const ref = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (link) {
      const _link = document.createElement("a");
      _link.href = link;
      _link.target = isBlank ? "_blank" : "";
      ref.current?.querySelector("td")?.appendChild(_link);
    }
  }, []);

  return <NewsFeedTableBodyRow ref={ref}>{children}</NewsFeedTableBodyRow>;
};

Table.Footer = function ({ children }: { children: React.ReactNode }) {
  return <tfoot>{children}</tfoot>;
};
