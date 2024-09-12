import { useEffect } from "preact/hooks";
export default function documentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
