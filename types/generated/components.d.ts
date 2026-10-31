import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBullet extends Struct.ComponentSchema {
  collectionName: 'components_components_bullets';
  info: {
    displayName: 'Bullet';
    icon: 'bullseye';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface ComponentsLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_components_link_buttons';
  info: {
    displayName: 'link_button';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsPlayer extends Struct.ComponentSchema {
  collectionName: 'components_components_players';
  info: {
    description: '';
    displayName: 'Player';
    icon: 'user-plus';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_club: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsPresse extends Struct.ComponentSchema {
  collectionName: 'components_components_presses';
  info: {
    displayName: 'Presse';
    icon: 'newspaper';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsReassuranceElement extends Struct.ComponentSchema {
  collectionName: 'components_components_reassurance_elements';
  info: {
    description: '';
    displayName: 'Reassurance';
    icon: 'angle-right';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSlide extends Struct.ComponentSchema {
  collectionName: 'components_components_slides';
  info: {
    displayName: 'Slide';
    icon: 'image';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link-button', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_components_social_networks';
  info: {
    displayName: 'Social_network';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsExpertise extends Struct.ComponentSchema {
  collectionName: 'components_sections_expertise';
  info: {
    description: '';
    displayName: 'Expertise';
    icon: 'network-wired';
  };
  attributes: {
    Bullet: Schema.Attribute.Component<'components.bullet', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMetaInformations extends Struct.ComponentSchema {
  collectionName: 'components_sections_meta_informations';
  info: {
    description: '';
    displayName: 'Meta_informations';
    icon: 'golf-ball';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    robot_follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    robot_index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsQuote extends Struct.ComponentSchema {
  collectionName: 'components_sections_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote-left';
  };
  attributes: {
    name: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsSectionA extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_as';
  info: {
    description: '';
    displayName: 'Fifa_Section';
    icon: 'align-left';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    Fifa_match_agent: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Media_rights: Schema.Attribute.RichText;
    quote: Schema.Attribute.Component<'sections.quote', false>;
    Reassurance: Schema.Attribute.Component<
      'components.reassurance-element',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'components.bullet': ComponentsBullet;
      'components.link-button': ComponentsLinkButton;
      'components.player': ComponentsPlayer;
      'components.presse': ComponentsPresse;
      'components.reassurance-element': ComponentsReassuranceElement;
      'components.slide': ComponentsSlide;
      'components.social-network': ComponentsSocialNetwork;
      'sections.expertise': SectionsExpertise;
      'sections.meta-informations': SectionsMetaInformations;
      'sections.quote': SectionsQuote;
      'sections.section-a': SectionsSectionA;
    }
  }
}
