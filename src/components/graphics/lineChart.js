export const LineChartData = {
    /*type: "line",
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: new Date().getFullYear(),
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [65, 78, 66, 44, 56, 67, 75]
            },
            {
                label: new Date().getFullYear() - 1,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: [40, 68, 86, 74, 56, 60, 87],
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
        },
        legend: {
            labels: {
                fontColor: "white",
            },
            align: "end",
            position: "bottom",
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontColor: "rgba(255,255,255,.7)",
                    },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Month",
                        fontColor: "white",
                    },
                    gridLines: {
                        display: false,
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.3)",
                        zeroLineColor: "rgba(0, 0, 0, 0)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        fontColor: "rgba(255,255,255,.7)",
                    },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Value",
                        fontColor: "white",
                    },
                    gridLines: {
                        borderDash: [3],
                        borderDashOffset: [3],
                        drawBorder: false,
                        color: "rgba(255, 255, 255, 0.15)",
                        zeroLineColor: "rgba(33, 37, 41, 0)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                    },
                },
            ],
        },
    },*/

    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [40, 50, 70, 80, 40, 45, 25, 60, 30, 25, 12],
                backgroundColor: "transparent",
                borderColor: "#2563eb",
                borderWidth: 3,
                barThickness: 20,
            },
            {
                label: "Nescau",
                data: [50, 40, 50, 70, 80, 69, 50, 55, 20, 30, 8],
                backgroundColor: "transparent",
                borderColor: "#83b6ff",
                borderWidth: 3,
                barThickness: 20,
            }
        ]
    },
    options: {
        responsive: false,
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

export default LineChartData;
