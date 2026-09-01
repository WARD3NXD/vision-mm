import localFont from "next/font/local";

export const avant = localFont({
  src: [
    {
      path: "../fonts/AvantT-TRIAL-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/AvantT-TRIAL-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avant",
});