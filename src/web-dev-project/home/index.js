document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    
    // logged in?
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    // Fetching the latest data (this can be from an API or just local data)
    let latestData = getLatestData();
  
    if (isLoggedIn) {
      // Display content specific to the logged-in user
      content.innerHTML = `<h1>Welcome back, ${latestData.user.name}!</h1>`;
      content.innerHTML += `<p>Your latest post: ${latestData.user.latestPost}</p>`;
    } else {
      // Display generic content for anonymous users
      content.innerHTML = '<h1>Welcome to our website!</h1>';
      content.innerHTML += `<p>Latest post: ${latestData.generic.latestPost}</p>`;
    }
  });
  
  // Sample function to get the latest data
  function getLatestData() {
    // fetch data from an API or just use hardcoded data
    return {
      user: {
        name: 'John Doe',
        latestPost: 'This is the latest post by the user.'
      },
      generic: {
        latestPost: 'This is the latest public post.'
      }
    };
  }
  