export const pieChartData = {
    labels: ['Completed'],
    datasets: [
        {
            data: [63, 25],
            backgroundColor: ['#FF5B5B', '#FF5B5B26', '#ef4444'],
            borderWidth: 0,
            percent: "81%"
        },
        {
            data: [63, 25],
            backgroundColor: ['#00B074', '#00B07426', '#ef4444'],
            borderWidth: 0,
            percent: '22%'
        },
        {
            data: [63, 25],
            backgroundColor: ['#2D9CDB', '#2D9CDB26', '#ef4444'],
            borderWidth: 0,
            percent: '62%'
        },
    ],
};

export const revenueChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: '2024',
            data: [30, 40, 25, 50, 49, 60, 70, 91, 125, 90, 100, 120],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            tension: 0.4,
            fill: true,
        },
        {
            label: '2025',
            data: [50, 60, 40, 70, 65, 80, 90, 105, 140, 110, 120, 130],
            borderColor: '#eab308',
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
            tension: 0.4,
            fill: true,
        },
    ],
};

export const customerMapData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [65, 40, 80, 35, 60, 30, 70],
            backgroundColor: [
                '#22c55e', '#eab308', '#3b82f6', '#a855f7', '#ef4444', '#f97316', '#06b6d4'
            ],
            borderWidth: 0,
        },
    ],
};
