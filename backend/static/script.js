document.addEventListener('DOMContentLoaded', function() {
    fetchScholarships();

    document.getElementById('scholarship-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addScholarship();
    });
});

function fetchScholarships() {
    fetch('/scholarships')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('scholarship-list');
            list.innerHTML = '';
            data.scholarships.forEach(scholarship => {
                const listItem = document.createElement('li');
                listItem.textContent = scholarship.title;
                list.appendChild(listItem);
            });
        });
}

function addScholarship() {
    const form = document.getElementById('scholarship-form');
    const formData = new FormData(form);
    const scholarship = {};
    formData.forEach((value, key) => scholarship[key] = value);

    fetch('/scholarships', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scholarship),
    })
    .then(response => response.json())
    .then(data => {
        fetchScholarships();
        form.reset();
    });
}
