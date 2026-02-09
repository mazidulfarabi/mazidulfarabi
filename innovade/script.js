// Chart.js configuration and utility functions for white background design
const chartColors = {
    primary: '#2563eb',
    secondary: '#10b981',
    accent: '#f59e0b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#334155',
                font: {
                    size: 14,
                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }
            },
            position: 'top',
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1,
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#64748b',
            },
            grid: {
                color: '#e2e8f0',
            }
        },
        y: {
            ticks: {
                color: '#64748b',
            },
            grid: {
                color: '#e2e8f0',
            }
        }
    }
};

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // This will be called by individual slide pages to initialize their charts
    if (typeof initSlideCharts === 'function') {
        initSlideCharts();
    }
}
