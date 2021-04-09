export const lineChartDataThree = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [219, 189, 222, 184, 211, 240, 250, 165, 153, 115, 220],
                backgroundColor: 'transparent',
                borderColor: "#24ef1b",
                borderWidth: 3,
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

export default lineChartDataThree;
