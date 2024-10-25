const CHART_LABELS = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const CHART_DATA = [12, 19, 3, 5, 2, 3];

const chartData = {
    labels: CHART_LABELS,
    datasets: [
        {
            label: 'Votes',
            data: CHART_DATA,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
};

const chartConfig = {
    type: 'doughnut',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Doughnut Chart Example'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const doughnutChart = new Chart(document.getElementById('doughnut'), chartConfig);