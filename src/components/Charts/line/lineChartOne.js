export const lineChartDataOne = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [40, 50, 70, 80, 40, 45, 25, 60, 30, 25, 12],
                backgroundColor: "transparent",
                borderColor: "#2563eb",
                borderWidth: 4,
            },
            {
                label: "Nescau",
                data: [50, 40, 50, 70, 80, 69, 50, 55, 20, 30, 8],
                backgroundColor: "transparent",
                borderColor: "#83b6ff",
                borderWidth: 4,
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,

        legend: {
            labels: {
                fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
        },
    }
};

export default lineChartDataOne;
