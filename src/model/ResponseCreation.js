/**
 * CloudEmotion API v1
 * CrowdEmotion API
 *
 * OpenAPI spec version: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CrowdemotionApiClientJs) {
      root.CrowdemotionApiClientJs = {};
    }
    root.CrowdemotionApiClientJs.ResponseCreation = factory(root.CrowdemotionApiClientJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResponseCreation model module.
   * @module model/ResponseCreation
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ResponseCreation</code>.
   * @alias module:model/ResponseCreation
   * @class
   * @param researchId {Integer} 
   * @param mediaId {Integer} 
   * @param respondentId {Integer} 
   */
  var exports = function(researchId, mediaId, respondentId) {
    var _this = this;

    _this['research_id'] = researchId;
    _this['media_id'] = mediaId;
    _this['respondent_id'] = respondentId;
  };

  /**
   * Constructs a <code>ResponseCreation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseCreation} obj Optional instance to populate.
   * @return {module:model/ResponseCreation} The populated <code>ResponseCreation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('research_id')) {
        obj['research_id'] = ApiClient.convertToType(data['research_id'], 'Integer');
      }
      if (data.hasOwnProperty('media_id')) {
        obj['media_id'] = ApiClient.convertToType(data['media_id'], 'Integer');
      }
      if (data.hasOwnProperty('respondent_id')) {
        obj['respondent_id'] = ApiClient.convertToType(data['respondent_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} research_id
   */
  exports.prototype['research_id'] = undefined;
  /**
   * 
   * @member {Integer} media_id
   */
  exports.prototype['media_id'] = undefined;
  /**
   * 
   * @member {Integer} respondent_id
   */
  exports.prototype['respondent_id'] = undefined;



  return exports;
}));


