import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart
} from "recharts";

export default function TrackingChart({ data, width }) {
    return (
        data && <RadarChart outerRadius={90} width={width} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={Math.floor(360/data.length)} domain={[0, Math.max(...data.map(e => Math.max([e.real, e.predicao])))]} />
            <Radar name="Real" dataKey="real" fill="#527DF3" fillOpacity={0.5} />
            <Radar name="Predição" dataKey="predicao" fill="#527DF3" fillOpacity={0.7} />
            <Legend />
        </RadarChart>
    );
}