const CHART_LABELS = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const CHART_DATA = [12, 19, 3, 5, 2, 3];

    type: 'doughnut'

    const chartData = {
        labels: CHART_LABELS,
        datasets: [
            {
                label: 'My First CART',
                data: CHART_DATA,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)' 
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
    const chartOptions = {
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
    };
    const chartConfig = {
        type: 'doughnut',
        data: chartData,
        options: chartOptions
    };

    const doughnutconst = new Chart(document.getElementById('doughnut'), chartConfig);Chart = new Chart(document.getElementById('doughnut'), chartConfig);
    