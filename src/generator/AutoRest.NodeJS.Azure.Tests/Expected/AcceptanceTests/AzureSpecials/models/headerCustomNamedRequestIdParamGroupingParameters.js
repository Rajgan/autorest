/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Additional parameters for the Header_customNamedRequestIdParamGrouping
 * operation.
 *
 */
class HeaderCustomNamedRequestIdParamGroupingParameters {
  /**
   * Create a HeaderCustomNamedRequestIdParamGroupingParameters.
   * @member {string} fooClientRequestId The fooRequestId
   */
  constructor() {
  }

  /**
   * Defines the metadata of HeaderCustomNamedRequestIdParamGroupingParameters
   *
   * @returns {object} metadata of HeaderCustomNamedRequestIdParamGroupingParameters
   *
   */
  mapper() {
    return {
      required: false,
      type: {
        name: 'Composite',
        className: 'HeaderCustomNamedRequestIdParamGroupingParameters',
        modelProperties: {
          fooClientRequestId: {
            required: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HeaderCustomNamedRequestIdParamGroupingParameters;
