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
    instance = new CrowdemotionApiClientJs.ResearchApi();
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

  describe('ResearchApi', function() {
    describe('researchGet', function() {
      it('should call researchGet successfully', function(done) {
        //uncomment below and update the code to test researchGet
        //instance.researchGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('researchPost', function() {
      it('should call researchPost successfully', function(done) {
        //uncomment below and update the code to test researchPost
        //instance.researchPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('researchResearchIdDelete', function() {
      it('should call researchResearchIdDelete successfully', function(done) {
        //uncomment below and update the code to test researchResearchIdDelete
        //instance.researchResearchIdDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('researchResearchIdGet', function() {
      it('should call researchResearchIdGet successfully', function(done) {
        //uncomment below and update the code to test researchResearchIdGet
        //instance.researchResearchIdGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('researchResearchIdPut', function() {
      it('should call researchResearchIdPut successfully', function(done) {
        //uncomment below and update the code to test researchResearchIdPut
        //instance.researchResearchIdPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
