"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </Suspense>
  );
}
