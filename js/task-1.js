const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(oneElement => {
  const title = oneElement.querySelector("h2").textContent;
  const element = oneElement.querySelectorAll("li").length;

  console.log(`Category: ${title}`)
  console.log(`Elements: ${element}`)
})
