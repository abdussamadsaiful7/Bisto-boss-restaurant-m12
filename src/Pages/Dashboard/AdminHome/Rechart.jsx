import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    const [axiosSecure] = UseAxiosSecure()
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        },

    })
    console.log(chartData)

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    //CustomShapeBarChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //pie chart color
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    //pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    return (
        <div className='md:flex my-20'>
            <div className='w-1/2'>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>

            {/* pie chart */}
            <div className='w-1/2'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="count"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )



}



export default Rechart;