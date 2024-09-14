import { useEffect } from "preact/hooks";
export default function documentTitle(title: string) {
  document.title = title;
  //   useEffect(() => {
  //   }, [title]);
}
