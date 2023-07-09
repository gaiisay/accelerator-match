import SectionWrapper from "../../../SectionWrapper";
import GradientWrapper from "../../../GradientWrapper";
import NavLink from "../../standard/NavLink";
import Image from "next/image";

const FooterCTA = () => {
  return (
    <GradientWrapper wrapperclassname="inset-0" className="custom-screen">
      <div className="flex flex-col justify-between gap-4 custom-screen gap-x-12 sm:gap-8">
        <div className="text-center ">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            The Purpose Model Canvas{" "}
          </h2>
          <div className="flex gap-4 mx-12 mt-2 text-left">
            <p className="max-w-lg mt-5">
              {/* AcceleratorMatch has partnerd with MyPurpose Academy to <br />{" "} */}
              Define and implement the purpose for your startup and impress
              accelerators and investors with vision, input and outcome.
            </p>
            <svg
              width="300"
              height="100"
              viewBox="0 0 450 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7109 88H30.1172V62.7266C30.1172 58 33.0469 54.7188 37.3828 54.7188C41.6016 54.7188 44.1406 57.375 44.1406 61.8672V88H55.1172V62.5312C55.1172 57.8828 57.9688 54.7188 62.3047 54.7188C66.7188 54.7188 69.1406 57.375 69.1406 62.2188V88H80.5469V59.3672C80.5469 50.9297 75.0391 45.2656 66.8359 45.2656C60.7031 45.2656 55.7031 48.625 53.8281 53.8984H53.5938C52.1875 48.3906 47.9297 45.2656 42.0703 45.2656C36.4453 45.2656 32.0703 48.3906 30.3516 53.1562H30.1172V46.125H18.7109V88ZM94.1016 101.789C103.398 101.789 109.023 98.625 112.305 88.7422L126.68 46.125H114.648L105.781 78.8594H105.469L96.6406 46.125H84.1016L98.9062 88L98.3984 89.3672C97.3828 92.2188 95.5078 93.1953 92.1094 93.1953C90.4297 93.1953 89.1016 92.9609 88.2812 92.8047V101.281C89.6094 101.516 91.875 101.789 94.1016 101.789ZM130.664 101.672H142.07V80.8516H142.305C144.57 85.8125 149.297 88.8594 155.273 88.8594C165.742 88.8594 172.227 80.6562 172.227 67.0625V67.0234C172.227 53.3906 165.742 45.2656 155.117 45.2656C149.18 45.2656 144.609 48.3516 142.344 53.4297H142.07V46.125H130.664V101.672ZM151.367 79.4062C145.82 79.4062 142.031 74.6406 142.031 67.1016V67.0625C142.031 59.4844 145.82 54.7188 151.367 54.7188C157.031 54.7188 160.625 59.3672 160.625 67.0234V67.0625C160.625 74.6797 157.031 79.4062 151.367 79.4062ZM192.422 88.8594C198.75 88.8594 203.047 85.8906 205.195 81.0859H205.43V88H216.836V46.125H205.43V70.1875C205.43 75.6562 202.188 79.4062 197.07 79.4062C191.953 79.4062 189.375 76.2422 189.375 70.7734V46.125H177.969V73.1562C177.969 82.9609 183.203 88.8594 192.422 88.8594ZM224.258 88H235.664V64.5625C235.664 58.4688 238.945 55.1094 244.57 55.1094C246.211 55.1094 247.773 55.3438 248.711 55.7344V45.6953C247.852 45.4609 246.68 45.2656 245.43 45.2656C240.547 45.2656 237.148 48.2734 235.898 53.4297H235.664V46.125H224.258V88ZM253.398 101.672H264.805V80.8516H265.039C267.305 85.8125 272.031 88.8594 278.008 88.8594C288.477 88.8594 294.961 80.6562 294.961 67.0625V67.0234C294.961 53.3906 288.477 45.2656 277.852 45.2656C271.914 45.2656 267.344 48.3516 265.078 53.4297H264.805V46.125H253.398V101.672ZM274.102 79.4062C268.555 79.4062 264.766 74.6406 264.766 67.1016V67.0625C264.766 59.4844 268.555 54.7188 274.102 54.7188C279.766 54.7188 283.359 59.3672 283.359 67.0234V67.0625C283.359 74.6797 279.766 79.4062 274.102 79.4062ZM365.703 88.8594C376.484 88.8594 384.023 83.4688 384.023 75.2656V75.2266C384.023 69.0547 380.43 65.6172 371.68 63.7812L364.57 62.2578C360.352 61.3594 358.906 59.9531 358.906 57.8047V57.7656C358.906 55.0703 361.367 53.3125 365.312 53.3125C369.531 53.3125 371.992 55.5781 372.383 58.5859L372.422 58.8984H382.93V58.5078C382.656 51.1641 376.445 45.2656 365.312 45.2656C354.648 45.2656 347.773 50.4219 347.773 58.3906V58.4297C347.773 64.6797 351.875 68.7422 360 70.4609L367.109 71.9453C371.211 72.8438 372.617 74.1328 372.617 76.3594V76.3984C372.617 79.0938 370 80.7734 365.703 80.7734C361.133 80.7734 358.672 78.8594 357.93 75.5781L357.852 75.2266H346.719L346.758 75.5781C347.656 83.5078 354.102 88.8594 365.703 88.8594ZM408.711 88.8594C420.664 88.8594 426.445 81.7891 427.734 75.6172L427.852 75.1875H417.383L417.305 75.4219C416.484 77.7656 413.633 80.3438 408.945 80.3438C403.125 80.3438 399.492 76.4375 399.375 69.7578H428.203V66.2422C428.203 53.5859 420.508 45.2656 408.242 45.2656C395.977 45.2656 388.125 53.7812 388.125 67.1016V67.1406C388.125 80.5391 395.898 88.8594 408.711 88.8594ZM408.438 53.7812C413.164 53.7812 416.562 56.7891 417.266 62.5703H399.492C400.234 56.9062 403.75 53.7812 408.438 53.7812ZM31.1719 168.664C36.6797 168.664 41.1328 166.047 43.5156 161.75H43.75V168H55.1562V139.289C55.1562 130.852 48.1641 125.266 37.3438 125.266C26.2891 125.266 19.6484 130.812 19.0234 138.547L18.9844 139.016H29.4141L29.4922 138.664C30.0391 135.969 32.6172 133.977 36.875 133.977C41.3281 133.977 43.75 136.281 43.75 139.992V142.57L33.3984 143.195C23.0078 143.859 17.1094 148.312 17.1094 155.93V156.008C17.1094 163.391 22.7734 168.664 31.1719 168.664ZM28.3984 155.422V155.344C28.3984 152.375 30.7031 150.5 35.1172 150.227L43.75 149.68V152.688C43.75 157.062 40 160.344 34.8828 160.344C30.9375 160.344 28.3984 158.508 28.3984 155.422ZM81.6797 168.859C92.8516 168.859 100.078 161.906 100.625 152.766V152.531H90L89.9609 152.883C89.1797 157.102 86.3281 159.914 81.7578 159.914C76.1328 159.914 72.6172 155.266 72.6172 147.062V147.023C72.6172 139.016 76.1328 134.211 81.7188 134.211C86.4453 134.211 89.2188 137.258 89.9219 141.242L90 141.594H100.586V141.32C100.156 132.258 92.9297 125.266 81.5625 125.266C69.0234 125.266 61.0156 133.586 61.0156 146.984V147.023C61.0156 160.539 68.9062 168.859 81.6797 168.859ZM118.594 168.664C124.102 168.664 128.555 166.047 130.938 161.75H131.172V168H142.578V139.289C142.578 130.852 135.586 125.266 124.766 125.266C113.711 125.266 107.07 130.812 106.445 138.547L106.406 139.016H116.836L116.914 138.664C117.461 135.969 120.039 133.977 124.297 133.977C128.75 133.977 131.172 136.281 131.172 139.992V142.57L120.82 143.195C110.43 143.859 104.531 148.312 104.531 155.93V156.008C104.531 163.391 110.195 168.664 118.594 168.664ZM115.82 155.422V155.344C115.82 152.375 118.125 150.5 122.539 150.227L131.172 149.68V152.688C131.172 157.062 127.422 160.344 122.305 160.344C118.359 160.344 115.82 158.508 115.82 155.422ZM165.469 168.859C171.523 168.859 176.133 165.812 178.359 160.852H178.594V168H190V111.633H178.594V133.391H178.359C176.094 128.312 171.406 125.266 165.469 125.266C154.922 125.266 148.438 133.391 148.438 147.023V147.062C148.438 160.656 154.922 168.859 165.469 168.859ZM169.297 159.406C163.594 159.406 160.039 154.68 160.039 147.062V147.023C160.039 139.367 163.633 134.719 169.297 134.719C174.805 134.719 178.633 139.484 178.633 147.023V147.062C178.633 154.641 174.844 159.406 169.297 159.406ZM216.68 168.859C228.633 168.859 234.414 161.789 235.703 155.617L235.82 155.188H225.352L225.273 155.422C224.453 157.766 221.602 160.344 216.914 160.344C211.094 160.344 207.461 156.438 207.344 149.758H236.172V146.242C236.172 133.586 228.477 125.266 216.211 125.266C203.945 125.266 196.094 133.781 196.094 147.102V147.141C196.094 160.539 203.867 168.859 216.68 168.859ZM216.406 133.781C221.133 133.781 224.531 136.789 225.234 142.57H207.461C208.203 136.906 211.719 133.781 216.406 133.781ZM242.07 168H253.477V142.727C253.477 138 256.406 134.719 260.742 134.719C264.961 134.719 267.5 137.375 267.5 141.867V168H278.477V142.531C278.477 137.883 281.328 134.719 285.664 134.719C290.078 134.719 292.5 137.375 292.5 142.219V168H303.906V139.367C303.906 130.93 298.398 125.266 290.195 125.266C284.062 125.266 279.062 128.625 277.188 133.898H276.953C275.547 128.391 271.289 125.266 265.43 125.266C259.805 125.266 255.43 128.391 253.711 133.156H253.477V126.125H242.07V168ZM317.461 181.789C326.758 181.789 332.383 178.625 335.664 168.742L350.039 126.125H338.008L329.141 158.859H328.828L320 126.125H307.461L322.266 168L321.758 169.367C320.742 172.219 318.867 173.195 315.469 173.195C313.789 173.195 312.461 172.961 311.641 172.805V181.281C312.969 181.516 315.234 181.789 317.461 181.789Z"
                fill="#36424B"
              />
              <path
                d="M339.744 59.8628C340.501 61.5597 341.035 63.39 341.305 65.322C342.853 76.3979 335.129 86.632 324.053 88.1801C312.977 89.7281 302.743 82.004 301.195 70.928C299.647 59.8521 307.371 49.618 318.447 48.0699C320.381 47.7996 322.29 47.8122 324.131 48.0752"
                stroke="#035AA6"
                stroke-width="7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M321.25 78.875C327.187 78.875 332 74.0621 332 68.125C332 62.1879 327.187 57.375 321.25 57.375C315.313 57.375 310.5 62.1879 310.5 68.125C310.5 74.0621 315.313 78.875 321.25 78.875Z"
                stroke="#035AA6"
                stroke-width="5.73333"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M320.768 68.3299L357.302 20.5599"
                stroke="#035AA6"
                stroke-width="3.69777"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M357.1 20.8236L349.485 5.22918L335.34 23.724L342.956 39.3185L360 42.583L374.144 24.0882L357.1 20.8236Z"
                stroke="#035AA6"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="321" cy="68" r="3" fill="#035AA6" />
            </svg>
          </div>
        </div>
        <div className="flex-none mt-4 text-center md:mt-0">
          <NavLink
            href="/academy"
            className="inline-flex items-center mx-16 text-sm font-medium text-white gap-x-2 bg-logo"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </GradientWrapper>
  );
};

export default FooterCTA;
