const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      'https://dhan-serverless.netlify.app/api/2-basic-api'
    );
    // kita map array agar bisa di print ke browser
    const products = data
      .map((product) => {
        // disini img dia memiliki url jdi ditulis img:{url}
        const {
          id,
          name,
          image: { url },
          price,
        } = product;
        return `<article class='product' id=${id}>
          <img src=${url} alt=${name}></img>
          <div class='info'>
            <h5>${name}</h5>
            <h5 class='price'>$${price}</h5>
          </div>
      </article>`;
      })
      .join('');
    result.innerHTML = products;
  } catch (error) {
    console.log(error.response.data);
  }
};

fetchData();
