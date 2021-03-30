export const RadarChartData = {
    type: "radar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "ago"],
        datasets: [
            {
                label: new Date().getFullYear(),
                /*Dados*/
                data: [30, 78, 56, 34, 100, 45, 13, 14],
                backgroundColor: "#83b6ff",
                borderColor: "#83b6ff",
                borderWidth: 3,
                fill: false,
                /*Largura barra*/
                barThickness: 8,
            },
            {
                label: new Date().getFullYear() - 1,
                fill: false,
                /*Dados*/
                data: [27, 68, 86, 74, 10, 4, 87, 14],
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                borderWidth: 3,
                /*Largura barra*/
                barThickness: 8,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
            display: false,
            text: "Orders Chart",
        },
        /*tooltip mostra o resultado das duas barras*/
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        legend: {
            labels: {
                fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
        },
        xAxes: [
            {
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: "Month",
                },
            }
        ],
        yAxes: [
            {
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: "Value",
                },
            },
        ],
        lineTension: 1,
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

export default RadarChartData
