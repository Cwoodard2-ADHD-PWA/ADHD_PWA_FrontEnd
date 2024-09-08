import Navigation from "./Navigation";

export default function DefaultPage(props: any) {
  return (
    <div class="flex flex-row">
      <Navigation />
      {props.children}
    </div>
  );
}
