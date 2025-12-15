import svgPaths from "./svg-mml8w1um4p";
import imgRectangle from "figma:asset/569966ebfaeb8ecf6e0b2ae42146883affa91117.png";

function Frame() {
  return (
    <div className="bg-[#2d5f3f] box-border content-stretch flex gap-[10px] h-[67px] items-center justify-center p-[30px] relative rounded-[60px] shrink-0 w-[276px]">
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

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] top-[262px] w-[397px]">
      <div className="font-['Arial:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#848484] text-[18px] w-[min-content]">
        <p className="mb-0">Ethically made clothing using organic cotton and recycled materials.</p>
        <p>&nbsp;</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[10px] h-[38px] items-center justify-center p-[10px] relative rounded-[80px] shrink-0 w-[196px]">
      <p className="font-['Arial:Bold',sans-serif] leading-[52px] not-italic relative shrink-0 text-[#2d5f3f] text-[15px] text-nowrap whitespace-pre">Flat 20% Discount</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[56px] top-[68px] w-[397px]">
      <Frame2 />
      <p className="font-['Arial:Black',sans-serif] leading-[52px] min-w-full not-italic relative shrink-0 text-[#474747] text-[48px] w-[min-content]">Sustainable Fashion</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#e3e3e3] relative size-full">
      <Frame4 />
      <Frame3 />
      <div className="absolute left-[418px] size-[672px] top-[-87px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}