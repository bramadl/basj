import { BaseHTMLAttributes, FC } from "react";

export interface LogoProps extends BaseHTMLAttributes<HTMLOrSVGElement> {}

const MobileNavigationLogo: FC<LogoProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86 24"
      fill="none"
    >
      <path
        d="M24.0908 15.2589C24.0615 15.0685 23.9494 14.941 23.9494 14.941C23.9494 14.941 23.8482 14.826 23.6666 14.7645C23.4446 14.6893 23.1143 14.7452 22.7624 14.9197C22.8575 14.3381 22.9054 13.7498 22.9054 13.1605C22.9054 7.17429 18.0471 2.32151 12.0542 2.32151C6.06118 2.32151 1.20289 7.17432 1.20289 13.1605C1.20294 13.7527 1.25124 14.3439 1.34732 14.9282C0.989202 14.7471 0.65207 14.6881 0.426634 14.7645C0.244958 14.8261 0.143834 14.9412 0.143834 14.9412C0.143834 14.9412 0.0317977 15.0685 0.00247207 15.2591C-0.0418196 15.5448 0.512603 16.0403 1.38082 16.4594C1.29413 16.4833 1.09286 16.5518 0.921305 16.7418C0.921305 16.7418 0.761871 16.9181 0.70913 17.1302C0.614826 17.51 1.42587 18.215 2.6885 18.8249C2.37547 18.8671 2.18223 18.9962 2.08774 19.0721C1.99681 19.1452 1.93372 19.197 1.91099 19.284C1.85507 19.4976 2.09501 19.7242 2.26445 19.8842C2.58359 20.1856 2.92561 20.3195 3.11277 20.3785C3.30758 20.4399 3.50959 20.4755 3.71365 20.4845C3.65731 20.5649 3.4551 20.8737 3.50147 21.2965C3.51322 21.4032 3.57429 21.8221 3.92582 22.0733C4.17047 22.2482 4.42595 22.2488 4.77411 22.2498C5.07434 22.2503 5.3727 22.2026 5.65778 22.1086C5.60432 22.168 5.41662 22.3907 5.44561 22.6735C5.4827 23.0345 5.85954 23.3604 6.36459 23.3796H8.42913C9.5628 23.7808 10.7827 24 12.0541 24C13.3254 24 14.5454 23.7809 15.679 23.3796H17.7284C18.2335 23.3604 18.6103 23.0345 18.6474 22.6735C18.6765 22.3907 18.4888 22.168 18.4353 22.1086C18.7204 22.2027 19.0189 22.2503 19.3192 22.2498C19.6674 22.2488 19.9229 22.2482 20.1675 22.0733C20.5188 21.8221 20.5799 21.4034 20.5916 21.2965C20.6381 20.8737 20.4359 20.5649 20.3795 20.4845C20.5835 20.4755 20.7855 20.4399 20.9803 20.3785C21.1675 20.3195 21.5095 20.1855 21.8287 19.8842C21.9981 19.7242 22.238 19.4976 22.1821 19.284C22.1594 19.1973 22.0965 19.1453 22.0054 19.0721C21.911 18.9964 21.7175 18.8671 21.4045 18.8249C22.6671 18.215 23.4782 17.51 23.3839 17.1302C23.3312 16.9183 23.1717 16.7418 23.1717 16.7418C23.0003 16.5518 22.7989 16.4833 22.7123 16.4594C23.5805 16.0403 24.1348 15.5448 24.0908 15.2589ZM12.0541 22.9558C6.63837 22.9558 2.24805 18.5704 2.24805 13.1607C2.24805 7.75109 6.63837 3.36571 12.0541 3.36571C17.4699 3.36571 21.8602 7.75106 21.8602 13.1607C21.8602 18.5704 17.4699 22.9558 12.0541 22.9558Z"
      />
      <path
        d="M3.14812 11.3399C3.13214 11.3782 3.0947 11.4724 3.11277 11.5871C3.131 11.7028 3.20803 11.8543 3.32495 11.8696C3.34446 11.8721 3.39925 11.8753 3.5017 11.7989C3.6736 11.6707 4.49138 10.2101 4.8802 9.57462C5.35229 8.80298 5.82676 7.89714 6.7889 7.24438C6.7889 7.24438 6.99214 7.0623 7.56653 6.82073C7.61086 6.80207 7.72077 6.75753 7.84929 6.78542C7.87668 6.79136 8.01486 6.82134 8.06146 6.92662C8.10083 7.01575 8.05824 7.11585 8.02611 7.1738C7.31919 8.44481 6.57692 8.93911 6.68297 9.15094C6.78296 9.35069 7.77688 9.15654 7.9908 9.22156C8.34358 9.32877 8.55564 9.71242 8.62703 9.9983C8.6529 10.102 8.72175 10.3773 8.59168 10.6691C8.42497 11.0438 8.0507 11.1756 7.88475 11.234C7.49924 11.3698 7.16627 11.2988 7.03643 11.2693C6.87802 11.2334 6.47515 11.142 6.22346 10.8104C6.10108 10.649 5.98097 10.3462 5.86999 10.1748C5.48118 9.57462 5.14068 10.0146 5.09241 10.1395C5.0258 10.3119 5.11969 10.4925 5.1985 10.6338C5.46402 11.1101 5.59682 11.3483 5.87007 11.5871C6.08603 11.776 6.61166 12.235 7.38997 12.2226C8.13114 12.2108 8.62475 11.7791 8.80381 11.6224C8.99326 11.4568 9.33569 11.1572 9.47542 10.6338C9.5104 10.5028 9.66547 9.86028 9.29867 9.29218C9.07547 8.94649 8.75687 8.77997 8.52105 8.65667C8.2985 8.5406 8.06028 8.45737 7.81383 8.40958C8.01168 8.29686 8.19059 8.15383 8.34404 7.9857C8.38162 7.94441 9.16588 7.06196 8.83886 6.39694C8.69807 6.11052 8.41114 5.98646 8.37939 5.97306C8.19945 5.8982 8.04006 5.91327 7.77848 5.93775C7.44047 5.96943 7.18825 6.05129 7.1069 6.07899C6.51641 6.27958 6.09858 6.61451 5.94047 6.74981C5.54139 7.09133 5.29174 7.44825 4.91543 8.09144C4.58527 8.6561 3.29616 10.9856 3.14812 11.3399Z"
      />
      <path
        d="M17.2513 7.42093C16.7824 7.04902 16.6384 6.97571 16.509 6.92662C16.3532 6.86755 16.1663 6.79958 15.9435 6.85604C15.881 6.87182 15.6187 6.93832 15.5193 7.17395C15.4486 7.34149 15.4994 7.50237 15.5193 7.56232C15.5875 7.76798 15.746 7.90017 15.9435 8.02128C16.2739 8.22402 16.5544 8.29797 16.9685 8.40965C17.9439 8.67272 18.024 8.7036 18.1349 8.76271C18.3115 8.85688 18.6814 9.05413 18.9126 9.43353C19.2899 10.053 19.1984 10.9951 18.6651 11.5873C18.1129 12.2004 17.3091 12.1916 16.9332 12.1875C16.6679 12.1845 15.9412 12.1377 15.3072 11.6225C15.0879 11.4444 14.6176 11.0624 14.6003 10.4928C14.5927 10.2485 14.642 10.1177 14.671 10.0689C14.8044 9.8456 15.0553 9.79397 15.0952 9.78641C15.1606 9.77407 15.2984 9.75004 15.4486 9.82172C15.5779 9.88337 15.6461 9.98721 15.696 10.0689C15.914 10.4249 15.9382 10.6139 16.0495 10.8103C16.2841 11.2242 16.7345 11.3685 16.7564 11.3752C17.0816 11.4743 17.6082 11.4681 17.9228 11.0928C18.203 10.7585 18.1453 10.3453 18.135 10.2807C18.0642 9.83984 17.7139 9.60255 17.5695 9.50396C17.4094 9.39474 17.2603 9.34728 16.9686 9.25683C16.4614 9.09958 16.3036 9.11638 15.9082 9.0097C15.4361 8.88227 15.1355 8.80117 14.8478 8.5507C14.7429 8.45942 14.3272 8.07343 14.2823 7.4562C14.2721 7.31666 14.2502 6.94048 14.4944 6.57352C14.5285 6.52236 14.6985 6.27746 15.0246 6.11457C15.3781 5.93802 16.5285 5.84844 17.1454 6.18515C17.2547 6.24483 17.4328 6.3441 17.6049 6.53821C17.6782 6.62098 17.9345 6.91856 17.9584 7.35027C17.9645 7.46131 17.9804 7.75238 17.8523 7.80926C17.7571 7.8515 17.648 7.73565 17.2513 7.42093Z"
      />
      <path
        d="M14.6928 14.5881C14.5674 14.2967 13.7276 10.8909 12.5013 5.79681C12.6839 5.81165 13.9859 5.79681 13.9859 5.51437C13.9859 5.47906 14.0919 5.23193 12.9255 5.0905C12.6368 5.05557 12.3344 5.05523 12.0554 5.05523H12.0418C11.7628 5.05523 11.4604 5.05557 11.1717 5.0905C10.0053 5.23174 10.1113 5.47887 10.1113 5.51437C10.1113 5.79681 11.4133 5.81165 11.5959 5.79681C10.3696 10.8909 9.52972 14.297 9.40442 14.5881C9.40317 14.591 9.1938 15.254 9.43977 15.3296C9.89925 15.4708 11.4841 14.1043 11.7373 13.9526C11.8722 13.8717 11.9863 13.8527 12.0486 13.8482C12.1109 13.8527 12.225 13.8717 12.3599 13.9526C12.6131 14.1043 14.1979 15.4708 14.6574 15.3296C14.9034 15.254 14.694 14.591 14.6928 14.5881ZM13.8875 13.9526C13.8522 13.9526 13.8168 14.1292 12.403 13.1406C12.3636 13.1131 12.194 13.0015 12.0878 12.9995C11.9817 13.0015 11.812 13.1131 11.7726 13.1406C10.3588 14.1292 10.3234 13.9526 10.2881 13.9526C10.2881 13.9526 10.1113 13.9879 11.7019 7.8093C11.7334 7.68687 11.807 7.32041 12.0849 7.31526C12.0859 7.31526 12.0868 7.315 12.0878 7.315C12.0888 7.315 12.0897 7.315 12.0907 7.315C12.3686 7.32015 12.4422 7.68687 12.4737 7.8093C14.0643 13.988 13.8875 13.9526 13.8875 13.9526Z"
      />
      <path
        d="M15.8679 16.3182C15.7077 16.442 14.5967 17.5172 11.8787 17.4128H11.8738C9.15568 17.5172 8.04476 16.442 7.88453 16.3182C7.83633 16.2809 7.56729 16.2612 7.70778 16.5653C8.13163 17.4826 9.54385 18.3646 11.8738 18.4716L11.8787 18.4719C14.2086 18.3649 15.6208 17.4826 16.0446 16.5653C16.1852 16.2612 15.9161 16.2809 15.8679 16.3182Z"
      />
      <path
        d="M15.8679 19.9194C15.7077 20.0432 14.5967 21.1185 11.8787 21.0141H11.8738C9.15568 21.1185 8.04476 20.0434 7.88445 19.9194C7.83626 19.8822 7.56721 19.8624 7.7077 20.1666C8.13163 21.0839 9.54396 21.9659 11.8738 22.0728L11.8787 22.0731C14.2086 21.9662 15.6208 21.0839 16.0446 20.1666C16.1852 19.8624 15.9161 19.8822 15.8679 19.9194Z"
      />
      <path
        d="M16.2262 16.1769C16.2262 16.3182 16.7185 16.2825 16.7211 16.2829V19.5665C16.368 19.9966 16.3332 20.1273 16.3676 20.1667C16.4223 20.2293 16.6869 20.079 17.2159 19.7783C17.7642 19.4668 17.8271 19.3852 17.8168 19.3193C17.797 19.1929 17.322 19.2134 17.322 19.0369C17.322 18.719 17.2866 17.0245 17.2866 15.824C17.2866 15.8103 17.6401 15.3297 17.4988 15.1885C17.3927 15.0824 16.2262 16.071 16.2262 16.1769Z"
      />
      <path
        d="M23.2352 0.687026C23.1295 1.52311 23.4625 2.2353 23.8906 2.9334C23.824 2.92825 23.7785 2.8979 23.7305 2.91735C23.6856 2.93556 23.6614 2.97851 23.625 3.00697C23.5601 3.05761 23.4886 3.07578 23.4069 3.05996C23.0919 2.9994 22.8824 2.76291 22.7957 2.4061C22.6352 1.74606 22.7493 1.12691 23.0444 0.528944C23.1223 0.37124 23.2036 0.215959 23.3064 0.0729774C23.3257 0.0460312 23.3329 -0.0115701 23.373 0.0020544C23.4068 0.0136352 23.3878 0.0668843 23.3892 0.101513C23.3953 0.259633 23.4178 0.414574 23.47 0.56467C23.5468 0.785425 23.7045 0.942636 23.8754 1.09171C24.1477 1.32908 24.3617 1.61183 24.5065 1.94324C24.5927 2.14046 24.5902 2.34441 24.5258 2.54877C24.49 2.66231 24.4148 2.7461 24.3241 2.81695C24.2637 2.86418 24.1929 2.87493 24.1187 2.85059C24.0606 2.83167 24.0154 2.83546 24.0075 2.91024C24.0062 2.92265 24.0054 2.93836 23.9908 2.94248C23.9714 2.94801 23.9648 2.93026 23.9569 2.91788C23.6095 2.36965 23.2923 1.80825 23.2367 1.14292C23.2244 0.991798 23.2352 0.839052 23.2352 0.687026Z"
        fill="#76BD1D"
      />
      <path
        d="M25.3566 6.14844C25.3973 6.17747 25.391 6.22133 25.3894 6.26167C25.3871 6.3198 25.4073 6.32287 25.4506 6.29396C25.5409 6.23386 25.6377 6.20755 25.7445 6.24476C25.7559 6.24854 25.7702 6.25089 25.7741 6.27125C25.7279 6.28151 25.6839 6.25558 25.6381 6.26493C25.535 6.28605 25.4524 6.33911 25.3842 6.41737C25.2901 6.52535 25.193 6.62976 25.0412 6.65319C24.9981 6.65985 24.954 6.66106 24.8915 6.6664C25.0494 6.72362 25.1946 6.76124 25.3435 6.77903C26.1683 6.87743 26.8759 6.63574 27.4465 6.0293C27.7826 5.67192 27.9855 5.24211 28.0489 4.75458C28.1374 4.07449 27.9796 3.45609 27.5459 2.91936C27.1341 2.40973 26.5985 2.11703 25.9455 2.04334C25.5202 1.9952 25.112 2.05977 24.7198 2.22966C24.694 2.24101 24.6567 2.28264 24.6365 2.23132C24.6205 2.19087 24.6099 2.13898 24.6592 2.10545C24.6744 2.09569 24.6907 2.08768 24.7078 2.08157C25.6324 1.72676 26.4948 1.83811 27.2746 2.45181C27.7889 2.85657 28.0983 3.3961 28.1874 4.04512C28.2932 4.81479 28.0956 5.50351 27.5777 6.09137C27.1823 6.54022 26.6876 6.8191 26.0972 6.9099C25.3432 7.02582 24.6612 6.8498 24.0699 6.3592C23.5989 5.96833 23.3029 5.46983 23.1973 4.86743C23.0926 4.27072 23.1832 3.70178 23.4814 3.16933C23.5245 3.0925 23.6027 3.09625 23.6676 3.08001C23.7103 3.06938 23.6813 3.11249 23.6727 3.12634C23.5979 3.24744 23.5281 3.37135 23.4778 3.50438C23.1427 4.38997 23.2664 5.20744 23.8546 5.94888C24.1117 6.27284 24.4497 6.48001 24.8544 6.57034C24.9801 6.59839 25.1028 6.58707 25.2152 6.50332C25.339 6.41109 25.3648 6.28885 25.3566 6.14844Z"
        fill="#76BD1D"
      />
      <path
        d="M26.1808 3.85672C26.1808 3.92896 26.1808 4.00119 26.1808 4.07343C26.1808 4.10798 26.181 4.14473 26.1338 4.14742C26.0914 4.14984 26.0395 4.16301 26.0239 4.10424C26.0062 4.03717 25.9792 4.05579 25.9379 4.08388C25.7464 4.21448 25.3714 4.20498 25.1891 4.06302C25.0385 3.9457 25.0003 3.77854 25.0072 3.59949C25.0219 3.21724 25.3169 3.05402 25.6447 3.07472C25.7651 3.08229 25.8802 3.10045 25.986 3.16135C26.0755 3.21282 26.1321 3.28964 26.1643 3.38638C26.1797 3.43247 26.1659 3.45571 26.1155 3.4545C26.0819 3.4537 26.0483 3.45287 26.0148 3.45499C25.9351 3.46014 25.8717 3.45121 25.8191 3.37086C25.7552 3.27344 25.6443 3.27004 25.5385 3.2946C25.4155 3.32321 25.343 3.40662 25.317 3.52769C25.2723 3.73584 25.3638 3.90808 25.5394 3.95331C25.6796 3.98941 25.8263 3.93586 25.8762 3.83046C25.9054 3.76892 25.896 3.75261 25.8288 3.74981C25.8082 3.74894 25.7875 3.74981 25.7668 3.74951C25.6698 3.74867 25.6654 3.74156 25.6645 3.64225C25.6642 3.58476 25.6815 3.55665 25.7441 3.55816C25.8653 3.56115 25.9868 3.56035 26.1081 3.55854C26.1611 3.55778 26.1827 3.57966 26.1812 3.63226C26.1791 3.70716 26.1808 3.78198 26.1808 3.85672Z"
        fill="#76BD1D"
      />
      <path
        d="M26.2856 3.61648C26.2886 3.30338 26.4833 3.10132 26.7971 3.07782C26.9088 3.06946 27.0185 3.07165 27.1271 3.09648C27.4194 3.16335 27.5488 3.39989 27.5214 3.67654C27.4903 3.99006 27.3159 4.14325 26.9988 4.17031C26.9116 4.17826 26.8238 4.17517 26.7374 4.16112C26.4429 4.11184 26.2828 3.91584 26.2856 3.61648ZM26.9032 3.96194C27.0962 3.963 27.2242 3.82948 27.2259 3.62537C27.2278 3.42297 27.0986 3.28521 26.907 3.2851C26.7108 3.2851 26.5865 3.41476 26.5848 3.62159C26.583 3.82645 26.7088 3.96088 26.9032 3.96194Z"
        fill="#76BD1D"
      />
      <path
        d="M24.1016 3.90267C24.098 3.875 24.0978 3.84878 24.0713 3.82732C23.9861 3.75829 23.9672 3.67571 24.0087 3.57489C24.0502 3.47407 24.1258 3.40621 24.219 3.35633C24.3245 3.2999 24.4368 3.25895 24.555 3.24324C24.7268 3.22054 24.8627 3.14541 24.9564 2.99793C24.9606 2.99144 24.9658 2.98567 24.9718 2.98082C24.9754 2.97791 24.981 2.97745 24.9923 2.97371C25.0186 3.07922 24.9972 3.1828 24.9843 3.28521C24.9491 3.56372 24.8357 3.8037 24.6243 3.99376C24.5645 4.04762 24.4968 4.08081 24.4168 4.08743C24.3155 4.09606 24.252 4.05882 24.2064 3.96837C24.1851 3.92617 24.1543 3.8954 24.101 3.90195L24.1016 3.90267Z"
        fill="#76BD1D"
      />
      <path
        d="M24.101 3.90195C24.0918 3.94199 24.0548 3.95569 24.0273 3.97783C23.8841 4.09266 23.7742 4.23204 23.707 4.41014C23.7943 4.3628 23.8846 4.34263 23.9814 4.34914C24.1138 4.35807 24.2117 4.42104 24.274 4.53587C24.2929 4.57065 24.3291 4.61481 24.2795 4.6527C24.2426 4.68085 24.1311 4.6597 24.1117 4.62053C24.0673 4.53102 23.9933 4.51324 23.9041 4.5244C23.899 4.52489 23.8939 4.52565 23.8889 4.52667C23.7667 4.55487 23.6997 4.73142 23.7474 4.89972C23.7843 5.02994 23.8973 5.09201 24.0229 5.0511C24.0529 5.04134 24.0814 5.02873 24.0989 5.00107C24.1152 4.97533 24.1384 4.94842 24.1218 4.91614C24.1074 4.88814 24.0761 4.8982 24.0514 4.89699C23.9671 4.8929 23.951 4.87584 23.9597 4.80404C23.9639 4.76911 23.9809 4.75314 24.0146 4.75303C24.0972 4.75272 24.1798 4.75303 24.2625 4.75269C24.3129 4.75269 24.3202 4.78542 24.3201 4.82543C24.3197 4.92867 24.3201 5.03191 24.3201 5.13512C24.3201 5.17228 24.3201 5.20994 24.2696 5.21596C24.2274 5.22103 24.1918 5.21463 24.1791 5.16581C24.1774 5.15904 24.1715 5.15332 24.1644 5.14174C24.0529 5.24449 23.9245 5.25702 23.7893 5.20801C23.6575 5.16025 23.5858 5.05488 23.5406 4.92844C23.5106 4.84579 23.4952 4.75855 23.4951 4.67064C23.4956 4.38986 23.5764 4.13179 23.7161 3.8906C23.8169 3.71651 23.9285 3.54768 23.952 3.34017C23.9605 3.26527 23.9637 3.19132 23.9514 3.11688C23.9456 3.08499 23.9445 3.05243 23.948 3.02022C23.9879 3.06662 23.989 3.12331 23.9943 3.17758C24.0137 3.37816 23.9731 3.56739 23.879 3.74572C23.8045 3.88711 23.7237 4.02578 23.6772 4.18023C23.6688 4.2082 23.649 4.2356 23.6652 4.27526C23.789 4.12093 23.9124 3.97242 24.1016 3.90267L24.101 3.90195Z"
        fill="#76BD1D"
      />
      <path
        d="M26.9866 4.7061C26.9866 4.84764 26.9839 4.9893 26.9878 5.13073C26.9897 5.20033 26.9609 5.22004 26.896 5.21936C26.8311 5.21868 26.7949 5.20422 26.796 5.12853C26.7992 4.91194 26.796 4.69527 26.7981 4.47864C26.7985 4.43928 26.7753 4.37794 26.8389 4.37037C26.9037 4.3628 26.9784 4.33892 27.0263 4.41851C27.1047 4.54889 27.1867 4.67711 27.2676 4.80601C27.2809 4.82728 27.2959 4.84764 27.3259 4.86611C27.3259 4.73645 27.3272 4.60679 27.3253 4.47713C27.3244 4.41143 27.3285 4.36178 27.4177 4.36318C27.4912 4.36431 27.5172 4.38672 27.5159 4.46158C27.5121 4.67813 27.5154 4.89483 27.5137 5.11146C27.5134 5.14882 27.5337 5.20525 27.4737 5.21278C27.4104 5.22076 27.339 5.24177 27.2933 5.16585C27.2175 5.0399 27.1392 4.9155 27.0617 4.79061C27.0427 4.76033 27.0229 4.73051 27.0035 4.7005L26.9866 4.7061Z"
        fill="#76BD1D"
      />
      <path
        d="M24.4554 4.78523C24.4554 4.67438 24.4576 4.56349 24.4545 4.45276C24.4528 4.39149 24.4717 4.36272 24.5378 4.36454C24.6591 4.36791 24.7803 4.36359 24.9016 4.3662C25.0064 4.36848 25.0969 4.40477 25.1377 4.50919C25.177 4.60986 25.1703 4.70773 25.0812 4.78387C25.0496 4.81078 25.0689 4.82588 25.0868 4.84609C25.1742 4.94449 25.1488 5.07044 25.1644 5.18526C25.1698 5.22489 25.1189 5.21637 25.0901 5.21717C25.0414 5.21853 24.9863 5.225 24.9739 5.15767C24.9641 5.10469 24.9587 5.05065 24.9527 4.99694C24.9446 4.92583 24.906 4.89298 24.8341 4.89313C24.6133 4.89359 24.6511 4.87614 24.6474 5.06866C24.6471 5.08153 24.6474 5.09443 24.6474 5.10734C24.647 5.21058 24.596 5.24548 24.4947 5.21486C24.4538 5.20248 24.456 5.17164 24.4558 5.14091C24.4552 5.02238 24.4554 4.9038 24.4554 4.78523ZM24.7815 4.73823C24.8048 4.73823 24.8281 4.7391 24.8512 4.7377C24.9338 4.73278 24.9614 4.70027 24.9539 4.61822C24.9471 4.54412 24.9122 4.52398 24.7895 4.52361C24.6369 4.52315 24.6377 4.52361 24.6466 4.67325C24.6493 4.71866 24.6658 4.74031 24.7118 4.73842C24.735 4.73743 24.7583 4.73823 24.7815 4.73823Z"
        fill="#76BD1D"
      />
      <path
        d="M25.2932 4.79076C25.2932 4.67472 25.2947 4.55869 25.2925 4.44258C25.2915 4.38634 25.3139 4.36408 25.3703 4.36477C25.5328 4.36666 25.6954 4.36707 25.8579 4.36477C25.9249 4.36378 25.9321 4.40144 25.9321 4.45416C25.9321 4.50498 25.922 4.5395 25.8605 4.53821C25.765 4.53628 25.6695 4.53969 25.5741 4.53749C25.5187 4.53621 25.4948 4.55642 25.4951 4.61398C25.4955 4.66905 25.5143 4.69501 25.5718 4.69346C25.6491 4.69122 25.7266 4.69508 25.804 4.69255C25.8662 4.69054 25.8999 4.70795 25.8999 4.77895C25.8999 4.85298 25.8596 4.86323 25.8006 4.86187C25.7233 4.86009 25.6458 4.86357 25.5684 4.86119C25.4935 4.85892 25.4968 4.90812 25.4954 4.95959C25.494 5.01337 25.5038 5.04936 25.5705 5.04709C25.6684 5.0438 25.7666 5.0486 25.8645 5.0458C25.9274 5.04402 25.9445 5.07502 25.9449 5.13103C25.9452 5.18704 25.9297 5.2191 25.8665 5.21842C25.7014 5.21668 25.5362 5.21724 25.3711 5.21811C25.3161 5.21842 25.2917 5.19503 25.2927 5.13886C25.2946 5.02283 25.2933 4.90679 25.2932 4.79076Z"
        fill="#76BD1D"
      />
      <path
        d="M26.0503 4.79329C26.0503 4.67976 26.0525 4.56622 26.0494 4.45268C26.0478 4.39092 26.0677 4.36344 26.1332 4.36465C26.2908 4.36763 26.4483 4.36763 26.6059 4.36465C26.6728 4.36355 26.6896 4.39599 26.6894 4.45526C26.6893 4.51452 26.6664 4.5398 26.6064 4.53852C26.5083 4.53632 26.4101 4.53984 26.312 4.53772C26.2559 4.53651 26.2417 4.56395 26.2422 4.61421C26.2427 4.66235 26.2521 4.6944 26.3098 4.69327C26.3976 4.69153 26.4855 4.69418 26.5732 4.69304C26.6253 4.69236 26.6476 4.71386 26.6467 4.76722C26.6459 4.81873 26.6419 4.86119 26.5752 4.86074C26.49 4.86013 26.4047 4.86403 26.3195 4.86074C26.2476 4.85782 26.2418 4.89858 26.242 4.95433C26.242 5.00898 26.2448 5.05083 26.3184 5.0475C26.4138 5.04319 26.5096 5.04898 26.6051 5.04576C26.6672 5.04368 26.6925 5.06469 26.6932 5.12982C26.694 5.1984 26.6677 5.22065 26.6018 5.21921C26.4495 5.21626 26.2972 5.21626 26.1447 5.21921C26.0765 5.22057 26.0458 5.19995 26.049 5.12645C26.0539 5.01545 26.0503 4.90426 26.0503 4.79329Z"
        fill="#76BD1D"
      />
      <path
        d="M25.3566 6.14844C25.3424 6.15381 25.3262 6.15551 25.3148 6.16455C25.2117 6.2449 25.1068 6.23078 25.0242 6.12425C24.9556 6.03584 24.9219 5.93184 24.91 5.8242C24.8945 5.68383 24.8667 5.55406 24.7327 5.47281C24.7605 5.43874 24.7908 5.44752 24.8159 5.4501C25.0711 5.47591 25.2966 5.56114 25.4579 5.77429C25.5025 5.83325 25.5238 5.89649 25.509 5.96927C25.4993 6.01661 25.4783 6.05673 25.4273 6.07281C25.3899 6.08462 25.3667 6.11086 25.3566 6.14844Z"
        fill="#76BD1D"
      />
      <path
        d="M26.2496 6.58392C26.163 6.50032 26.0698 6.50497 25.9769 6.50607C25.9329 6.50633 25.8895 6.49492 25.8513 6.47299C25.7722 6.42868 25.7586 6.37331 25.8061 6.29569C25.897 6.14691 25.9747 6.13844 26.1024 6.26344C26.1881 6.34731 26.2374 6.44802 26.2496 6.58392Z"
        fill="#76BD1D"
      />
      <path
        d="M37.3479 5.4796H40.8001C41.965 5.4796 42.8387 5.79214 43.4212 6.41722C44.0036 7.0423 44.2949 7.95861 44.2949 9.16615V10.6365C44.2949 11.8441 44.0036 12.7604 43.4212 13.3854C42.8387 14.0105 41.965 14.3231 40.8001 14.3231H39.692V20.3963H37.3479V5.4796ZM40.8001 12.1921C41.1837 12.1921 41.4678 12.0856 41.6525 11.8725C41.8514 11.6594 41.9508 11.2971 41.9508 10.7857V9.01699C41.9508 8.50556 41.8514 8.1433 41.6525 7.9302C41.4678 7.7171 41.1837 7.61056 40.8001 7.61056H39.692V12.1921H40.8001Z"
      />
      <path
        d="M47.4422 7.61056H44.9916V5.4796H52.2368V7.61056H49.7862V20.3963H47.4422V7.61056Z"
      />
      <path
        d="M56.7846 5.4796H60.322C61.5295 5.4796 62.4103 5.76373 62.9644 6.33198C63.5184 6.88603 63.7954 7.74552 63.7954 8.91044V9.50711C63.7954 10.2743 63.6676 10.8993 63.4119 11.3823C63.1703 11.8654 62.7939 12.2134 62.2825 12.4265V12.4691C63.4474 12.8669 64.0298 13.904 64.0298 15.5803V16.8589C64.0298 18.0096 63.7244 18.8904 63.1135 19.5013C62.5169 20.098 61.6361 20.3963 60.4711 20.3963H56.7846V5.4796ZM60.045 11.5528C60.5138 11.5528 60.8618 11.4321 61.0891 11.1906C61.3306 10.9491 61.4514 10.5442 61.4514 9.97592V9.14485C61.4514 8.605 61.3519 8.21433 61.153 7.97282C60.9684 7.73131 60.67 7.61056 60.258 7.61056H59.1286V11.5528H60.045ZM60.4711 18.2653C60.8831 18.2653 61.1886 18.1588 61.3875 17.9457C61.5863 17.7184 61.6858 17.3348 61.6858 16.795V15.4951C61.6858 14.8132 61.565 14.3444 61.3235 14.0887C61.0962 13.8187 60.7127 13.6838 60.1728 13.6838H59.1286V18.2653H60.4711Z"
      />
      <path
        d="M67.2113 5.4796H70.3864L72.8157 20.3963H70.4716L70.0455 17.4343V17.4769H67.3818L66.9556 20.3963H64.782L67.2113 5.4796ZM69.7684 15.4525L68.7243 8.07937H68.6816L67.6588 15.4525H69.7684Z"
      />
      <path
        d="M76.9378 20.6094C75.8013 20.6094 74.9418 20.2897 74.3593 19.6505C73.7768 18.997 73.4856 18.0664 73.4856 16.8589V16.0065H75.7018V17.0294C75.7018 17.9954 76.1067 18.4784 76.9165 18.4784C77.3142 18.4784 77.6126 18.3648 77.8115 18.1375C78.0246 17.896 78.1311 17.5124 78.1311 16.9868C78.1311 16.3617 77.989 15.8147 77.7049 15.3459C77.4208 14.8629 76.8951 14.2876 76.128 13.6199C75.162 12.7675 74.4872 12.0003 74.1036 11.3184C73.72 10.6223 73.5282 9.84096 73.5282 8.97437C73.5282 7.79524 73.8266 6.88603 74.4232 6.24674C75.0199 5.59325 75.8865 5.2665 77.023 5.2665C78.1453 5.2665 78.9906 5.59325 79.5588 6.24674C80.1413 6.88603 80.4325 7.80945 80.4325 9.01699V9.63496H78.2163V8.86782C78.2163 8.35639 78.1169 7.98703 77.918 7.75972C77.7191 7.51821 77.4279 7.39746 77.0443 7.39746C76.263 7.39746 75.8723 7.87337 75.8723 8.8252C75.8723 9.36504 76.0144 9.86937 76.2985 10.3382C76.5968 10.807 77.1295 11.3752 77.8967 12.0429C78.8769 12.8953 79.5517 13.6696 79.9211 14.3657C80.2905 15.0618 80.4751 15.8787 80.4751 16.8163C80.4751 18.038 80.1697 18.9757 79.5588 19.6291C78.9622 20.2826 78.0885 20.6094 76.9378 20.6094Z"
      />
      <path
        d="M82.3732 20.4815C81.947 20.4815 81.5847 20.4531 81.2864 20.3963V18.2653C81.5137 18.3222 81.7694 18.3506 82.0536 18.3506C82.5224 18.3506 82.8704 18.2369 83.0977 18.0096C83.325 17.7681 83.4387 17.4059 83.4387 16.9228V5.4796H85.7827V16.8589C85.7827 18.0807 85.4986 18.9899 84.9303 19.5865C84.3763 20.1832 83.5239 20.4815 82.3732 20.4815Z"
      />
    </svg>
  );
};

export const Logo: FC<LogoProps> = ({ ...props }) => {
  return <MobileNavigationLogo {...props} />;
};