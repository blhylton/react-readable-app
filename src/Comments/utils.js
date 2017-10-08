const headers = { headers: { 'Authorization': 'Hello World', "Content-Type": "application/json" } }

export const fetchCommentsForPost = (post) => fetch(`http://localhost:3001/posts/${post}/comments`, headers)

export const fetchCommentDetails = (id) => fetch(`http://localhost:3001/comments/${id}`, headers)

export const createComment = (comment) => fetch('http://localhost:3001/comments', { ...headers, method: 'POST', body: JSON.stringify(comment) })

export const voteComment = (id, voteType) => fetch(`http://localhost:3001/comments/${id}`, { ...headers, method: 'POST', body: JSON.stringify({ option: voteType }) })

export const editComment = (comment) => fetch(`http://localhost:3001/comments/${comment.id}`, { ...headers, method: 'PUT', body: JSON.stringify(comment), timestamp: + new Date() })

export const deleteComment = (id) => fetch(`http://localhost:3001/comments/${id}`, { ...headers, method: 'DELETE' })