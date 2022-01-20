import { IconProps, Icon } from '@chakra-ui/react'

export const TypebotLogo = ({
  isDark,
  ...props
}: { isDark?: boolean } & IconProps) => (
  <Icon viewBox="0 0 500 500" w="50px" h="50px" {...props}>
    <rect
      width="500"
      height="500"
      rx="75"
      fill={isDark ? 'white' : '#0042DA'}
    />
    <rect
      x="438.709"
      y="170.968"
      width="64.5161"
      height="290.323"
      rx="32.2581"
      transform="rotate(90 438.709 170.968)"
      fill="#FF8E20"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.5481 235.484C111.364 235.484 125.806 221.041 125.806 203.226C125.806 185.41 111.364 170.968 93.5481 170.968C75.7325 170.968 61.29 185.41 61.29 203.226C61.29 221.041 75.7325 235.484 93.5481 235.484Z"
      fill="#FF8E20"
    />
    <rect
      x="61.29"
      y="332.259"
      width="64.5161"
      height="290.323"
      rx="32.2581"
      transform="rotate(-90 61.29 332.259)"
      fill={isDark ? '#0042DA' : 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M406.451 267.742C388.635 267.742 374.193 282.184 374.193 300C374.193 317.815 388.635 332.258 406.451 332.258C424.267 332.258 438.709 317.815 438.709 300C438.709 282.184 424.267 267.742 406.451 267.742Z"
      fill={isDark ? '#0042DA' : 'white'}
    />
  </Icon>
)

export const GithubLogo = (props: IconProps) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <title>{'Logo Github'}</title>
    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
  </Icon>
)

export const GoogleLogo = (props: IconProps) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <title>{'Logo Google'}</title>
    <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
  </Icon>
)

export const FacebookLogo = (props: IconProps) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <title>Logo Facebook</title>
    <path
      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
      fillRule="evenodd"
    />
  </Icon>
)

