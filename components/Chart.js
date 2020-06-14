import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function Chart(props) {
  const schoolData = React.memo(() => {
    debugger;
    const res = props.adultMaleTeamRanks.reduce((acc, cur) => {
      if (!acc[cur.team]) {
        acc[cur.team] = {
          rank: 0,
          team: cur.team,
        };
      }
      acc[cur.team].rank++;
      return acc;
    }, {});
    console.log("School Data");
    console.log(res);
    return res;
  }, [props.adultMaleTeamRanks]);

  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          data={data02}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart;
