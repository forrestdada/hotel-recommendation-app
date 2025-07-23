const searchButton = document.getElementById("search-button");
const keywordInput = document.getElementById("keyword-input");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", () => {
  const keyword = keywordInput.value;

  if (keyword) {
    fetch(`/api/hotels/recommendations?keyword=${encodeURIComponent(keyword)}`)
      .then((response) => response.json())
      .then((data) => {
        resultsContainer.innerHTML = "";

        if (data.length > 0) {
          data.forEach((hotel) => {
            const hotelElement = document.createElement("div");
            hotelElement.classList.add("hotel");
            hotelElement.innerHTML = `
                            <h3>${hotel.name}</h3>
                            <p>城市：${hotel.city}</p>
                            <p>地址：${hotel.address}</p>
                            <p>星级：${hotel.stars}</p>
                            <p>电话：${hotel.phone}</p>
                        `;
            resultsContainer.appendChild(hotelElement);
          });
        } else {
          resultsContainer.innerHTML = "<p>No hotels found.</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching hotel recommendations:", error);
        resultsContainer.innerHTML =
          "<p>Error fetching hotel recommendations. Please try again later.</p>";
      });
  } else {
    resultsContainer.innerHTML = "<p>Please enter a keyword to search.</p>";
  }
});
