import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/BlogPosts';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Blog | Bright Cleaning Services</title>
        <meta name="description" content="Explore expert cleaning tips, home care advice, and updates from Bright Cleaning Services in Montreal." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Bright Cleaning Blog</h2>
        <p className="text-center text-muted mb-5">Tips, insights, and updates to keep your spaces sparkling.</p>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <small className="text-muted mb-2">{post.date}</small>
                  <small className="text-muted mb-1 d-block">{post.category}</small>
                  <small className="text-muted">By {post.author} • {post.readTime}</small>
                  <p className="card-text">{post.summary}</p>
                  <Link to={`/blog/${post.slug}`} className="btn btn-outline-primary mt-auto">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
