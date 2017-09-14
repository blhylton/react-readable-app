const headers = { headers: { 'Authorization': 'Hello World', "Content-Type": "application/json" } }

export const fetchAllPosts = () => fetch('http://localhost:3001/posts', headers)

export const fetchCategoryPosts = (category) => fetch(`http://localhost:3001/${category}/posts`, headers)

export const fetchSinglePost = (id) => fetch(`http://localhost:3001/posts/${id}`, headers)

export const createPost = (post) => fetch('http://localhost:3001/posts', { ...headers, method: 'POST', body: post })

export const votePost = (id, voteType) => (fetch(`http://localhost:3001/posts/${id}`, { ...headers, method: 'POST', body: JSON.stringify({ option: voteType }) }))

export const updatePost = (post) => fetch(`https://localhost:3001/posts/${post.id}`, { ...headers, method: 'PUT', body: { title: post.title, body: post.body } })

export const deletePost = (id) => fetch(`http://localhost:3001/posts/${id}`, { ...headers, method: 'DELETE' })