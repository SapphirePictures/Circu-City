import svgPaths from "./svg-f5hs5zrhhw";
import imgRectangle from "figma:asset/d5fe9b44453dfb4f6e02859d974c656817cf7202.png";

function Frame() {
  return (
    <div className="absolute bg-[#2d5f3f] box-border content-stretch flex gap-[10px] h-[67px] items-center justify-center left-[56px] p-[30px] rounded-[60px] top-[346px] w-[276px]">
      <p className="font-['Arial:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Shop Now</p>
      <div className="h-0 relative shrink-0 w-[18px]">
        <div className="absolute bottom-[-7.36px] left-0 right-[-5.56%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
            <path d={svgPaths.p14aaf800} fill="var(--stroke-0, white)" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#2d5f3f] box-border content-stretch flex gap-[10px] h-[38px] items-center justify-center p-[10px] relative rounded-[80px] shrink-0 w-[196px]">
      <p className="font-['Arial:Bold',sans-serif] leading-[52px] not-italic relative shrink-0 text-[#f4d35e] text-[15px] text-nowrap whitespace-pre">Flat 20% Discount</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[56px] top-[68px] w-[397px]">
      <Frame1 />
      <p className="font-['Arial:Black',sans-serif] leading-[52px] min-w-full not-italic relative shrink-0 text-[#2d5f3f] text-[48px] w-[min-content]">Organic Soap</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#f4d35e] relative size-full">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-[56px] not-italic text-[#2d5f3f] text-[18px] top-[229px] w-[397px]">Zero-waste essentials for a cleaner, smoother healthy skin</p>
      <Frame />
      <Frame2 />
      <div className="absolute left-[390px] size-[598px] top-1/2 translate-y-[-50%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}