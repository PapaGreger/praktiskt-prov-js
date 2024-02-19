// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.

// Din kod här
const posts = document.querySelector("#posts");

const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error(response.status);

    response
      .json()
      .then((json) => {
        posts.innerHTML = `
      ${json
        .filter((post) => post.userId == 1)
        .map((post) => {
          return `
            <article>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </article>
            `;
        })
        .join(" ")}
      `;
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

getPosts();
