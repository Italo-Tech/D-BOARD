export const doughnutChartData= {
    type: "doughnut",
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            fill: true,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        legend: {
            align: "start",
            position: "top",
        },
        line: {
            borderWidth: 3
        }
    }
};

export default doughnutChartData;
