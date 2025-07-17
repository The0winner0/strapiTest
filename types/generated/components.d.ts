import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    animationClass: Schema.Attribute.Enumeration<
      [
        'fade-in-animate',
        'fade-in-left-animate',
        'fade-in-right-animate',
        'fade-in-up-animate',
        'fade-in-down-animate',
        'zoom-in-animate',
      ]
    >;
    content: Schema.Attribute.RichText;
    delay: Schema.Attribute.Integer;
    iconSvg: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageBusinessVertical extends Struct.ComponentSchema {
  collectionName: 'components_homepage_business_verticals';
  info: {
    displayName: 'Business Vertical';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconSvgPath: Schema.Attribute.Text;
    iconViewBox: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedPostSlug extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_post_slugs';
  info: {
    displayName: 'Featured Post Slug';
  };
  attributes: {
    slug: Schema.Attribute.String;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heroBackgroundImageDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroBackgroundImageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroButtonLink: Schema.Attribute.String;
    heroButtonText: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    heroMapPins: Schema.Attribute.Component<'homepage.map-pin', true>;
    heroTitleGradient: Schema.Attribute.String;
    heroTitleLine1: Schema.Attribute.String;
  };
}

export interface HomepageInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_insights_sections';
  info: {
    displayName: 'Insights Section';
  };
  attributes: {
    insightsButtonLink: Schema.Attribute.String;
    insightsButtonText: Schema.Attribute.String;
    insightsTitle: Schema.Attribute.Text;
  };
}

export interface HomepageMapPin extends Struct.ComponentSchema {
  collectionName: 'components_homepage_map_pins';
  info: {
    displayName: 'Map Pin';
  };
  attributes: {
    leftPosition: Schema.Attribute.String;
    topPosition: Schema.Attribute.String;
  };
}

export interface HomepagePartner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface HomepagePartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_partners_sections';
  info: {
    displayName: 'Partners Section';
  };
  attributes: {
    partners: Schema.Attribute.Component<'homepage.partner', true>;
    partnersTitle: Schema.Attribute.Text;
  };
}

export interface HomepageRtlvFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_rtlv_features';
  info: {
    displayName: 'RTLV Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageRtlvSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_rtlv_sections';
  info: {
    displayName: 'RTLV Section';
  };
  attributes: {
    kinesisDescription: Schema.Attribute.Text;
    kinesisTitle: Schema.Attribute.String;
    rtlvFeatures: Schema.Attribute.Component<'homepage.rtlv-feature', true>;
    rtlvTitle: Schema.Attribute.Text;
  };
}

export interface HomepageVerticalsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_verticals_sections';
  info: {
    displayName: 'Verticals Section';
  };
  attributes: {
    verticals: Schema.Attribute.Component<'homepage.business-vertical', true>;
    verticalsTitle: Schema.Attribute.String;
  };
}

export interface HomepageVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    videoTitle: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface KinesisHighlightsConfigAppList extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_config_app_lists';
  info: {
    displayName: 'configAppList';
  };
  attributes: {
    itemText: Schema.Attribute.Text;
  };
}

export interface KinesisHighlightsConfigurationAppFields
  extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_configuration_app_fields';
  info: {
    displayName: 'Configuration App Fields';
  };
  attributes: {
    configAppGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    configAppSubtitle: Schema.Attribute.Text;
    configAppTitle: Schema.Attribute.String;
    itemText: Schema.Attribute.Component<
      'kinesis-highlights.config-app-list',
      true
    >;
  };
}

export interface KinesisHighlightsGridItems extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_grid_items';
  info: {
    displayName: 'gridItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconSvgPath: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface KinesisHighlightsImageAndTextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_image_and_text_sections';
  info: {
    displayName: 'Image and Text Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<['Left', 'Right']>;
    title: Schema.Attribute.String;
  };
}

export interface KinesisHighlightsListItems extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_list_items';
  info: {
    displayName: 'listItems';
  };
  attributes: {
    itemText: Schema.Attribute.Text;
  };
}

export interface KinesisHighlightsListSection extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_list_sections';
  info: {
    displayName: 'List Section';
  };
  attributes: {
    listItems: Schema.Attribute.Component<
      'kinesis-highlights.list-items',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface KinesisHighlightsSvgGridSection
  extends Struct.ComponentSchema {
  collectionName: 'components_kinesis_highlights_svg_grid_sections';
  info: {
    displayName: 'SVG Grid Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gridItems: Schema.Attribute.Component<
      'kinesis-highlights.grid-items',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SpecsSpecs extends Struct.ComponentSchema {
  collectionName: 'components_specs_specs';
  info: {
    displayName: 'specs';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.info-card': ContactInfoCard;
      'homepage.business-vertical': HomepageBusinessVertical;
      'homepage.featured-post-slug': HomepageFeaturedPostSlug;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.insights-section': HomepageInsightsSection;
      'homepage.map-pin': HomepageMapPin;
      'homepage.partner': HomepagePartner;
      'homepage.partners-section': HomepagePartnersSection;
      'homepage.rtlv-feature': HomepageRtlvFeature;
      'homepage.rtlv-section': HomepageRtlvSection;
      'homepage.verticals-section': HomepageVerticalsSection;
      'homepage.video-section': HomepageVideoSection;
      'kinesis-highlights.config-app-list': KinesisHighlightsConfigAppList;
      'kinesis-highlights.configuration-app-fields': KinesisHighlightsConfigurationAppFields;
      'kinesis-highlights.grid-items': KinesisHighlightsGridItems;
      'kinesis-highlights.image-and-text-section': KinesisHighlightsImageAndTextSection;
      'kinesis-highlights.list-items': KinesisHighlightsListItems;
      'kinesis-highlights.list-section': KinesisHighlightsListSection;
      'kinesis-highlights.svg-grid-section': KinesisHighlightsSvgGridSection;
      'specs.specs': SpecsSpecs;
    }
  }
}
