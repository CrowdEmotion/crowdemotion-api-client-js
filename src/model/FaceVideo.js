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
    root.CrowdemotionApiClientJs.FaceVideo = factory(root.CrowdemotionApiClientJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FaceVideo model module.
   * @module model/FaceVideo
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>FaceVideo</code>.
   * @alias module:model/FaceVideo
   * @class
   * @param id {Integer} 
   * @param timeCreated {Date} 
   * @param filename {String} 
   * @param fqAvg {Integer} 
   * @param fqStddev {Integer} 
   * @param frameRate {Integer} 
   * @param numFrames {Integer} 
   * @param remoteLocation {String} 
   * @param status {Integer} 
   * @param statusText {String} 
   * @param statusMessage {String} 
   * @param responseId {String} 
   * @param md5 {String} 
   * @param lengthMS {Integer} 
   * @param lengthS {Number} 
   * @param framesProcessed {Integer} 
   * @param processingTime {Integer} 
   * @param engineVersion {Integer} 
   */
  var exports = function(id, timeCreated, filename, fqAvg, fqStddev, frameRate, numFrames, remoteLocation, status, statusText, statusMessage, responseId, md5, lengthMS, lengthS, framesProcessed, processingTime, engineVersion) {
    var _this = this;

    _this['id'] = id;
    _this['timeCreated'] = timeCreated;
    _this['filename'] = filename;
    _this['fqAvg'] = fqAvg;
    _this['fqStddev'] = fqStddev;
    _this['frameRate'] = frameRate;
    _this['numFrames'] = numFrames;
    _this['remoteLocation'] = remoteLocation;
    _this['status'] = status;
    _this['statusText'] = statusText;
    _this['statusMessage'] = statusMessage;
    _this['responseId'] = responseId;
    _this['md5'] = md5;
    _this['lengthMS'] = lengthMS;
    _this['lengthS'] = lengthS;
    _this['framesProcessed'] = framesProcessed;
    _this['processingTime'] = processingTime;
    _this['engineVersion'] = engineVersion;
  };

  /**
   * Constructs a <code>FaceVideo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaceVideo} obj Optional instance to populate.
   * @return {module:model/FaceVideo} The populated <code>FaceVideo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('timeCreated')) {
        obj['timeCreated'] = ApiClient.convertToType(data['timeCreated'], 'Date');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('fqAvg')) {
        obj['fqAvg'] = ApiClient.convertToType(data['fqAvg'], 'Integer');
      }
      if (data.hasOwnProperty('fqStddev')) {
        obj['fqStddev'] = ApiClient.convertToType(data['fqStddev'], 'Integer');
      }
      if (data.hasOwnProperty('frameRate')) {
        obj['frameRate'] = ApiClient.convertToType(data['frameRate'], 'Integer');
      }
      if (data.hasOwnProperty('numFrames')) {
        obj['numFrames'] = ApiClient.convertToType(data['numFrames'], 'Integer');
      }
      if (data.hasOwnProperty('remoteLocation')) {
        obj['remoteLocation'] = ApiClient.convertToType(data['remoteLocation'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('statusText')) {
        obj['statusText'] = ApiClient.convertToType(data['statusText'], 'String');
      }
      if (data.hasOwnProperty('statusMessage')) {
        obj['statusMessage'] = ApiClient.convertToType(data['statusMessage'], 'String');
      }
      if (data.hasOwnProperty('responseId')) {
        obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
      }
      if (data.hasOwnProperty('md5')) {
        obj['md5'] = ApiClient.convertToType(data['md5'], 'String');
      }
      if (data.hasOwnProperty('lengthMS')) {
        obj['lengthMS'] = ApiClient.convertToType(data['lengthMS'], 'Integer');
      }
      if (data.hasOwnProperty('lengthS')) {
        obj['lengthS'] = ApiClient.convertToType(data['lengthS'], 'Number');
      }
      if (data.hasOwnProperty('framesProcessed')) {
        obj['framesProcessed'] = ApiClient.convertToType(data['framesProcessed'], 'Integer');
      }
      if (data.hasOwnProperty('processingTime')) {
        obj['processingTime'] = ApiClient.convertToType(data['processingTime'], 'Integer');
      }
      if (data.hasOwnProperty('engineVersion')) {
        obj['engineVersion'] = ApiClient.convertToType(data['engineVersion'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Date} timeCreated
   */
  exports.prototype['timeCreated'] = undefined;
  /**
   * 
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * 
   * @member {Integer} fqAvg
   */
  exports.prototype['fqAvg'] = undefined;
  /**
   * 
   * @member {Integer} fqStddev
   */
  exports.prototype['fqStddev'] = undefined;
  /**
   * 
   * @member {Integer} frameRate
   */
  exports.prototype['frameRate'] = undefined;
  /**
   * 
   * @member {Integer} numFrames
   */
  exports.prototype['numFrames'] = undefined;
  /**
   * 
   * @member {String} remoteLocation
   */
  exports.prototype['remoteLocation'] = undefined;
  /**
   * 
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} statusText
   */
  exports.prototype['statusText'] = undefined;
  /**
   * 
   * @member {String} statusMessage
   */
  exports.prototype['statusMessage'] = undefined;
  /**
   * 
   * @member {String} responseId
   */
  exports.prototype['responseId'] = undefined;
  /**
   * 
   * @member {String} md5
   */
  exports.prototype['md5'] = undefined;
  /**
   * 
   * @member {Integer} lengthMS
   */
  exports.prototype['lengthMS'] = undefined;
  /**
   * 
   * @member {Number} lengthS
   */
  exports.prototype['lengthS'] = undefined;
  /**
   * 
   * @member {Integer} framesProcessed
   */
  exports.prototype['framesProcessed'] = undefined;
  /**
   * 
   * @member {Integer} processingTime
   */
  exports.prototype['processingTime'] = undefined;
  /**
   * 
   * @member {Integer} engineVersion
   */
  exports.prototype['engineVersion'] = undefined;



  return exports;
}));


