import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/BlogPosts';
import { Helmet } from 'react-helmet';

const SinglePost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>Post Not Found</h2>
        <Link to="/blog" className="btn btn-outline-primary mt-3">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Helmet>
        <title>{post.title} | Bright Cleaning Blog</title>
      </Helmet>

      <h2>{post.title}</h2>
      <p className="text-muted">{post.date}</p>
      <p className="text-muted mb-1"><strong>Category:</strong> {post.category}</p>
      <p className="text-muted"><strong>By:</strong> {post.author} — {post.readTime}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
      <Link to="/blog" className="btn btn-outline-primary mt-4">← Back to Blog</Link>
    </div>
  );
};

export default SinglePost;
