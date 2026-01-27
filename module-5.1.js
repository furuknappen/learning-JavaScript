function checkIngredient(ingredient) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const availableIngredients = ["flour", "sugar", "eggs"];
      if (availableIngredients.includes(ingredient.toLowerCase())) {
        resolve(`Success: ${ingredient} is available.`);
      } else {
        reject(new Error(`Error: Out of ${ingredient}!`));
      }
    }, 1000);
  });
}

async function prepareToBake(ingredient) {
  try {
    const result = await checkIngredient(ingredient);
    console.log(result);
  } catch (error) {
    console.error("failed to fetch data" + error.message
    );
  }
  finally {
    console.log("ingredient check finished")
  }
}
prepareToBake("sugar");
