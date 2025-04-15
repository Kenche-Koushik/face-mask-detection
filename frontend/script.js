async function predict() {
    const input = document.getElementById("imageInput");
    const file = input.files[0];
  
    if (!file) {
      alert("Please select an image.");
      return;
    }
  
    const formData = new FormData();
    formData.append("image", file);
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "Predicting...";
  
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(file);
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      resultDiv.innerText = `Prediction: ${data.label}`;
    } catch (err) {
      resultDiv.innerText = "Error during prediction.";
      console.error(err);
    }
  }
  