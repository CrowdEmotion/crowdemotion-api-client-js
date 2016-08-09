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
    instance = new CrowdemotionApiClientJs.RespondentApi();
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

  describe('RespondentApi', function() {
    describe('respondentGet', function() {
      it('should call respondentGet successfully', function(done) {
        //uncomment below and update the code to test respondentGet
        //instance.respondentGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentPost', function() {
      it('should call respondentPost successfully', function(done) {
        //uncomment below and update the code to test respondentPost
        //instance.respondentPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentRespondentIdDelete', function() {
      it('should call respondentRespondentIdDelete successfully', function(done) {
        //uncomment below and update the code to test respondentRespondentIdDelete
        //instance.respondentRespondentIdDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentRespondentIdGet', function() {
      it('should call respondentRespondentIdGet successfully', function(done) {
        //uncomment below and update the code to test respondentRespondentIdGet
        //instance.respondentRespondentIdGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentRespondentIdMetadataGet', function() {
      it('should call respondentRespondentIdMetadataGet successfully', function(done) {
        //uncomment below and update the code to test respondentRespondentIdMetadataGet
        //instance.respondentRespondentIdMetadataGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentRespondentIdMetadataPost', function() {
      it('should call respondentRespondentIdMetadataPost successfully', function(done) {
        //uncomment below and update the code to test respondentRespondentIdMetadataPost
        //instance.respondentRespondentIdMetadataPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('respondentRespondentIdPut', function() {
      it('should call respondentRespondentIdPut successfully', function(done) {
        //uncomment below and update the code to test respondentRespondentIdPut
        //instance.respondentRespondentIdPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));