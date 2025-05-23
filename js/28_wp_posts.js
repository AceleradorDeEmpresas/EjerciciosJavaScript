const fetchPosts = async () => {
  const query = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          slug
          excerpt
          date
          content
        }
      }
    }
  `;

  const response = await fetch('https:site-demo/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
 // Imprimir el titulo de cada post 
    data.posts.nodes.forEach((post) => {
        console.log(post.title);
    });
  return data.posts.nodes;
};

fetchPosts()