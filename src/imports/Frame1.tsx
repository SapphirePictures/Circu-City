function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 4.16667H2.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15.8333H2.5" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M11.6667 2.5V5.83333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667V17.5" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H10" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 15.8333H13.3333" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 4.16667H11.6667" id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 8.33333V11.6667" id="Vector_8" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 10H2.5" id="Vector_9" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[32px] w-[82.391px]" data-name="Heading 2">
      <Icon />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[28px] not-italic text-[20px] text-neutral-950 text-nowrap top-[-3px] whitespace-pre">Filters</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[54px] relative rounded-[2px] shrink-0 w-[121px]">
      <div className="font-['Arial:Regular',sans-serif] h-[54px] not-italic overflow-clip relative rounded-[inherit] w-[121px]">
        <p className="absolute leading-[20px] left-[9px] text-[#4a5565] text-[14px] top-[27px] w-[16px]">$0</p>
        <p className="absolute leading-[24px] left-[9px] text-[#847a7a] text-[10px] text-nowrap top-[3px] whitespace-pre">Min. Price</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4b4b4] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Text() {
  return <div className="absolute h-[20px] left-[70px] top-[27px] w-[39.766px]" data-name="Text" />;
}

function Frame2() {
  return (
    <div className="h-[54px] relative rounded-[2px] shrink-0 w-[121px]">
      <div className="h-[54px] overflow-clip relative rounded-[inherit] w-[121px]">
        <Text />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[11px] not-italic text-[#4a5565] text-[14px] top-[27px] w-[40px]">$100+</p>
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[11px] not-italic text-[#847a7a] text-[10px] text-nowrap top-[3px] whitespace-pre">Max. Price</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4b4b4] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[11px] items-center left-[calc(50%+0.5px)] top-[223px] translate-x-[-50%]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Heading />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[28px] not-italic text-[16px] text-neutral-950 text-nowrap top-[75px] whitespace-pre">Price Range</p>
      <Frame3 />
      <div className="absolute h-0 left-1/2 top-[142px] translate-x-[-50%] w-[248px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-9px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 9">
            <line id="Line 1" stroke="var(--stroke-0, #D1E8DA)" strokeLinecap="round" strokeWidth="9" x1="4.5" x2="243.5" y1="4.5" y2="4.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-1/2 top-[183px] translate-x-[-50%] w-[248px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-9px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 9">
            <line id="Line 1" stroke="var(--stroke-0, #D1E8DA)" strokeLinecap="round" strokeWidth="9" x1="4.5" x2="243.5" y1="4.5" y2="4.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(50%-23.5px)] top-[183px] translate-x-[-50%] w-[201px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-9px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 9">
            <line id="Line 3" stroke="var(--stroke-0, #2D5F3F)" strokeLinecap="round" strokeWidth="9" x1="4.5" x2="196.5" y1="4.5" y2="4.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[8px] size-[20px] top-[127px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #2D5F3F)" id="Ellipse 1" r="10" />
        </svg>
      </div>
      <div className="absolute left-[209px] size-[20px] top-[168px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #2D5F3F)" id="Ellipse 1" r="10" />
        </svg>
      </div>
    </div>
  );
}