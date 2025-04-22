async function predict() {
  const input = document.getElementById("imageInput");
  const file = input.files[0];
  
  // Check if a file is selected
  if (!file) {
    alert("Please select an image.");
    return;
  }

  // Create a FormData object to send the image file
  const formData = new FormData();
  formData.append("image", file);

  // Get references to DOM elements
  const resultDiv = document.getElementById("result");
  const preview = document.getElementById("preview");

  // Show the loading state
  resultDiv.innerText = "Predicting...";
  preview.src = URL.createObjectURL(file);  // Display image preview

  try {
    // Fetch the prediction from the backend API
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response data
    const data = await response.json();

    // Update the result with prediction label
    resultDiv.innerText = `Prediction: ${data.label}`;
  } catch (err) {
    // Display error message if something goes wrong
    resultDiv.innerText = "Error during prediction. Please try again.";
    console.error(err);
  }
}
