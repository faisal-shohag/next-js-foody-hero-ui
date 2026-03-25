import Banner from "@/components/home/banner";
import TopFoods from "@/components/home/top-foods";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

const getTopFoods = async () => {
  const data = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  return data.json();
};

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner />
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-2">
            <Spinner color="danger" />
            <span className="text-xs text-muted">Danger</span>
          </div>
        }
      >
        <TopFoods dataPromise={getTopFoods()} />
      </Suspense>
    </div>
  );
}
