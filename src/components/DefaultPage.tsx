import Navigation from "./Navigation";

export default function DefaultPage(props: any) {
  return (
    <div class="flex flex-row w-screen">
      <Navigation />
      {props.children}
    </div>
  );
}
