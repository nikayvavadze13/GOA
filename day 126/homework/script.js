const georgianAlphabet = [
    'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 
    'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 
    'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'
  ];

  const latinToGeorgian = {
    'a': 'ა', 'b': 'ბ', 'c': 'ც', 'd': 'დ', 'e': 'ე', 'f': 'ფ',
    'g': 'გ', 'h': 'ჰ', 'i': 'ი', 'j': 'ჯ', 'k': 'კ', 'l': 'ლ',
    'm': 'მ', 'n': 'ნ', 'o': 'ო', 'p': 'პ', 'q': 'ქ', 'r': 'რ',
    's': 'ს', 't': 'ტ', 'u': 'უ', 'v': 'ვ', 'w': 'წ', 'x': 'ხ',
    'y': 'ყ', 'z': 'ზ'
  };


  function getGeorgianLetter(name) {
    if (!name || name.length === 0) return 'ა';
    
    const firstChar = name.toLowerCase().charAt(0);
    return latinToGeorgian[firstChar] || 'ა';
  }


  async function fetchAndOrganizeUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const users = await response.json();
      

      const usersByLetter = {};
      

      georgianAlphabet.forEach(letter => {
        usersByLetter[letter] = [];
      });
      

      users.sort((a, b) => a.name.localeCompare(b.name));
      

      users.forEach(user => {
        const georgianLetter = getGeorgianLetter(user.name);
        usersByLetter[georgianLetter].push(user);
      });
      
      displayUsers(usersByLetter);
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('user-container').innerHTML = `
        <div style="color: red; text-align: center; padding: 20px;">
          Error loading users. Please try again later.
        </div>
      `;
    }
  }
  

  function displayUsers(usersByLetter) {
    const container = document.getElementById('user-container');
    container.innerHTML = '';
    
    georgianAlphabet.forEach(letter => {
      const users = usersByLetter[letter];
      

      const section = document.createElement('div');
      section.className = 'alphabet-section';
      

      const letterHeader = document.createElement('div');
      letterHeader.className = 'letter-header';
      letterHeader.textContent = letter;
      section.appendChild(letterHeader);
      
      if (users.length === 0) {
        const noUsers = document.createElement('div');
        noUsers.className = 'no-users';
        noUsers.textContent = 'No users found';
        section.appendChild(noUsers);
      } else {

        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.className = 'user-card';
          
          const userName = document.createElement('div');
          userName.className = 'user-name';
          userName.textContent = user.name;
          
          const userDetails = document.createElement('div');
          userDetails.className = 'user-details';
          userDetails.innerHTML = `
            Email: ${user.email}<br>
            Phone: ${user.phone}<br>
            Company: ${user.company.name}
          `;
          
          userCard.appendChild(userName);
          userCard.appendChild(userDetails);
          section.appendChild(userCard);
        });
      }
      
      container.appendChild(section);
    });
  }
document.addEventListener('DOMContentLoaded', fetchAndOrganizeUsers);