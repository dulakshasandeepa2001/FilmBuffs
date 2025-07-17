import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Film Buffs", 
  description = "Film Buffs – Watch and download popular movies from Hollywood and around the world. Action, Sci-Fi, Drama & latest releases, free for movie fans in the USA, UK & on the web.",
  robotTags = "noindex, follow, noodp" // Same as your Blogger settings
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotTags} />
    </Helmet>
  );
};

export default SEO;