export const GoogleSheetsLogo = (props: IconProps) => (
  <Icon viewBox="0 0 49 67" {...props}>
    <title>Sheets-icon</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-1"
      ></path>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-3"
      ></path>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-5"
      ></path>
      <linearGradient
        x1="50.0053945%"
        y1="8.58610612%"
        x2="50.0053945%"
        y2="100.013939%"
        id="linearGradient-7"
      >
        <stop stopColor="#263238" stopOpacity="0.2" offset="0%"></stop>
        <stop stopColor="#263238" stopOpacity="0.02" offset="100%"></stop>
      </linearGradient>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-8"
      ></path>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-10"
      ></path>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-12"
      ></path>
      <path
        d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
        id="path-14"
      ></path>
      <radialGradient
        cx="3.16804688%"
        cy="2.71744318%"
        fx="3.16804688%"
        fy="2.71744318%"
        r="161.248516%"
        gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.727273),translate(-0.031680,-0.027174)"
        id="radialGradient-16"
      >
        <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%"></stop>
        <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
      </radialGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Consumer-Apps-Sheets-Large-VD-R8-"
        transform="translate(-451.000000, -451.000000)"
      >
        <g id="Hero" transform="translate(0.000000, 63.000000)">
          <g id="Personal" transform="translate(277.000000, 299.000000)">
            <g id="Sheets-icon" transform="translate(174.833333, 89.958333)">
              <g id="Group">
                <g id="Clipped">
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <path
                    d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L36.9791667,10.3541667 L29.5833333,0 Z"
                    id="Path"
                    fill="#0F9D58"
                    fillRule="nonzero"
                    mask="url(#mask-2)"
                  ></path>
                </g>
                <g id="Clipped">
                  <mask id="mask-4" fill="white">
                    <use xlinkHref="#path-3"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <path
                    d="M11.8333333,31.8020833 L11.8333333,53.25 L35.5,53.25 L35.5,31.8020833 L11.8333333,31.8020833 Z M22.1875,50.2916667 L14.7916667,50.2916667 L14.7916667,46.59375 L22.1875,46.59375 L22.1875,50.2916667 Z M22.1875,44.375 L14.7916667,44.375 L14.7916667,40.6770833 L22.1875,40.6770833 L22.1875,44.375 Z M22.1875,38.4583333 L14.7916667,38.4583333 L14.7916667,34.7604167 L22.1875,34.7604167 L22.1875,38.4583333 Z M32.5416667,50.2916667 L25.1458333,50.2916667 L25.1458333,46.59375 L32.5416667,46.59375 L32.5416667,50.2916667 Z M32.5416667,44.375 L25.1458333,44.375 L25.1458333,40.6770833 L32.5416667,40.6770833 L32.5416667,44.375 Z M32.5416667,38.4583333 L25.1458333,38.4583333 L25.1458333,34.7604167 L32.5416667,34.7604167 L32.5416667,38.4583333 Z"
                    id="Shape"
                    fill="#F1F1F1"
                    fillRule="nonzero"
                    mask="url(#mask-4)"
                  ></path>
                </g>
                <g id="Clipped">
                  <mask id="mask-6" fill="white">
                    <use xlinkHref="#path-5"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <polygon
                    id="Path"
                    fill="url(#linearGradient-7)"
                    fillRule="nonzero"
                    mask="url(#mask-6)"
                    points="30.8813021 16.4520313 47.3333333 32.9003646 47.3333333 17.75"
                  ></polygon>
                </g>
                <g id="Clipped">
                  <mask id="mask-9" fill="white">
                    <use xlinkHref="#path-8"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <g id="Group" mask="url(#mask-9)">
                    <g transform="translate(26.625000, -2.958333)">
                      <path
                        d="M2.95833333,2.95833333 L2.95833333,16.2708333 C2.95833333,18.7225521 4.94411458,20.7083333 7.39583333,20.7083333 L20.7083333,20.7083333 L2.95833333,2.95833333 Z"
                        id="Path"
                        fill="#87CEAC"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
                <g id="Clipped">
                  <mask id="mask-11" fill="white">
                    <use xlinkHref="#path-10"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <path
                    d="M4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,4.80729167 C0,2.36666667 1.996875,0.369791667 4.4375,0.369791667 L29.5833333,0.369791667 L29.5833333,0 L4.4375,0 Z"
                    id="Path"
                    fillOpacity="0.2"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    mask="url(#mask-11)"
                  ></path>
                </g>
                <g id="Clipped">
                  <mask id="mask-13" fill="white">
                    <use xlinkHref="#path-12"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <path
                    d="M42.8958333,64.7135417 L4.4375,64.7135417 C1.996875,64.7135417 0,62.7166667 0,60.2760417 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,60.2760417 C47.3333333,62.7166667 45.3364583,64.7135417 42.8958333,64.7135417 Z"
                    id="Path"
                    fillOpacity="0.2"
                    fill="#263238"
                    fillRule="nonzero"
                    mask="url(#mask-13)"
                  ></path>
                </g>
                <g id="Clipped">
                  <mask id="mask-15" fill="white">
                    <use xlinkHref="#path-14"></use>
                  </mask>
                  <g id="SVGID_1_"></g>
                  <path
                    d="M34.0208333,17.75 C31.5691146,17.75 29.5833333,15.7642188 29.5833333,13.3125 L29.5833333,13.6822917 C29.5833333,16.1340104 31.5691146,18.1197917 34.0208333,18.1197917 L47.3333333,18.1197917 L47.3333333,17.75 L34.0208333,17.75 Z"
                    id="Path"
                    fillOpacity="0.1"
                    fill="#263238"
                    fillRule="nonzero"
                    mask="url(#mask-15)"
                  ></path>
                </g>
              </g>
              <path
                d="M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z"
                id="Path"
                fill="url(#radialGradient-16)"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export const GoogleAnalyticsLogo = (props: IconProps) => (
  <Icon viewBox="0 0 353 353" {...props}>
    <g clipPath="url(#clip0_1458_69)">
      <path
        d="M324.433 0H260.155C244.607 0 231.844 12.773 231.844 28.3329V111.474H138.792C123.709 111.474 111.41 123.782 111.41 139.11V232.237H27.6395C12.3241 232.237 0.0253906 244.545 0.0253906 259.873V324.899C0.0253906 340.227 12.3241 352.536 27.6395 353H324.665C340.212 353 352.975 340.227 352.975 324.667V28.3329C352.743 12.773 339.98 0 324.433 0Z"
        fill="url(#paint0_linear_1458_69)"
      />
      <path
        d="M324.433 0H260.155C244.607 0 231.844 12.773 231.844 28.3329V111.474H138.792C123.709 111.474 111.41 123.782 111.41 139.11V232.237H27.6395C12.3241 232.237 0.0253906 244.545 0.0253906 259.873V324.899C0.0253906 340.227 12.3241 352.536 27.6395 353H324.665C340.212 353 352.975 340.227 352.975 324.667V28.3329C352.743 12.773 339.98 0 324.433 0Z"
        fill="url(#paint1_linear_1458_69)"
      />
      <path
        d="M324.433 0H260.619C245.071 0 232.309 12.773 232.309 28.3329V353H324.433C339.98 353 352.743 340.227 352.743 324.667V28.3329C352.743 12.773 339.98 0 324.433 0Z"
        fill="#F57C00"
      />
      <path
        d="M111.41 139.342V232.237H27.8715C12.5561 232.237 0.0253906 244.778 0.0253906 260.105V325.132C0.0253906 340.459 12.5561 353 27.8715 353H232.076V111.474H139.256C123.941 111.474 111.41 124.014 111.41 139.342Z"
        fill="#FFC107"
      />
      <path
        d="M232.076 111.474V353H324.2C339.748 353 352.511 340.227 352.511 324.667V232.237L232.076 111.474Z"
        fill="url(#paint2_linear_1458_69)"
      />
      <path
        opacity="0.2"
        d="M139.256 113.796H232.077V111.474H139.256C123.941 111.474 111.41 124.014 111.41 139.342V141.664C111.41 126.337 123.941 113.796 139.256 113.796Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M27.8715 234.56H111.41V232.237H27.8715C12.5561 232.237 0.0253906 244.778 0.0253906 260.106V262.428C0.0253906 247.1 12.5561 234.56 27.8715 234.56Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M324.433 0H260.619C245.071 0 232.309 12.773 232.309 28.3329V30.6553C232.309 15.0954 245.071 2.32237 260.619 2.32237H324.433C339.98 2.32237 352.743 15.0954 352.743 30.6553V28.3329C352.743 12.773 339.98 0 324.433 0Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M324.433 350.678H27.8715C12.5561 350.678 0.0253906 338.137 0.0253906 322.809V325.132C0.0253906 340.459 12.5561 353 27.8715 353H324.201C339.748 353 352.511 340.227 352.511 324.667V322.345C352.743 337.905 339.98 350.678 324.433 350.678V350.678Z"
        fill="#BF360C"
      />
      <path
        d="M324.433 0H260.619C245.071 0 232.309 12.773 232.309 28.3329V111.474H139.488C124.173 111.474 111.642 124.014 111.642 139.342V232.237H27.8715C12.5561 232.237 0.0253906 244.778 0.0253906 260.105V325.132C0.0253906 340.459 12.5561 353 27.8715 353H324.433C339.98 353 352.743 340.227 352.743 324.667V28.3329C352.743 12.773 339.98 0 324.433 0Z"
        fill="url(#paint3_linear_1458_69)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1458_69"
        x1="0.0253906"
        y1="176.5"
        x2="352.975"
        y2="176.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1458_69"
        x1="0.0253906"
        y1="176.5"
        x2="352.975"
        y2="176.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1458_69"
        x1="172.323"
        y1="172.436"
        x2="344.434"
        y2="344.409"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BF360C" stopOpacity="0.2" />
        <stop offset="1" stopColor="#BF360C" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1458_69"
        x1="118.3"
        y1="118.513"
        x2="346.649"
        y2="346.679"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_1458_69">
        <rect width="353" height="353" fill="white" />
      </clipPath>
    </defs>
  </Icon>
)

export const GiphyLogo = (props: IconProps) => (
  <Icon viewBox="0 0 163.79999999999998 35" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M4 4h20v27H4z" fill="#000" />
      <g fillRule="nonzero">
        <path d="M0 3h4v29H0z" fill="#04ff8e" />
        <path d="M24 11h4v21h-4z" fill="#8e2eff" />
        <path d="M0 31h28v4H0z" fill="#00c5ff" />
        <path d="M0 0h16v4H0z" fill="#fff152" />
        <path d="M24 8V4h-4V0h-4v12h12V8" fill="#ff5b5b" />
        <path d="M24 16v-4h4" fill="#551c99" />
      </g>
      <path d="M16 0v4h-4" fill="#999131" />
      <path
        d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3S42.7 3.2 52.9 3.2c3.8 0 7.1.8 10.7 4.4zm9.1 19.2V4h7.6v27.2zm20.1-7.4v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2zm24.2-17.9l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7z"
        fill="#000"
        fillRule="nonzero"
      />
    </g>
  </Icon>
)
