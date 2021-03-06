/**
 * @flow
 */
const captionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'prohibited',
  ],
  prohibitedProps: [
    'aria-label',
    'aria-labelledby',
  ],
  props: {},
  relatedConcepts: [],
  requireContextRole: [
    'figure',
    'grid',
    'table',
    'treegrid',
  ],
  requiredContextRole: [
    'figure',
    'grid',
    'table',
    'treegrid',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default captionRole;