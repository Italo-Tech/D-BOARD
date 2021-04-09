export const barChartDataTwo = {
    type: "horizontalBar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [50, 40, 50, 70, 80, 69, 50, 55, 40, 10, 100],
                backgroundColor: "#A15CD4FF",
                borderColor: "#A15CD4FF",
                borderWidth: 1,
                barThickness: 17,
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
            align: "center",
            position: "top",
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

export default barChartDataTwo;
