import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Icons from "./Icons"

const Author = ({ author }) => (
  <footer className="post-full-footer">
    <div className="author-card">
      {author.profileImageFile ? (
        <Image
          className="author-profile-image"
          fixed={author.profileImageFile.childImageSharp.fixed}
          alt={author.name}
        />
      ) : (
        <span className="avatar-wrapper">
          <Icons.avatar />
        </span>
      )}
      <div className="author-card-content">
        <h4 className="author-card-name">
          <Link to={`/author/${author.id}`}>{author.name}</Link>
        </h4>
        {author.bio ? (
          <p>{author.bio}</p>
        ) : (
          <p>
            Read <Link to={`/author/${author.id}`}> more posts</Link> by this
            author.
          </p>
        )}
      </div>
    </div>
    <div className="post-full-footer-right">
      <Link className="author-card-button" to={`/author/${author.id}`}>
        Read More
      </Link>
    </div>

    {/* TODO : Multiple author template */}
  </footer>
)

export default Author
