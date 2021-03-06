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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CrowdemotionApiClientJs);
  }
}(this, function(expect, CrowdemotionApiClientJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CrowdemotionApiClientJs.FaceVideo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FaceVideo', function() {
    it('should create an instance of FaceVideo', function() {
      // uncomment below and update the code to test FaceVideo
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be.a(CrowdemotionApiClientJs.FaceVideo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property timeCreated (base name: "timeCreated")', function() {
      // uncomment below and update the code to test the property timeCreated
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property fqAvg (base name: "fqAvg")', function() {
      // uncomment below and update the code to test the property fqAvg
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property fqStddev (base name: "fqStddev")', function() {
      // uncomment below and update the code to test the property fqStddev
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property frameRate (base name: "frameRate")', function() {
      // uncomment below and update the code to test the property frameRate
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property numFrames (base name: "numFrames")', function() {
      // uncomment below and update the code to test the property numFrames
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property remoteLocation (base name: "remoteLocation")', function() {
      // uncomment below and update the code to test the property remoteLocation
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property statusText (base name: "statusText")', function() {
      // uncomment below and update the code to test the property statusText
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property statusMessage (base name: "statusMessage")', function() {
      // uncomment below and update the code to test the property statusMessage
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property responseId (base name: "responseId")', function() {
      // uncomment below and update the code to test the property responseId
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property md5 (base name: "md5")', function() {
      // uncomment below and update the code to test the property md5
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property lengthMS (base name: "lengthMS")', function() {
      // uncomment below and update the code to test the property lengthMS
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property lengthS (base name: "lengthS")', function() {
      // uncomment below and update the code to test the property lengthS
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property framesProcessed (base name: "framesProcessed")', function() {
      // uncomment below and update the code to test the property framesProcessed
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property processingTime (base name: "processingTime")', function() {
      // uncomment below and update the code to test the property processingTime
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

    it('should have the property engineVersion (base name: "engineVersion")', function() {
      // uncomment below and update the code to test the property engineVersion
      //var instane = new CrowdemotionApiClientJs.FaceVideo();
      //expect(instance).to.be();
    });

  });

}));
