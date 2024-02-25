const cardId = localStorage.getItem("id");

const SINGLERECIPEURL = `https://recipedetails-api-default-rtdb.asia-southeast1.firebasedatabase.app/${cardId}.json`;

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const singleRecipe = await getData(SINGLERECIPEURL);
console.log(singleRecipe);
