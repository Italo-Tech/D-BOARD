export const barChartDataOne = {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [40, 50, 70, 80, 40, 15, 25, 60, 30, 25, 12],
                backgroundColor: "#2563eb",
                borderColor: "#2563eb",
                borderWidth: 3,
                barThickness: 20,
            },
            {
                label: "Nescau",
                data: [50, 40, 50, 70, 80, 69, 50, 55, 20, 30, 8],
                backgroundColor: "#83b6ff",
                borderColor: "#83b6ff",
                borderWidth: 3,
                barThickness: 20,
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
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default barChartDataOne;
