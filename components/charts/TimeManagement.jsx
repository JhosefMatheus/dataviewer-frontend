import {
    CartesianGrid,
    Legend,
    ScatterChart,
    XAxis,
    YAxis,
    ZAxis,
    Scatter,
    Tooltip
} from "recharts";

export default function TimeManagement({ data, width }) {
    function getZAxisMinRange() {
        return Math.min(...[...data.data0.map(e=>e.z)].concat([...data.data1.map(e=>e.z)]).concat([...data.data2.map(e=>e.z)]));
    }

    function getZAxisMaxRange() {
        return Math.max(...[...data.data0.map(e=>e.z)].concat([...data.data1.map(e=>e.z)]).concat([...data.data2.map(e=>e.z)]));
    }

    return (
        data && <ScatterChart width={width} height={300} >
            <CartesianGrid />
            <XAxis dataKey="x" name="dias" unit="d" />
            <YAxis dataKey="y" name="segundos" unit="s" />
            <ZAxis dataKey="z" name="submissões" range={[getZAxisMinRange(), getZAxisMaxRange()]} />
            <Tooltip />
            <Legend />
            <Scatter name="Acertos" data={data.data0} fill="#07DB47" />
            <Scatter name="Erros" data={data.data1} fill="#DB2927" />
            <Scatter name="Restantes" data={data.data2} fill="#124375" />
        </ScatterChart>
    );
}