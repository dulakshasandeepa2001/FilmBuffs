import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const NoOtherChoicePost = () => {
  const movieData = {
    // Basic Information
    title: 'No Other Choice (2025)',
    pageTitle: 'No Other Choice (2025) Download | Film Buffs',
    imageUrl: 'https://resizing.flixster.com/jmx4yLi00DEubbDPQoxemNRqPsc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyMzQ4M2M5LWEzMTUtNDA4NC05OGMyLTVhYjMxNTE0ZjhhNi5qcGc=',
    rating: '7.9',
    year: '2025',
    genres: ['Drama', 'Thriller'],

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
      'No Other Choice is a gripping drama-thriller about ambition, consequences, and the thin line between right and wrong. When a rising professional gets entangled in a high-stakes scandal, every decision escalates the fallout, forcing them to confront moral dilemmas and powerful adversaries. Stylishly shot and emotionally charged, the film builds relentless tension as the protagonist realizes there may be no other choice left to make.',

    // Highlights
    highlightsTitle: 'Highlights:',
    highlights: [
      '🎬 2025 Amazon WEB-DL release',
      '🎭 Character-driven drama with thriller elements',
      '🔊 Dolby Digital Plus 5.1 audio',
      '📺 Multiple qualities: 1080p H.264/HEVC and 720p HEVC'
    ],

    // Download Links
    downloadLinks: {
      '1080p AMZN WEB-DL DDP5.1 H.264 (KyoGo)': 'https://hubcloud.foo/drive/mjumif8fmdw1n1n',
      '1080p AMZN WEB-DL DDP5.1 HEVC (KyoGo)': 'https://hubcloud.foo/drive/9g9kakybiq9yj3g',
      '720p AMZN WEB-DL DDP5.1 HEVC (KyoGo)': 'https://hubcloud.foo/drive/qikkmgg4q1gizk1'
    },

    // Quality Information
    qualityInfo: {
      '1080p AMZN WEB-DL DDP5.1 H.264 (KyoGo)': {
        size: '10.02 GB',
        description: 'Full HD • H.264 • DDP 5.1 • Best 1080p visual fidelity'
      },
      '1080p AMZN WEB-DL DDP5.1 HEVC (KyoGo)': {
        size: '4.98 GB',
        description: 'Full HD • HEVC (H.265) • DDP 5.1 • Smaller size, great quality'
      },
      '720p AMZN WEB-DL DDP5.1 HEVC (KyoGo)': {
        size: '1009.43 MB',
        description: 'HD • HEVC (H.265) • DDP 5.1 • Compact, bandwidth-friendly'
      }
    },

    // Download Section Customization
    downloadTitle: 'Download No Other Choice (2025)',
    downloadButtonText: 'Reveal Download Options',
    downloadNotice:
      '1080p (H.264/HEVC) and 720p HEVC available with Dolby Digital Plus 5.1 audio. Choose your preferred size and codec.',

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
        'Release Group: KyoGo',
        'Subtitles: May be included (if available)'
      ]
    },

    // Additional Information
    additionalInfoTitle: 'About No Other Choice',
    additionalInfo: [
      'Rooted in themes of ethics, pressure, and survival, No Other Choice explores how quickly success can turn into a series of irreversible decisions.',
      'The film leans into grounded drama while maintaining thriller pacing—ideal for fans of tense, character-focused stories.'
    ],

    // Related Content
    relatedTitle: 'More Drama Picks',
    relatedContent:
      'Looking for more tense, character-driven dramas? Browse the Drama category for similar new releases.'
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default NoOtherChoicePost;
