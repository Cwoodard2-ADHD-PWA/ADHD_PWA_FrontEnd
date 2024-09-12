import Navigation from "../Navigation";

export default function DefaultPage(props: any) {
  return (
    <div class="flex flex-col-reverse md:flex-row w-screen md:h-auto min-h-screen">
      <Navigation />
      {props.children}
    </div>
  );
}
