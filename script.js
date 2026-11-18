
// Get the image upload input
const imageUpload = document.getElementById("imageUpload");

// Get the profile picture
const profilePicture = document.getElementById("profilePicture");

// Listen for a picture selection
imageUpload.addEventListener("change", function(event) {

    // Get the selected picture
    const file = event.target.files[0];

    // Check if a picture was selected
    if (file) {

        // Check that the file is an image
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            imageUpload.value = "";
            return;
        }

        // Create a temporary image URL
        const imageURL = URL.createObjectURL(file);

        // Display the uploaded picture
        profilePicture.src = imageURL;
    }

});
