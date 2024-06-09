export default function Loader() {
  const calculationForTopAndLeft = "calc(50%-32px)";

  return (
    <div
      className={`absolute w-[64px] h-[64px] top-[calc(50%-32px)] left-[calc(50%-32px)]`}
    >
      <div className="absolute box-border w-full h-full rounded-[50%] animate-[rotate-one_1s_linear_infinite] border-b-[3px] border-[red] left-[0%] top-[0%]"></div>
      <div className="absolute box-border w-full h-full rounded-[50%] animate-[rotate-two_1s_linear_infinite] border-r-[3px] border-[red] right-[0%] top-[0%]"></div>
      <div className="absolute box-border w-full h-full rounded-[50%] animate-[rotate-three_1s_linear_infinite] border-t-[3px] border-[red] right-[0%] bottom-[0%]"></div>
    </div>
  );
}
