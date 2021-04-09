export const barChartDataThree = {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [40, 50, 70, 80, 40, 15, 25, 60, 30, 25, 12],
                backgroundColor: "#f87171",
                borderColor: "#f87171",
                borderWidth: 1,
                barThickness: 100,
            }
        ]
    },
    options: {
        indexAxis: 'y',
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

export default barChartDataThree;
