export const BarChartData = {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: new Date().getFullYear(),
                /*Dados*/
                data: [30, 78, 56, 34, 100, 45, 13],
                backgroundColor: "#ed64a6",
                borderColor: "#ed64a6",
                borderWidth: 3,
                fill: false,
                /*Largura barra*/
                barThickness: 8,
            },
            {
                label: new Date().getFullYear() - 1,
                fill: false,
                /*Dados*/
                data: [27, 68, 86, 74, 10, 4, 87],
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
                /*gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },*/
            }
        ],
        yAxes: [
            {
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: "Value",
                },
                /*gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.2)",
                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },*/
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

export default BarChartData;
