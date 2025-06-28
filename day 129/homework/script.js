async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error(error.message);
    }
}

function displayUsers(users) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${user.name} ${user.username}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        container.appendChild(card);
    });
}

fetchUsers();