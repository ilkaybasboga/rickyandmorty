import React from "react";
import { useNavigate } from "react-router-dom";
import randm from "../../asset/58f37720a4fa116215a9240f.png";
import "./NavbarChar.scss";

const NavbarChar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
         <svg
        width="46"
        height="23"
        viewBox="0 0 46 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>navigate(-1)}
      >
        <path
          d="M11.097 6.76153C10.1982 7.72307 9.25669 8.73039 8.35793 9.69193C8.31513 9.73772 8.45548 9.9547 8.50127 9.9975C8.99297 10.1139 9.44188 10.2762 9.97339 10.2582C10.8165 10.2741 11.6107 10.1586 12.411 10.2203C13.3884 10.276 14.4365 9.79719 15.3891 10.4302C16.3635 10.3973 17.335 10.2758 18.2696 10.3773C18.8041 10.448 19.3874 10.65 19.9617 10.5863C20.0503 10.5833 20.2304 10.6659 20.2792 10.7973C20.5111 11.0999 20.8257 11.2223 21.2228 11.1645C22.1972 11.1316 23.1717 11.0988 24.1461 11.0659C24.5005 11.0539 24.6836 11.2251 24.9126 11.4391C25.2361 11.8273 25.5416 11.6839 25.7954 11.3206C25.9238 11.1832 26.0492 10.9573 26.315 10.9483C28.5296 10.8736 30.79 10.8417 33.0475 10.7211C34.1712 11.171 35.3597 10.9092 36.4685 10.9161C37 10.8981 37.3693 11.3291 37.8978 11.2226C38.4263 11.1161 38.915 11.1439 39.4923 11.1688C39.6267 11.2086 39.8129 11.4684 40.0328 11.4166C40.6957 11.3499 41.2482 11.952 41.9051 11.7082C42.6934 11.4155 43.426 12.1003 44.2203 11.9848C44.706 11.924 45.1241 12.4864 45.142 13.0179C45.1629 13.638 44.7807 14.1387 44.2064 14.2024C43.4091 14.2293 42.5691 14.302 41.726 14.2861C40.6172 14.2792 39.5114 14.3608 38.4026 14.3539C37.7825 14.3748 37.1932 13.9956 36.4875 14.1081C35.8246 14.1749 35.1587 14.153 34.4958 14.2197C33.7872 14.2436 33.1671 14.2645 32.4584 14.2885C31.7497 14.3124 31.1296 14.3333 30.4209 14.3572C29.2235 14.3533 27.9863 14.4837 26.7371 14.2598C25.5766 14.0329 24.3881 14.2948 23.1479 14.3366C21.9077 14.3785 20.579 14.4233 19.3388 14.4652C18.7187 14.4861 18.1264 14.0183 17.4665 14.1736C17.3351 14.2224 17.1062 14.0084 16.9688 13.88C16.7887 13.7974 16.5139 13.5406 16.4283 13.6322C15.0777 14.3429 13.6852 13.8134 12.3196 14.0812C11.8796 14.1848 11.6328 13.4393 11.162 13.9429C10.8196 14.3092 10.3249 14.1042 9.92776 14.162C9.75059 14.1679 9.6222 14.3053 9.75956 14.4337C10.5867 15.2926 11.4567 16.1058 12.3267 16.919C13.5241 16.9229 13.9601 18.0168 14.7783 18.61C15.1874 18.9066 15.7557 18.6657 16.128 19.1852C16.3629 19.5764 16.769 19.7844 17.0895 20.084C17.4558 20.4264 17.8679 20.8115 18.2342 21.1539C18.7379 21.6247 18.7379 21.6247 18.1815 22.2199C18.0959 22.3115 17.9675 22.4489 17.8819 22.5404C17.5365 22.8182 16.8308 22.9307 16.5103 22.6311C16.0067 22.1603 15.512 21.9553 14.8003 21.8906C14.223 21.8657 13.6397 21.6637 13.0504 21.2845C12.6413 20.9879 12.0153 20.8317 11.4838 20.8496C11.3066 20.8556 11.2608 20.8128 11.2976 20.5898C11.3285 20.1897 11.1393 19.8413 10.6994 19.9449C10.1709 20.0514 10.0126 19.3029 9.61543 19.3607C9.04112 19.4244 8.72061 19.1248 8.53148 18.7764C8.1592 18.2569 7.41669 18.5923 6.99862 18.03C6.71792 17.596 6.22023 17.3024 5.85393 16.96C4.97107 17.0785 4.59281 16.3818 4.04336 15.8682C3.72284 15.5686 3.2003 15.8523 2.8768 15.4641C2.64487 15.1616 2.36417 14.7276 1.79285 14.8799C1.75005 14.9257 1.65847 14.8401 1.65847 14.8401C1.76594 14.0827 1.17967 13.792 0.724785 13.4526C0.224111 13.0705 0.160387 12.4961 0.368397 12.09C0.533612 11.7297 0.656025 11.4152 0.55548 11.0638C0.494745 10.5781 0.623141 10.4407 1.11185 10.4686C1.28903 10.4626 1.45723 10.1909 1.58562 10.0535C1.88521 9.733 2.23058 9.45528 2.07827 8.88396C2.56698 8.91181 2.91535 8.72268 3.16915 8.35937C3.38014 8.04185 3.68272 7.80992 3.93951 7.53519C4.2391 7.21468 4.53868 6.89417 4.83827 6.57366C5.13785 6.25315 5.43744 5.93263 5.73702 5.61212C6.03661 5.29161 6.33619 4.97109 6.63578 4.65058C6.89257 4.37585 7.14935 4.10113 7.40614 3.82641C7.70573 3.50589 8.00531 3.18538 8.3049 2.86487C8.56169 2.59014 8.37555 2.33037 8.45517 2.06162C9.47838 2.16012 9.66546 1.13391 10.3622 0.755653C10.9057 1.09206 11.3495 -0.208875 11.8681 0.704828C11.9139 0.747627 12.0881 0.653063 12.2195 0.604286C12.3937 0.509722 12.6535 0.323583 12.745 0.409179C13.1083 0.662976 13.3433 1.05414 13.7494 1.26215C14.2013 1.51296 13.8678 2.14501 14.2769 2.44161C14.3685 2.5272 14.4233 2.83576 14.3775 2.79296C13.6808 3.17122 13.9734 3.95952 13.5027 4.46318C12.6775 4.97881 11.9102 5.89157 11.097 6.76153ZM21.7046 12.3012C21.7016 12.2126 21.6986 12.124 21.6956 12.0354C21.5642 12.0842 21.4757 12.0872 21.3901 12.1788C21.3473 12.2246 21.3503 12.3131 21.396 12.3559C21.5304 12.3958 21.5732 12.35 21.7046 12.3012ZM22.5596 12.6714C22.5566 12.5828 22.5964 12.4485 22.6362 12.3141C22.5477 12.3171 22.4591 12.3201 22.4591 12.3201C22.3735 12.4116 22.3765 12.5002 22.3367 12.6346C22.4282 12.7202 22.5168 12.7172 22.5596 12.6714Z"
          fill="#44281D"
        />
      </svg>
      <img src={randm} alt="R&M" />
    </div>
  );
};

export default NavbarChar;