import { lazy, Suspense } from "react";

const Mojtaba = lazy(() => import("app1/components/mojtaba"));

export default function Home() {
  return (
    <main>
        <div className="flex-0">this is test</div>
        <Suspense fallback={"loading app1"}>
            <Mojtaba />
        </Suspense>
    </main>
  );
}
