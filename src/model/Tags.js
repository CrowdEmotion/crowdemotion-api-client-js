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
    root.CrowdemotionApiClientJs.Tags = factory(root.CrowdemotionApiClientJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tags model module.
   * @module model/Tags
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Tags</code>.
   * @alias module:model/Tags
   * @class
   * @param id {Integer} 
   * @param duration {Integer} 
   * @param name {String} 
   * @param t {Integer} 
   * @param x {String} 
   * @param y {String} 
   * @param mediaId {Integer} 
   * @param timeCreated {Date} 
   * @param uuid {String} 
   * @param version {Integer} 
   * @param created {Boolean} 
   * @param modified {Boolean} 
   */
  var exports = function(id, duration, name, t, x, y, mediaId, timeCreated, uuid, version, created, modified) {
    var _this = this;

    _this['id'] = id;
    _this['duration'] = duration;
    _this['name'] = name;
    _this['t'] = t;
    _this['x'] = x;
    _this['y'] = y;
    _this['media_id'] = mediaId;
    _this['timeCreated'] = timeCreated;
    _this['uuid'] = uuid;
    _this['version'] = version;
    _this['created'] = created;
    _this['modified'] = modified;
  };

  /**
   * Constructs a <code>Tags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tags} obj Optional instance to populate.
   * @return {module:model/Tags} The populated <code>Tags</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('t')) {
        obj['t'] = ApiClient.convertToType(data['t'], 'Integer');
      }
      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'String');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'String');
      }
      if (data.hasOwnProperty('media_id')) {
        obj['media_id'] = ApiClient.convertToType(data['media_id'], 'Integer');
      }
      if (data.hasOwnProperty('timeCreated')) {
        obj['timeCreated'] = ApiClient.convertToType(data['timeCreated'], 'Date');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Integer');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Boolean');
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
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Integer} t
   */
  exports.prototype['t'] = undefined;
  /**
   * 
   * @member {String} x
   */
  exports.prototype['x'] = undefined;
  /**
   * 
   * @member {String} y
   */
  exports.prototype['y'] = undefined;
  /**
   * 
   * @member {Integer} media_id
   */
  exports.prototype['media_id'] = undefined;
  /**
   * 
   * @member {Date} timeCreated
   */
  exports.prototype['timeCreated'] = undefined;
  /**
   * 
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * 
   * @member {Integer} version
   */
  exports.prototype['version'] = undefined;
  /**
   * 
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {Boolean} modified
   */
  exports.prototype['modified'] = undefined;



  return exports;
}));


