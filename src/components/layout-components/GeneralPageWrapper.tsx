export default function GeneralPageWrapper(props: any) {
  return (
    <div class="flex flex-col sm:w-full mx-20 my-10 md:max-h-screen w-max-[800px] items-center gap-3">
      {props.children}
    </div>
  );
}
