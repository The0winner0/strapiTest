import type { Schema, Struct } from '@strapi/strapi';

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
      'specs.specs': SpecsSpecs;
    }
  }
}
