export const lineChartDataTwo = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [186, 128, 155, 169, 197, 181, 158, 151, 163, 110, 181],
                backgroundColor: '#7adc9e',
                borderColor: "#22c55e",
                borderWidth: 1,
            },
            {
                label: "Toddy",
                data: [219, 189, 222, 184, 211, 240, 250, 165, 153, 115, 220],
                backgroundColor: '#54a6d2',
                borderColor: "#4591e6",
                borderWidth: 1,
            },
        ]
    },
    options: {
        responsive: true,
        lineTension: 0,
        legend: {
            labels: {
                fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
        },
    }
};

export default lineChartDataTwo;
