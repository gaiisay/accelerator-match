import Image from "next/image";

export const Mockup = () => (
  <div className="self-center w-full md:w-9/12">
    <div className="relative flex items-center justify-center w-full h-80 md:h-[450px]">
      <div className="w-full md:absolute ">
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
            <Image
              src="/pmc_mockup_desktop.png"
              width={512}
              height={294}
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
      <div className="absolute right top-[-6px] md:top-[-30px] right-0 md:right-14 h-56 w-32 md:h-[380px] md:w-[200px]">
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] md:border-[14px] rounded-3xl md:rounded-[2.5rem] h-full w-full">
          <div class="h-4 md:h-[22px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-3 md:-left-[17px] top-7 md:top-[52px] rounded-l-lg"></div>
          <div class="h-5 md:h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-3 md:-left-[17px] top-[70px] md:top-[104px] rounded-l-lg"></div>
          <div class="h-5 md:h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-3 md:-left-[17px] top-24 md:top-[158px] rounded-l-lg"></div>
          <div class="h-8 md:h-[54px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-3 md:-right-[17px] top-[75px] md:top-[122px] rounded-r-lg"></div>
          <div class="rounded-lg md:rounded-[2rem] overflow-hidden w-fit h-fit bg-white dark:bg-gray-800">
            <Image
              src="/pmc_mockup_mobile.png"
              fill
              alt=""
              className="rounded-xl md:rounded-[1.5rem] "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
