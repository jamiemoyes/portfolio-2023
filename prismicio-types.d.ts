// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Attribute documents
 */
interface AttributeDocumentData {
  /**
   * Emoji field in *Attribute*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: attribute.emoji
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  emoji: prismic.KeyTextField;

  /**
   * Text field in *Attribute*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: attribute.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Attribute document from Prismic
 *
 * - **API ID**: `attribute`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AttributeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AttributeDocumentData>,
    "attribute",
    Lang
  >;

/**
 * Item in *Home → bio*
 */
export interface HomeDocumentDataBioItem {
  /**
   * Profile Picture field in *Home → bio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bio[].profile_picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_picture: prismic.ImageField<never>;

  /**
   * Description field in *Home → bio*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bio[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * location field in *Home → bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bio[].location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * employment field in *Home → bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bio[].employment
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  employment: prismic.KeyTextField;
}

/**
 * Item in *Home → Pin Board Links*
 */
export interface HomeDocumentDataPinBoardLinksItem {
  /**
   * Social Link field in *Home → Pin Board Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home.pin_board_links[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;

  /**
   * Link Name field in *Home → Pin Board Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.pin_board_links[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField;
}

/**
 * Item in *Home → Projects*
 */
export interface HomeDocumentDataProjectsItem {
  /**
   * project field in *Home → Projects*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: home.projects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField;
}

/**
 * Item in *Home → About*
 */
export interface HomeDocumentDataAboutItem {
  /**
   * Title field in *Home → About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Home → About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * bio field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bio[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bio: prismic.GroupField<Simplify<HomeDocumentDataBioItem>>;

  /**
   * Pin Board Links field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.pin_board_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  pin_board_links: prismic.GroupField<
    Simplify<HomeDocumentDataPinBoardLinksItem>
  >;

  /**
   * Projects field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.projects[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projects: prismic.GroupField<Simplify<HomeDocumentDataProjectsItem>>;

  /**
   * About field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  about: prismic.GroupField<Simplify<HomeDocumentDataAboutItem>>;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Project → Attributes*
 */
export interface ProjectDocumentDataAttributesItem {
  /**
   * Icon field in *Project → Attributes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.attributes[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * Icon Description field in *Project → Attributes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.attributes[].icon_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon_description: prismic.KeyTextField;

  /**
   * Text field in *Project → Attributes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.attributes[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

type ProjectDocumentDataSlicesSlice = never;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Company field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.company
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * Location field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Start Date field in *Project*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: project.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  start_date: prismic.TimestampField;

  /**
   * End date field in *Project*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: project.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  end_date: prismic.TimestampField;

  /**
   * Current field in *Project*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: project.is_current
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_current: prismic.BooleanField;

  /**
   * Attributes field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.attributes[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  attributes: prismic.GroupField<Simplify<ProjectDocumentDataAttributesItem>>;

  /**
   * Description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Colour field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.accent_colour
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  accent_colour: prismic.KeyTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes =
  | AttributeDocument
  | HomeDocument
  | ProjectDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AttributeDocument,
      AttributeDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataBioItem,
      HomeDocumentDataPinBoardLinksItem,
      HomeDocumentDataProjectsItem,
      HomeDocumentDataAboutItem,
      HomeDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataAttributesItem,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
