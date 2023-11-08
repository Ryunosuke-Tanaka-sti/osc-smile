import { BarChart } from '@tremor/react';

type BarChartComponentProps = {
  mushroom: number;
  bamboo: number;
  category: string;
};

export const BarChartComponent = (props: BarChartComponentProps) => {
  const { bamboo, mushroom, category } = props;

  return (
    <>
      <BarChart
        className="hidden h-96 w-full p-3 md:block"
        data={[{ name: category, キノコ: mushroom, タケノコ: bamboo }]}
        index="キノコ"
        layout="vertical"
        showXAxis={true}
        showYAxis={false}
        categories={['キノコ', 'タケノコ']}
        colors={['amber', 'green']}
        yAxisWidth={100}
      />
      <BarChart
        className=" block h-96 w-full p-3 md:hidden"
        data={[{ name: category, キノコ: mushroom, タケノコ: bamboo }]}
        index="キノコ"
        layout="horizontal"
        showXAxis={false}
        showYAxis={true}
        categories={['キノコ', 'タケノコ']}
        colors={['amber', 'green']}
        yAxisWidth={100}
      />
    </>
  );
};
