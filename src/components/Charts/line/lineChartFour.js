export const lineChartDataFour= {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Toddy",
                data: [100, 40, 80, 40, 20,40,80,40,20,50,0],
                backgroundColor: '#BBF3B9FF',
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

export default lineChartDataFour;
