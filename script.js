document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a, .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    const skillsData = [
        { name: 'Ruby on Rails', category: 'frameworks' },
        { name: 'React.js', category: 'frameworks' },
        { name: 'Next.js', category: 'frameworks' },
        { name: 'Node.js', category: 'frameworks' },
        { name: 'Express.js', category: 'frameworks' },
        { name: 'Django', category: 'frameworks' },
        { name: 'Flask', category: 'frameworks' },
        { name: 'PostgreSQL', category: 'databases' },
        { name: 'Redis', category: 'databases' },
        { name: 'MongoDB', category: 'databases' },
        { name: 'Git & GitHub', category: 'devops' },
        { name: 'Docker', category: 'devops' },
        { name: 'Kubernetes', category: 'devops' },
        { name: 'AWS & GCP', category: 'devops' },
        { name: 'RSpec', category: 'devops' },
        { name: 'Jest & Pytest', category: 'devops' },
        { name: 'Semaphore CI', category: 'devops' },
        { name: 'Jenkins', category: 'devops' },
        { name: 'GitHub Actions', category: 'devops' },
        { name: 'Insomnia', category: 'devops' },
        { name: 'DBeaver', category: 'devops' },
        { name: 'JetBrains IDEs', category: 'devops' },
    ];

    const skillsGrid = document.getElementById('skills-grid');
    const filterButtons = document.querySelectorAll('.skill-filter-btn');

    const renderSkills = (filter) => {
        skillsGrid.innerHTML = '';
        const filteredSkills = filter === 'all'
            ? skillsData
            : skillsData.filter(skill => skill.category === filter);

        filteredSkills.forEach(skill => {
            const skillEl = document.createElement('div');
            skillEl.className = 'skill-card bg-white p-4 rounded-lg shadow-md text-center flex items-center justify-center';
            skillEl.dataset.category = skill.category;
            skillEl.innerHTML = `<span class="font-semibold text-gray-700 text-sm">${skill.name}</span>`;
            skillsGrid.appendChild(skillEl);
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700');
            });

            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-white', 'text-gray-700');

            renderSkills(filter);
        });
    });

    renderSkills('all');

    const ctx = document.getElementById('coreSkillsChart').getContext('2d');
    const coreSkillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ruby', 'Python', 'JavaScript / TypeScript'],
            datasets: [{
                label: 'Years of Experience & Focus',
                data: [5, 9, 9],
                backgroundColor: [
                    'rgba(220, 38, 38, 0.6)',
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(245, 158, 11, 0.6)'
                ],
                borderColor: [
                    'rgba(220, 38, 38, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(245, 158, 11, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += `Extensive experience (${context.parsed.x}+ years)`;
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' yrs';
                        }
                    },
                    grid: {
                        display: true,
                        color: 'rgba(200, 200, 200, 0.1)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
});