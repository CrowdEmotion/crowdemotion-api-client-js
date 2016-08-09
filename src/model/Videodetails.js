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
    define(['ApiClient', 'model/ContentDetails', 'model/Statistics', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentDetails'), require('./Statistics'), require('./Status'));
  } else {
    // Browser globals (root is window)
    if (!root.CrowdemotionApiClientJs) {
      root.CrowdemotionApiClientJs = {};
    }
    root.CrowdemotionApiClientJs.Videodetails = factory(root.CrowdemotionApiClientJs.ApiClient, root.CrowdemotionApiClientJs.ContentDetails, root.CrowdemotionApiClientJs.Statistics, root.CrowdemotionApiClientJs.Status);
  }
}(this, function(ApiClient, ContentDetails, Statistics, Status) {
  'use strict';




  /**
   * The Videodetails model module.
   * @module model/Videodetails
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Videodetails</code>.
   * @alias module:model/Videodetails
   * @class
   * @param contentDetails {module:model/ContentDetails} 
   * @param status {module:model/Status} 
   * @param statistics {module:model/Statistics} 
   */
  var exports = function(contentDetails, status, statistics) {
    var _this = this;

    _this['contentDetails'] = contentDetails;
    _this['status'] = status;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>Videodetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Videodetails} obj Optional instance to populate.
   * @return {module:model/Videodetails} The populated <code>Videodetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contentDetails')) {
        obj['contentDetails'] = ContentDetails.constructFromObject(data['contentDetails']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = Statistics.constructFromObject(data['statistics']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ContentDetails} contentDetails
   */
  exports.prototype['contentDetails'] = undefined;
  /**
   * @member {module:model/Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Statistics} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


