function searchUser() {
    const enrollmentNumber = document.getElementById("searchInput").value;
    const searchResult = document.getElementById("searchResult");

    // Load user data from JSON file or database
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const userData = data[enrollmentNumber];
            if (userData) {
                displayUserProfile(userData, searchResult);
            } else {
                searchResult.innerHTML = "<p>User not found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            searchResult.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
        });
}

function displayUserProfile(userData, searchResult) {
    // Clear previous search results
    searchResult.innerHTML = "";

    // Create profile container
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile-container");

    // Create profile picture
    const profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");
    profilePic.src = userData.profilePic; // Replace with actual profile picture URL
    profilePic.alt = "Profile Picture";

    // Create user name element
    const userName = document.createElement("p");
    userName.classList.add("user-name");
    userName.textContent = userData.name;

    // Create department element
    const department = document.createElement("p");
    department.classList.add("department");
    department.textContent = userData.department;

    // Append elements to profile container
    profileContainer.appendChild(profilePic);
    profileContainer.appendChild(userName);
    profileContainer.appendChild(department);

    // Append profile container to search results
    searchResult.appendChild(profileContainer);
}
