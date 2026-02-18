import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const GhostTrainPost = () => {
  const movieData = {
    // Basic Information
    title: 'Ghost Train (2025)',
    pageTitle: 'Ghost Train (2025) Download | Film Buffs',
    imageUrl: 'https://img2.beritasatu.com/cache/jakartaglobe/960x620-w/2025/07/1753444859-1673x2461.webp',
    imageVersion: '20260218',
    rating: '7.4',
    year: '2025',
    genres: ['Horror', 'Thriller'],

    // Movie Information
    info: {
      Type: 'Movie',
      Released: '2025',
      Language: 'English',
      Quality: '1080p / 720p',
      Format: 'WEB-DL',
      Source: 'AMZN'
    },

    // Synopsis
    synopsisTitle: 'Synopsis',
    synopsis:
      'Ghost Train is a chilling horror-thriller set on the last ride of the night. As a lone passenger begins receiving eerie messages, ghostly hands claw through the windows and a sinister presence hunts the carriage. With the end of the line approaching, survival means uncovering the truth behind the haunting before there is no way out.',

    // Highlights
    highlightsTitle: 'Highlights:',
    highlights: [
      '👻 Atmospheric night-train setting with escalating dread',
      '🔊 Dolby Digital Plus 5.1 audio (WEB-DL)',
      '📺 Multiple qualities: 1080p and 720p',
      '🎥 Amazon WEB-DL source'
    ],

    // Download Links
    downloadLinks: {
      '1080p AMZN WEB-DL DDP5.1 (H.264/HEVC)': 'https://hubcloud.foo/drive/yxx58zhgvxfmdge',
      '720p AMZN WEB-DL DDP5.1 (HEVC)': 'https://hubcloud.foo/drive/wzthtkurgo7kkgn'
    },

    // Download Section Customization
    downloadTitle: 'Download Ghost Train (2025)',
    downloadButtonText: 'Reveal Download Options',
    downloadNotice:
      'Choose 1080p or 720p Amazon WEB-DL with Dolby Digital Plus 5.1 audio.',

    // Technical Specifications
    technicalSpecs: {
      Video: [
        'Codec: H.264 / H.265 (HEVC)',
        'Resolution: 1920x1080 (Full HD) / 1280x720 (HD)',
        'Source: Amazon Prime WEB-DL',
        'Grade: Studio Master WEB-DL'
      ],
      Audio: [
        'Codec: Dolby Digital Plus 5.1',
        'Language: English',
        'Channels: 5.1 Surround'
      ],
      'File Info': [
        'Container: MKV',
        'Subtitles: Included if available'
      ]
    },

    // Additional Information
    additionalInfoTitle: 'About Ghost Train',
    additionalInfo: [
      'A contained, suspenseful horror that ratchets tension through claustrophobic visuals and unnerving sound design.',
      'Ideal for fans of supernatural thrillers set in isolated locations.'
    ],

    // Related Content
    relatedTitle: 'More Horror Picks',
    relatedContent:
      'Explore more chilling titles in the Horror category for atmospheric, supernatural stories.'
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default GhostTrainPost;
