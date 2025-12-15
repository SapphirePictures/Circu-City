function Frame() {
  return (
    <div className="absolute bg-[#7e7e7e] h-[843px] left-0 overflow-clip top-[181px] w-[462px]">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-[111px] not-italic text-[34px] text-nowrap text-white top-[354px] whitespace-pre">Filters layout</p>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#e4e4e4] h-[123px] left-0 top-[58px] w-[1440px]" />;
}

function Frame2() {
  return <div className="absolute bg-[#878787] h-[58px] left-0 top-0 w-[1440px]" />;
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}