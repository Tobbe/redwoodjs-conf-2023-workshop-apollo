interface ConferenceLogoProps {
  width?: string
}

const ConferenceLogo = ({ width }: ConferenceLogoProps) => {
  return (
    <svg
      width={width}
      viewBox="0 0 584 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6983 1.15967C29.2689 1.32749 29.9234 1.57923 30.6618 1.91488C31.4003 2.21697 32.0884 2.5694 32.7261 2.97218C33.3974 3.34139 33.968 3.76095 34.4379 4.23086C34.9078 4.66721 35.1763 5.10355 35.2435 5.5399C35.277 5.97624 35.1092 6.47972 34.74 7.05032C34.4043 7.62093 33.968 8.17475 33.431 8.71179C32.9275 9.21526 32.3904 9.65161 31.8198 10.0208C31.2828 10.39 30.8297 10.5914 30.4605 10.625C29.957 10.6586 29.4871 10.5914 29.0507 10.4236C28.6144 10.2222 28.1948 10.004 27.792 9.76909C27.3893 9.50056 26.9865 9.23204 26.5837 8.96352C26.2145 8.69501 25.8453 8.47683 25.4761 8.30901C23.6971 7.67127 22.0021 7.41954 20.391 7.5538C18.7798 7.68806 17.3198 8.09083 16.0107 8.76213C14.7353 9.43343 13.6276 10.3397 12.6878 11.4809C11.748 12.5885 11.0599 13.8137 10.6236 15.1563C10.1872 16.4989 10.0362 17.9086 10.1704 19.3854C10.3383 20.8623 10.8585 22.2888 11.7312 23.665C12.3018 24.5712 13.0738 25.3936 14.0472 26.132C15.0206 26.8704 16.1114 27.4578 17.3198 27.8942C18.5617 28.297 19.8875 28.5151 21.2972 28.5487C22.7069 28.5487 24.1502 28.2802 25.6271 27.7431C25.9963 27.6089 26.3823 27.4075 26.7851 27.139C27.1879 26.8369 27.5907 26.5516 27.9934 26.2831C28.4298 26.0145 28.8661 25.7796 29.3025 25.5782C29.7388 25.3768 30.1919 25.2761 30.6618 25.2761C31.0311 25.2761 31.4842 25.4271 32.0212 25.7292C32.5918 26.0313 33.1289 26.4005 33.6323 26.8369C34.1358 27.2732 34.5554 27.7599 34.891 28.297C35.2267 28.8004 35.3945 29.2703 35.3945 29.7067C35.3945 30.2773 35.1596 30.7975 34.6896 31.2675C34.2533 31.7374 33.7163 32.1737 33.0785 32.5765C32.4408 32.9457 31.7863 33.2814 31.115 33.5834C30.4772 33.8855 29.9402 34.1205 29.5039 34.2883C26.2145 35.6309 22.9251 36.2183 19.6358 36.0505C16.3464 35.8491 13.3423 35.0603 10.6236 33.6841C7.93836 32.2744 5.70629 30.3276 3.92734 27.8438C2.18196 25.36 1.1918 22.507 0.956842 19.2848C0.789017 16.566 1.12467 14.099 1.96379 11.8837C2.83648 9.63482 4.07838 7.68806 5.6895 6.04337C7.30062 4.39869 9.21383 3.08965 11.4291 2.11627C13.6444 1.14289 16.0275 0.555499 18.5785 0.354108C19.1826 0.320543 19.8875 0.286979 20.693 0.253414C21.5322 0.21985 22.4049 0.236632 23.3111 0.303761C24.2174 0.337326 25.1404 0.421238 26.0802 0.555498C27.02 0.689758 27.8927 0.891149 28.6983 1.15967ZM101.215 8.10762C102.457 9.81943 103.296 11.6823 103.733 13.6962C104.202 15.7101 104.337 17.7072 104.135 19.6875C103.934 21.6679 103.43 23.5475 102.625 25.3265C101.819 27.1054 100.812 28.6494 99.604 29.9584C97.758 31.9052 95.593 33.382 93.1092 34.389C90.6254 35.3624 88.0577 35.9162 85.4061 36.0505C82.788 36.1512 80.1867 35.8491 77.6022 35.1442C75.0177 34.4058 72.7017 33.2814 70.6543 31.7709C68.6068 30.2605 66.9453 28.3809 65.6699 26.132C64.3944 23.8832 63.7399 21.2987 63.7063 18.3785C63.6727 16.9352 63.7902 15.5926 64.0587 14.3507C64.3608 13.1088 64.7636 11.9676 65.2671 10.9271C65.7705 9.88656 66.3412 8.94674 66.9789 8.10762C67.6502 7.23493 68.3383 6.46293 69.0431 5.79164C70.4529 4.4826 72.2486 3.32461 74.4303 2.31766C76.612 1.31071 79.0791 0.672976 81.8314 0.404458C84.0802 0.236631 86.1948 0.337326 88.1752 0.706542C90.1891 1.04219 92.0184 1.57923 93.663 2.31766C95.3077 3.02252 96.7678 3.87843 98.0433 4.88538C99.3187 5.89233 100.376 6.96641 101.215 8.10762ZM85.0536 28.6494C86.027 28.5823 86.9668 28.3976 87.8731 28.0956C88.7793 27.7599 89.6185 27.3403 90.3905 26.8369C91.196 26.3334 91.9009 25.7628 92.505 25.1251C93.1428 24.4873 93.663 23.816 94.0658 23.1112C95.1735 20.9966 95.5762 18.9827 95.2742 17.0695C95.0056 15.1227 94.2672 13.4277 93.0589 11.9844C91.8841 10.5411 90.3905 9.43343 88.5779 8.66144C86.7654 7.85588 84.8858 7.5538 82.939 7.75519C80.2874 8.02371 78.1057 8.89639 76.3939 10.3733C74.682 11.8165 73.608 13.5619 73.1716 15.6094C72.7688 17.4219 72.8024 19.1505 73.2723 20.7952C73.7422 22.4399 74.531 23.8664 75.6386 25.0747C76.7799 26.2831 78.156 27.2229 79.7671 27.8942C81.4118 28.5319 83.174 28.7836 85.0536 28.6494ZM141.264 25.9306C141.264 26.5348 141.297 27.29 141.365 28.1963C141.465 29.1025 141.516 30.0088 141.516 30.915C141.549 31.8213 141.499 32.6772 141.365 33.4827C141.264 34.2547 141.012 34.8421 140.609 35.2449C140.307 35.547 139.804 35.7652 139.099 35.8994C138.394 36.0337 137.639 36.084 136.833 36.0505C136.061 36.0505 135.323 35.9833 134.618 35.8491C133.947 35.6812 133.494 35.4799 133.259 35.2449C132.99 34.9764 132.805 34.5233 132.705 33.8855C132.604 33.2142 132.537 32.4926 132.503 31.7206C132.503 30.915 132.52 30.1095 132.554 29.3039C132.587 28.4648 132.604 27.7263 132.604 27.0886V9.76909C132.604 8.82927 132.57 7.87266 132.503 6.89928C132.436 5.89233 132.453 4.98608 132.554 4.18052C132.654 3.34139 132.873 2.65331 133.208 2.11627C133.544 1.54567 134.114 1.21002 134.92 1.10932C135.222 1.07576 135.591 1.05897 136.028 1.05897C136.464 1.02541 136.917 1.02541 137.387 1.05897C137.857 1.05897 138.327 1.09254 138.797 1.15967C139.267 1.2268 139.703 1.32749 140.106 1.46175C140.509 1.59601 140.911 1.83097 141.314 2.16662C141.717 2.4687 142.103 2.83792 142.472 3.27426C142.841 3.67704 143.211 4.11339 143.58 4.5833C143.949 5.01964 144.301 5.4392 144.637 5.84198C145.409 6.74824 146.097 7.58736 146.701 8.35936C147.339 9.13135 147.96 9.88656 148.564 10.625C149.168 11.3634 149.789 12.1354 150.427 12.941C151.098 13.7465 151.854 14.6528 152.693 15.6597C152.995 16.029 153.347 16.4821 153.75 17.0191C154.186 17.5226 154.623 18.0093 155.059 18.4792C155.495 18.9155 155.898 19.2848 156.267 19.5868C156.637 19.8554 156.955 19.9561 157.224 19.8889C157.593 19.7882 157.845 19.4022 157.979 18.7309C158.113 18.0596 158.181 17.2709 158.181 16.3646C158.214 15.4583 158.197 14.5185 158.13 13.5451C158.097 12.5382 158.08 11.6655 158.08 10.9271C158.08 10.2893 158.046 9.51735 157.979 8.61109C157.946 7.67127 157.929 6.74824 157.929 5.84198C157.929 4.93573 157.979 4.11339 158.08 3.37496C158.181 2.63653 158.382 2.11627 158.684 1.81419C158.919 1.57923 159.372 1.39462 160.043 1.26036C160.748 1.09254 161.487 0.991843 162.259 0.958279C163.031 0.924714 163.769 0.975062 164.474 1.10932C165.212 1.24358 165.749 1.47854 166.085 1.81419C166.387 2.11627 166.589 2.60296 166.689 3.27426C166.79 3.912 166.84 4.63364 166.84 5.4392C166.84 6.24476 166.807 7.0671 166.74 7.90623C166.706 8.71179 166.689 9.39987 166.689 9.97048V27.29C166.689 27.8942 166.706 28.599 166.74 29.4046C166.773 30.1766 166.79 30.9486 166.79 31.7206C166.79 32.4926 166.74 33.1974 166.639 33.8352C166.538 34.4729 166.354 34.9428 166.085 35.2449C165.817 35.5134 165.397 35.7148 164.826 35.8491C164.289 35.9498 163.702 36.0001 163.064 36.0001C162.46 36.0001 161.839 35.9665 161.201 35.8994C160.597 35.8323 160.094 35.7316 159.691 35.5973C159.221 35.4295 158.785 35.161 158.382 34.7918C157.979 34.389 157.576 33.9694 157.174 33.5331C156.804 33.0632 156.452 32.5933 156.116 32.1234C155.781 31.6534 155.445 31.2339 155.109 30.8647C153.599 29.0857 152.156 27.4243 150.779 25.8803C149.437 24.3027 148.044 22.6245 146.601 20.8455C145.963 20.04 145.275 19.2008 144.536 18.3282C143.832 17.4555 142.942 16.8345 141.868 16.4653C141.599 17.0359 141.415 17.6736 141.314 18.3785C141.213 19.0834 141.163 19.8554 141.163 20.6945C141.163 21.5 141.18 22.356 141.213 23.2622C141.247 24.1349 141.264 25.0244 141.264 25.9306ZM211.015 1.15967C211.854 1.15967 212.912 1.1261 214.187 1.05897C215.496 0.991843 216.788 0.958279 218.064 0.958279C219.373 0.924714 220.548 0.975062 221.588 1.10932C222.629 1.21002 223.35 1.44497 223.753 1.81419C224.022 2.0827 224.206 2.50227 224.307 3.07287C224.441 3.60991 224.508 4.1973 224.508 4.83503C224.508 5.47277 224.441 6.07694 224.307 6.64754C224.173 7.21815 223.988 7.62093 223.753 7.85588C223.35 8.2251 222.746 8.47683 221.941 8.61109C221.169 8.71179 220.313 8.76213 219.373 8.76213C218.467 8.72857 217.543 8.67822 216.604 8.61109C215.697 8.54396 214.925 8.5104 214.288 8.5104C213.65 8.5104 212.844 8.47683 211.871 8.4097C210.931 8.34257 209.975 8.30901 209.001 8.30901C208.061 8.30901 207.189 8.35936 206.383 8.46005C205.578 8.52718 205.007 8.71179 204.671 9.01387C204.369 9.28239 204.168 9.70195 204.067 10.2726C203.966 10.8432 203.916 11.4473 203.916 12.0851C203.95 12.6892 204.034 13.2598 204.168 13.7969C204.302 14.3339 204.47 14.6864 204.671 14.8542C205.041 15.1898 205.661 15.3912 206.534 15.4583C207.44 15.5255 208.447 15.5423 209.555 15.5087C210.663 15.4751 211.837 15.408 213.079 15.3073C214.321 15.2066 215.496 15.1563 216.604 15.1563C217.711 15.1227 218.701 15.173 219.574 15.3073C220.447 15.408 221.068 15.643 221.437 16.0122C221.739 16.3143 221.941 16.7674 222.041 17.3716C222.175 17.9422 222.226 18.5463 222.192 19.1841C222.159 19.7882 222.075 20.3756 221.941 20.9462C221.806 21.4833 221.638 21.8525 221.437 22.0539C221.135 22.3559 220.648 22.5573 219.977 22.658C219.339 22.7587 218.618 22.8259 217.812 22.8594C217.04 22.8594 216.234 22.8426 215.395 22.8091C214.556 22.7419 213.801 22.7084 213.13 22.7084C212.492 22.7084 211.754 22.6916 210.914 22.658C210.075 22.5909 209.236 22.5573 208.397 22.5573C207.591 22.5238 206.853 22.5573 206.182 22.658C205.51 22.7252 205.007 22.9098 204.671 23.2119C204.134 23.6818 203.849 24.4873 203.815 25.6285C203.815 26.7362 203.866 27.9277 203.966 29.2032C204.067 30.4787 204.101 31.687 204.067 32.8282C204.067 33.9694 203.815 34.7918 203.312 35.2952C203.077 35.5302 202.607 35.7148 201.902 35.8491C201.197 35.9833 200.442 36.0505 199.637 36.0505C198.831 36.0505 198.059 36.0001 197.321 35.8994C196.616 35.7652 196.112 35.5638 195.81 35.2952C195.575 35.0603 195.407 34.6407 195.307 34.0366C195.206 33.3988 195.139 32.694 195.105 31.922C195.105 31.15 195.122 30.3444 195.156 29.5053C195.189 28.6326 195.206 27.827 195.206 27.0886V9.467C195.206 8.82926 195.172 8.07405 195.105 7.20136C195.072 6.29511 195.089 5.42242 195.156 4.5833C195.223 3.74417 195.374 3.02252 195.609 2.41835C195.877 1.78062 196.33 1.42819 196.968 1.36106C197.975 1.15967 199.016 1.04219 200.09 1.00863C201.164 0.941496 202.271 0.924714 203.413 0.958279C204.554 0.958279 205.745 0.991843 206.987 1.05897C208.263 1.1261 209.605 1.15967 211.015 1.15967ZM268.499 1.26036C269.338 1.26036 270.395 1.2268 271.671 1.15967C272.946 1.05897 274.222 1.00863 275.497 1.00863C276.806 1.00863 277.981 1.07576 279.022 1.21002C280.096 1.31071 280.834 1.56245 281.237 1.96523C281.472 2.20018 281.656 2.60296 281.791 3.17357C281.925 3.71061 281.992 4.28121 281.992 4.88538C281.992 5.48955 281.925 6.07694 281.791 6.64754C281.656 7.18458 281.472 7.57058 281.237 7.80553C280.901 8.14118 280.381 8.35936 279.676 8.46005C278.971 8.56075 278.166 8.61109 277.259 8.61109C276.387 8.61109 275.48 8.59431 274.541 8.56075C273.601 8.49362 272.728 8.46005 271.923 8.46005C271.151 8.46005 270.295 8.42649 269.355 8.35936C268.415 8.29223 267.492 8.24188 266.586 8.20831C265.713 8.17475 264.907 8.19153 264.169 8.25866C263.431 8.32579 262.86 8.49362 262.457 8.76213C262.189 8.92996 261.971 9.28239 261.803 9.81943C261.635 10.3229 261.534 10.8767 261.501 11.4809C261.467 12.0851 261.501 12.6725 261.601 13.2431C261.736 13.7801 261.971 14.1997 262.306 14.5017C262.675 14.8374 263.28 15.0556 264.119 15.1563C264.991 15.2234 265.965 15.2402 267.039 15.2066C268.146 15.1395 269.304 15.0556 270.513 14.9549C271.721 14.8206 272.862 14.7367 273.936 14.7031C275.044 14.6696 276.017 14.7199 276.857 14.8542C277.729 14.9549 278.367 15.2066 278.77 15.6094C279.005 15.8443 279.189 16.2471 279.324 16.8177C279.458 17.3548 279.525 17.9254 279.525 18.5295C279.559 19.1337 279.508 19.7211 279.374 20.2917C279.24 20.8287 279.038 21.2315 278.77 21.5C278.401 21.8693 277.88 22.1042 277.209 22.2049C276.538 22.3056 275.816 22.356 275.044 22.356C274.272 22.356 273.5 22.3224 272.728 22.2553C271.956 22.1881 271.318 22.1546 270.815 22.1546C270.211 22.1546 269.489 22.1378 268.65 22.1042C267.844 22.0371 267.039 22.0035 266.233 22.0035C265.428 22.0035 264.673 22.0371 263.968 22.1042C263.296 22.1713 262.793 22.3056 262.457 22.507C262.189 22.6748 261.971 23.0273 261.803 23.5643C261.668 24.1013 261.585 24.6887 261.551 25.3265C261.551 25.9306 261.601 26.5348 261.702 27.139C261.836 27.7096 262.038 28.1123 262.306 28.3473C262.642 28.6494 263.196 28.8508 263.968 28.9515C264.74 29.0522 265.596 29.1025 266.535 29.1025C267.475 29.0689 268.432 29.0186 269.405 28.9515C270.412 28.8843 271.302 28.8508 272.074 28.8508C272.678 28.8508 273.433 28.834 274.339 28.8004C275.279 28.7333 276.219 28.6997 277.159 28.6997C278.132 28.6997 279.022 28.7501 279.827 28.8508C280.633 28.9515 281.203 29.1696 281.539 29.5053C281.774 29.7067 281.958 30.0759 282.093 30.6129C282.227 31.15 282.294 31.7374 282.294 32.3751C282.294 32.9793 282.227 33.5667 282.093 34.1373C281.992 34.7079 281.807 35.1274 281.539 35.3959C281.304 35.6309 280.935 35.7987 280.431 35.8994C279.928 35.9665 279.357 36.0169 278.719 36.0505C278.115 36.0505 277.461 36.0505 276.756 36.0505C276.085 36.0169 275.447 36.0001 274.843 36.0001H260.192C259.587 36.0001 258.933 36.0169 258.228 36.0505C257.523 36.0505 256.852 36.0337 256.214 36.0001C255.61 35.9665 255.056 35.9162 254.553 35.8491C254.049 35.7484 253.697 35.5973 253.495 35.3959C253.26 35.161 253.093 34.7414 252.992 34.1373C252.891 33.4995 252.824 32.7947 252.791 32.0227C252.791 31.2507 252.791 30.4451 252.791 29.606C252.824 28.7333 252.841 27.9445 252.841 27.2397V9.56769C252.841 8.62788 252.807 7.70484 252.74 6.79858C252.707 5.89233 252.723 5.06999 252.791 4.33156C252.891 3.55956 253.093 2.92183 253.395 2.41835C253.73 1.91488 254.251 1.57923 254.955 1.41141C255.66 1.27715 256.516 1.19323 257.523 1.15967C258.53 1.09254 259.621 1.07576 260.796 1.10932C261.971 1.14289 263.212 1.17645 264.521 1.21002C265.831 1.24358 267.156 1.26036 268.499 1.26036ZM328.397 1.10932C330.411 1.17645 332.274 1.44497 333.986 1.91488C335.731 2.38479 337.241 3.08965 338.517 4.02947C339.792 4.93573 340.799 6.09372 341.538 7.50345C342.31 8.91318 342.713 10.5914 342.746 12.5382C342.78 14.5521 342.327 16.3814 341.387 18.0261C340.48 19.6372 339.356 20.9127 338.013 21.8525C337.846 21.9867 337.627 22.121 337.359 22.2553C337.124 22.3895 336.889 22.5573 336.654 22.7587C336.419 22.9266 336.201 23.1112 336 23.3126C335.832 23.5139 335.731 23.7321 335.697 23.9671C335.664 24.3363 335.765 24.7558 336 25.2258C336.268 25.6957 336.587 26.1824 336.956 26.6858C337.325 27.1893 337.711 27.6928 338.114 28.1963C338.517 28.6662 338.869 29.1025 339.171 29.5053C339.406 29.8409 339.742 30.2437 340.178 30.7136C340.615 31.1835 341.017 31.6702 341.387 32.1737C341.789 32.6436 342.108 33.1303 342.343 33.6338C342.612 34.1037 342.696 34.5233 342.595 34.8925C342.494 35.1946 342.108 35.4463 341.437 35.6477C340.766 35.8155 339.994 35.933 339.121 36.0001C338.248 36.0672 337.376 36.084 336.503 36.0505C335.63 35.9833 334.942 35.8659 334.439 35.698C333.935 35.5638 333.465 35.312 333.029 34.9428C332.626 34.54 332.24 34.1037 331.871 33.6338C331.502 33.1303 331.133 32.6101 330.763 32.073C330.428 31.5024 330.075 30.9821 329.706 30.5122C329.303 30.0088 328.917 29.4717 328.548 28.9011C328.212 28.3305 327.86 27.7935 327.491 27.29C327.155 26.7865 326.786 26.3502 326.383 25.981C326.014 25.5782 325.594 25.2929 325.124 25.1251C324.722 24.9908 324.252 24.9069 323.715 24.8733C323.178 24.8062 322.657 24.7894 322.154 24.823C321.651 24.8565 321.181 24.9405 320.744 25.0747C320.341 25.209 320.056 25.3768 319.888 25.5782C319.553 25.981 319.368 26.6523 319.335 27.5921C319.301 28.4983 319.301 29.4717 319.335 30.5122C319.368 31.5192 319.351 32.4758 319.284 33.382C319.251 34.2883 319.066 34.9093 318.73 35.2449C318.495 35.4799 318.025 35.6645 317.321 35.7987C316.649 35.933 315.911 36.0169 315.105 36.0505C314.3 36.084 313.528 36.0337 312.789 35.8994C312.051 35.7652 311.531 35.547 311.229 35.2449C310.96 35.0099 310.775 34.5736 310.675 33.9359C310.608 33.2981 310.557 32.5765 310.524 31.7709C310.524 30.9654 310.54 30.1598 310.574 29.3542C310.608 28.5151 310.624 27.7599 310.624 27.0886V9.76909C310.624 9.13135 310.608 8.4097 310.574 7.60415C310.54 6.79858 310.524 6.00981 310.524 5.23781C310.524 4.46582 310.574 3.77774 310.675 3.17357C310.775 2.53583 310.96 2.0827 311.229 1.81419C311.464 1.57923 311.732 1.44497 312.034 1.41141C312.37 1.34427 312.605 1.29393 312.739 1.26036C313.746 1.05897 314.921 0.924713 316.263 0.857582C317.606 0.790453 318.982 0.773671 320.392 0.807235C321.835 0.8408 323.245 0.891148 324.621 0.958279C326.031 1.02541 327.289 1.07576 328.397 1.10932ZM319.888 17.0695C320.157 17.3716 320.644 17.5897 321.348 17.724C322.053 17.8582 322.825 17.9422 323.664 17.9757C324.537 18.0093 325.41 18.0093 326.282 17.9757C327.155 17.9086 327.91 17.8415 328.548 17.7743C329.354 17.6736 330.109 17.4722 330.814 17.1702C331.552 16.8345 332.156 16.3982 332.626 15.8611C333.096 15.3241 333.415 14.7031 333.583 13.9983C333.784 13.2598 333.751 12.4375 333.482 11.5312C333.18 10.625 332.576 9.93691 331.67 9.467C330.797 8.96353 329.773 8.62787 328.598 8.46005C327.424 8.29223 326.165 8.24188 324.822 8.30901C323.513 8.34257 322.255 8.44327 321.046 8.61109C320.879 8.67822 320.66 8.74535 320.392 8.81248C320.157 8.84605 319.939 9.01387 319.737 9.31596C319.502 9.61804 319.351 10.1551 319.284 10.9271C319.217 11.6991 319.183 12.5046 319.183 13.3438C319.217 14.1829 319.301 14.9717 319.435 15.7101C319.569 16.4149 319.721 16.8681 319.888 17.0695ZM386.77 1.26036C387.609 1.26036 388.667 1.2268 389.942 1.15967C391.218 1.05897 392.493 1.00863 393.769 1.00863C395.078 1.00863 396.252 1.07576 397.293 1.21002C398.367 1.31071 399.105 1.56245 399.508 1.96523C399.743 2.20018 399.928 2.60296 400.062 3.17357C400.196 3.71061 400.263 4.28121 400.263 4.88538C400.263 5.48955 400.196 6.07694 400.062 6.64754C399.928 7.18458 399.743 7.57058 399.508 7.80553C399.172 8.14118 398.652 8.35936 397.947 8.46005C397.243 8.56075 396.437 8.61109 395.531 8.61109C394.658 8.61109 393.752 8.59431 392.812 8.56075C391.872 8.49362 390.999 8.46005 390.194 8.46005C389.422 8.46005 388.566 8.42649 387.626 8.35936C386.686 8.29223 385.763 8.24188 384.857 8.20831C383.984 8.17475 383.179 8.19153 382.44 8.25866C381.702 8.32579 381.131 8.49362 380.729 8.76213C380.46 8.92996 380.242 9.28239 380.074 9.81943C379.906 10.3229 379.805 10.8767 379.772 11.4809C379.738 12.0851 379.772 12.6725 379.873 13.2431C380.007 13.7801 380.242 14.1997 380.577 14.5017C380.947 14.8374 381.551 15.0556 382.39 15.1563C383.263 15.2234 384.236 15.2402 385.31 15.2066C386.418 15.1395 387.576 15.0556 388.784 14.9549C389.992 14.8206 391.134 14.7367 392.208 14.7031C393.315 14.6696 394.289 14.7199 395.128 14.8542C396.001 14.9549 396.638 15.2066 397.041 15.6094C397.276 15.8443 397.461 16.2471 397.595 16.8177C397.729 17.3548 397.796 17.9254 397.796 18.5295C397.83 19.1337 397.78 19.7211 397.645 20.2917C397.511 20.8287 397.31 21.2315 397.041 21.5C396.672 21.8693 396.152 22.1042 395.48 22.2049C394.809 22.3056 394.087 22.356 393.315 22.356C392.543 22.356 391.771 22.3224 390.999 22.2553C390.227 22.1881 389.59 22.1546 389.086 22.1546C388.482 22.1546 387.76 22.1378 386.921 22.1042C386.116 22.0371 385.31 22.0035 384.505 22.0035C383.699 22.0035 382.944 22.0371 382.239 22.1042C381.568 22.1713 381.064 22.3056 380.729 22.507C380.46 22.6748 380.242 23.0273 380.074 23.5643C379.94 24.1013 379.856 24.6887 379.822 25.3265C379.822 25.9306 379.873 26.5348 379.973 27.139C380.108 27.7096 380.309 28.1123 380.577 28.3473C380.913 28.6494 381.467 28.8508 382.239 28.9515C383.011 29.0522 383.867 29.1025 384.807 29.1025C385.746 29.0689 386.703 29.0186 387.676 28.9515C388.683 28.8843 389.573 28.8508 390.345 28.8508C390.949 28.8508 391.704 28.834 392.611 28.8004C393.55 28.7333 394.49 28.6997 395.43 28.6997C396.403 28.6997 397.293 28.7501 398.098 28.8508C398.904 28.9515 399.475 29.1696 399.81 29.5053C400.045 29.7067 400.23 30.0759 400.364 30.6129C400.498 31.15 400.565 31.7374 400.565 32.3751C400.565 32.9793 400.498 33.5667 400.364 34.1373C400.263 34.7079 400.079 35.1274 399.81 35.3959C399.575 35.6309 399.206 35.7987 398.703 35.8994C398.199 35.9665 397.629 36.0169 396.991 36.0505C396.387 36.0505 395.732 36.0505 395.027 36.0505C394.356 36.0169 393.718 36.0001 393.114 36.0001H378.463C377.859 36.0001 377.204 36.0169 376.499 36.0505C375.794 36.0505 375.123 36.0337 374.485 36.0001C373.881 35.9665 373.327 35.9162 372.824 35.8491C372.321 35.7484 371.968 35.5973 371.767 35.3959C371.532 35.161 371.364 34.7414 371.263 34.1373C371.163 33.4995 371.095 32.7947 371.062 32.0227C371.062 31.2507 371.062 30.4451 371.062 29.606C371.095 28.7333 371.112 27.9445 371.112 27.2397V9.56769C371.112 8.62788 371.079 7.70484 371.011 6.79858C370.978 5.89233 370.995 5.06999 371.062 4.33156C371.163 3.55956 371.364 2.92183 371.666 2.41835C372.002 1.91488 372.522 1.57923 373.227 1.41141C373.932 1.27715 374.788 1.19323 375.794 1.15967C376.801 1.09254 377.892 1.07576 379.067 1.10932C380.242 1.14289 381.484 1.17645 382.793 1.21002C384.102 1.24358 385.428 1.26036 386.77 1.26036ZM437.606 25.9306C437.606 26.5348 437.639 27.29 437.707 28.1963C437.807 29.1025 437.858 30.0088 437.858 30.915C437.891 31.8213 437.841 32.6772 437.707 33.4827C437.606 34.2547 437.354 34.8421 436.951 35.2449C436.649 35.547 436.146 35.7652 435.441 35.8994C434.736 36.0337 433.981 36.084 433.175 36.0505C432.403 36.0505 431.665 35.9833 430.96 35.8491C430.289 35.6812 429.836 35.4799 429.601 35.2449C429.332 34.9764 429.147 34.5233 429.047 33.8855C428.946 33.2142 428.879 32.4926 428.845 31.7206C428.845 30.915 428.862 30.1095 428.896 29.3039C428.929 28.4648 428.946 27.7263 428.946 27.0886V9.76909C428.946 8.82927 428.912 7.87266 428.845 6.89928C428.778 5.89233 428.795 4.98608 428.896 4.18052C428.996 3.34139 429.215 2.65331 429.55 2.11627C429.886 1.54567 430.456 1.21002 431.262 1.10932C431.564 1.07576 431.933 1.05897 432.37 1.05897C432.806 1.02541 433.259 1.02541 433.729 1.05897C434.199 1.05897 434.669 1.09254 435.139 1.15967C435.609 1.2268 436.045 1.32749 436.448 1.46175C436.851 1.59601 437.253 1.83097 437.656 2.16662C438.059 2.4687 438.445 2.83792 438.814 3.27426C439.183 3.67704 439.553 4.11339 439.922 4.5833C440.291 5.01964 440.643 5.4392 440.979 5.84198C441.751 6.74824 442.439 7.58736 443.043 8.35936C443.681 9.13135 444.302 9.88656 444.906 10.625C445.51 11.3634 446.131 12.1354 446.769 12.941C447.44 13.7465 448.196 14.6528 449.035 15.6597C449.337 16.029 449.689 16.4821 450.092 17.0191C450.528 17.5226 450.965 18.0093 451.401 18.4792C451.837 18.9155 452.24 19.2848 452.609 19.5868C452.979 19.8554 453.297 19.9561 453.566 19.8889C453.935 19.7882 454.187 19.4022 454.321 18.7309C454.455 18.0596 454.523 17.2709 454.523 16.3646C454.556 15.4583 454.539 14.5185 454.472 13.5451C454.439 12.5382 454.422 11.6655 454.422 10.9271C454.422 10.2893 454.388 9.51735 454.321 8.61109C454.288 7.67127 454.271 6.74824 454.271 5.84198C454.271 4.93573 454.321 4.11339 454.422 3.37496C454.523 2.63653 454.724 2.11627 455.026 1.81419C455.261 1.57923 455.714 1.39462 456.385 1.26036C457.09 1.09254 457.829 0.991843 458.601 0.958279C459.373 0.924714 460.111 0.975062 460.816 1.10932C461.554 1.24358 462.091 1.47854 462.427 1.81419C462.729 2.11627 462.931 2.60296 463.031 3.27426C463.132 3.912 463.182 4.63364 463.182 5.4392C463.182 6.24476 463.149 7.0671 463.082 7.90623C463.048 8.71179 463.031 9.39987 463.031 9.97048V27.29C463.031 27.8942 463.048 28.599 463.082 29.4046C463.115 30.1766 463.132 30.9486 463.132 31.7206C463.132 32.4926 463.082 33.1974 462.981 33.8352C462.88 34.4729 462.696 34.9428 462.427 35.2449C462.159 35.5134 461.739 35.7148 461.168 35.8491C460.631 35.9498 460.044 36.0001 459.406 36.0001C458.802 36.0001 458.181 35.9665 457.543 35.8994C456.939 35.8323 456.436 35.7316 456.033 35.5973C455.563 35.4295 455.127 35.161 454.724 34.7918C454.321 34.389 453.918 33.9694 453.516 33.5331C453.146 33.0632 452.794 32.5933 452.458 32.1234C452.123 31.6534 451.787 31.2339 451.451 30.8647C449.941 29.0857 448.498 27.4243 447.121 25.8803C445.779 24.3027 444.386 22.6245 442.943 20.8455C442.305 20.04 441.617 19.2008 440.878 18.3282C440.174 17.4555 439.284 16.8345 438.21 16.4653C437.941 17.0359 437.757 17.6736 437.656 18.3785C437.555 19.0834 437.505 19.8554 437.505 20.6945C437.505 21.5 437.522 22.356 437.555 23.2622C437.589 24.1349 437.606 25.0244 437.606 25.9306ZM519.189 1.15967C519.759 1.32749 520.414 1.57923 521.152 1.91488C521.891 2.21697 522.579 2.5694 523.217 2.97218C523.888 3.34139 524.458 3.76095 524.928 4.23086C525.398 4.66721 525.667 5.10355 525.734 5.5399C525.768 5.97624 525.6 6.47972 525.23 7.05032C524.895 7.62093 524.458 8.17475 523.921 8.71179C523.418 9.21526 522.881 9.65161 522.31 10.0208C521.773 10.39 521.32 10.5914 520.951 10.625C520.447 10.6586 519.978 10.5914 519.541 10.4236C519.105 10.2222 518.685 10.004 518.283 9.76909C517.88 9.50056 517.477 9.23204 517.074 8.96352C516.705 8.69501 516.336 8.47683 515.967 8.30901C514.188 7.67127 512.493 7.41954 510.881 7.5538C509.27 7.68806 507.81 8.09083 506.501 8.76213C505.226 9.43343 504.118 10.3397 503.178 11.4809C502.238 12.5885 501.55 13.8137 501.114 15.1563C500.678 16.4989 500.527 17.9086 500.661 19.3854C500.829 20.8623 501.349 22.2888 502.222 23.665C502.792 24.5712 503.564 25.3936 504.538 26.132C505.511 26.8704 506.602 27.4578 507.81 27.8942C509.052 28.297 510.378 28.5151 511.788 28.5487C513.197 28.5487 514.641 28.2802 516.118 27.7431C516.487 27.6089 516.873 27.4075 517.276 27.139C517.678 26.8369 518.081 26.5516 518.484 26.2831C518.92 26.0145 519.357 25.7796 519.793 25.5782C520.229 25.3768 520.682 25.2761 521.152 25.2761C521.522 25.2761 521.975 25.4271 522.512 25.7292C523.082 26.0313 523.619 26.4005 524.123 26.8369C524.626 27.2732 525.046 27.7599 525.382 28.297C525.717 28.8004 525.885 29.2703 525.885 29.7067C525.885 30.2773 525.65 30.7975 525.18 31.2675C524.744 31.7374 524.207 32.1737 523.569 32.5765C522.931 32.9457 522.277 33.2814 521.605 33.5834C520.968 33.8855 520.431 34.1205 519.994 34.2883C516.705 35.6309 513.416 36.2183 510.126 36.0505C506.837 35.8491 503.833 35.0603 501.114 33.6841C498.429 32.2744 496.197 30.3276 494.418 27.8438C492.672 25.36 491.682 22.507 491.447 19.2848C491.279 16.566 491.615 14.099 492.454 11.8837C493.327 9.63482 494.569 7.68806 496.18 6.04337C497.791 4.39869 499.704 3.08965 501.92 2.11627C504.135 1.14289 506.518 0.555499 509.069 0.354108C509.673 0.320543 510.378 0.286979 511.184 0.253414C512.023 0.21985 512.895 0.236632 513.802 0.303761C514.708 0.337326 515.631 0.421238 516.571 0.555498C517.511 0.689758 518.383 0.891149 519.189 1.15967ZM569.905 1.26036C570.744 1.26036 571.802 1.2268 573.077 1.15967C574.353 1.05897 575.628 1.00863 576.903 1.00863C578.213 1.00863 579.387 1.07576 580.428 1.21002C581.502 1.31071 582.24 1.56245 582.643 1.96523C582.878 2.20018 583.063 2.60296 583.197 3.17357C583.331 3.71061 583.398 4.28121 583.398 4.88538C583.398 5.48955 583.331 6.07694 583.197 6.64754C583.063 7.18458 582.878 7.57058 582.643 7.80553C582.307 8.14118 581.787 8.35936 581.082 8.46005C580.377 8.56075 579.572 8.61109 578.666 8.61109C577.793 8.61109 576.887 8.59431 575.947 8.56075C575.007 8.49362 574.134 8.46005 573.329 8.46005C572.557 8.46005 571.701 8.42649 570.761 8.35936C569.821 8.29223 568.898 8.24188 567.992 8.20831C567.119 8.17475 566.314 8.19153 565.575 8.25866C564.837 8.32579 564.266 8.49362 563.863 8.76213C563.595 8.92996 563.377 9.28239 563.209 9.81943C563.041 10.3229 562.94 10.8767 562.907 11.4809C562.873 12.0851 562.907 12.6725 563.008 13.2431C563.142 13.7801 563.377 14.1997 563.712 14.5017C564.082 14.8374 564.686 15.0556 565.525 15.1563C566.398 15.2234 567.371 15.2402 568.445 15.2066C569.553 15.1395 570.711 15.0556 571.919 14.9549C573.127 14.8206 574.269 14.7367 575.343 14.7031C576.45 14.6696 577.424 14.7199 578.263 14.8542C579.136 14.9549 579.773 15.2066 580.176 15.6094C580.411 15.8443 580.596 16.2471 580.73 16.8177C580.864 17.3548 580.931 17.9254 580.931 18.5295C580.965 19.1337 580.914 19.7211 580.78 20.2917C580.646 20.8287 580.445 21.2315 580.176 21.5C579.807 21.8693 579.287 22.1042 578.615 22.2049C577.944 22.3056 577.222 22.356 576.45 22.356C575.678 22.356 574.906 22.3224 574.134 22.2553C573.362 22.1881 572.725 22.1546 572.221 22.1546C571.617 22.1546 570.895 22.1378 570.056 22.1042C569.251 22.0371 568.445 22.0035 567.64 22.0035C566.834 22.0035 566.079 22.0371 565.374 22.1042C564.703 22.1713 564.199 22.3056 563.863 22.507C563.595 22.6748 563.377 23.0273 563.209 23.5643C563.075 24.1013 562.991 24.6887 562.957 25.3265C562.957 25.9306 563.008 26.5348 563.108 27.139C563.243 27.7096 563.444 28.1123 563.712 28.3473C564.048 28.6494 564.602 28.8508 565.374 28.9515C566.146 29.0522 567.002 29.1025 567.942 29.1025C568.881 29.0689 569.838 29.0186 570.811 28.9515C571.818 28.8843 572.708 28.8508 573.48 28.8508C574.084 28.8508 574.839 28.834 575.745 28.8004C576.685 28.7333 577.625 28.6997 578.565 28.6997C579.538 28.6997 580.428 28.7501 581.233 28.8508C582.039 28.9515 582.61 29.1696 582.945 29.5053C583.18 29.7067 583.365 30.0759 583.499 30.6129C583.633 31.15 583.7 31.7374 583.7 32.3751C583.7 32.9793 583.633 33.5667 583.499 34.1373C583.398 34.7079 583.214 35.1274 582.945 35.3959C582.71 35.6309 582.341 35.7987 581.838 35.8994C581.334 35.9665 580.763 36.0169 580.126 36.0505C579.522 36.0505 578.867 36.0505 578.162 36.0505C577.491 36.0169 576.853 36.0001 576.249 36.0001H561.598C560.994 36.0001 560.339 36.0169 559.634 36.0505C558.929 36.0505 558.258 36.0337 557.62 36.0001C557.016 35.9665 556.462 35.9162 555.959 35.8491C555.455 35.7484 555.103 35.5973 554.902 35.3959C554.667 35.161 554.499 34.7414 554.398 34.1373C554.297 33.4995 554.23 32.7947 554.197 32.0227C554.197 31.2507 554.197 30.4451 554.197 29.606C554.23 28.7333 554.247 27.9445 554.247 27.2397V9.56769C554.247 8.62788 554.214 7.70484 554.146 6.79858C554.113 5.89233 554.13 5.06999 554.197 4.33156C554.297 3.55956 554.499 2.92183 554.801 2.41835C555.137 1.91488 555.657 1.57923 556.362 1.41141C557.067 1.27715 557.922 1.19323 558.929 1.15967C559.936 1.09254 561.027 1.07576 562.202 1.10932C563.377 1.14289 564.619 1.17645 565.928 1.21002C567.237 1.24358 568.563 1.26036 569.905 1.26036Z"
        fill="white"
      />
    </svg>
  )
}

export default ConferenceLogo
