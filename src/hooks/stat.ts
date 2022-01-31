import { useAppSelector } from "./store";

export default function useStat(year: number) {
  const barChartStat = useAppSelector((state) => state.stats.barchartStat);
  const radialChartStat = useAppSelector(
    (state) => state.stats.raidalChartStat
  );

  return {
    barChartData: barChartStat[year],
    radialChartData: radialChartStat[year],
  };
}

export function useYears() {
  const barChartStat = useAppSelector((state) => state.stats.barchartStat);

  return Object.keys(barChartStat).map((year) => parseInt(year));
}
