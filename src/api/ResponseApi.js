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
    define(['ApiClient', 'model/Response', 'model/ResponseCreation', 'model/ResponseMetadataResponse', 'model/ResponseMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Response'), require('../model/ResponseCreation'), require('../model/ResponseMetadataResponse'), require('../model/ResponseMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.CrowdemotionApiClientJs) {
      root.CrowdemotionApiClientJs = {};
    }
    root.CrowdemotionApiClientJs.ResponseApi = factory(root.CrowdemotionApiClientJs.ApiClient, root.CrowdemotionApiClientJs.Response, root.CrowdemotionApiClientJs.ResponseCreation, root.CrowdemotionApiClientJs.ResponseMetadataResponse, root.CrowdemotionApiClientJs.ResponseMetadata);
  }
}(this, function(ApiClient, Response, ResponseCreation, ResponseMetadataResponse, ResponseMetadata) {
  'use strict';

  /**
   * Response service.
   * @module api/ResponseApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ResponseApi. 
   * @alias module:api/ResponseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the responseGet operation.
     * @callback module:api/ResponseApi~responseGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Response>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all Responses
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skip The number of results to skip.
     * @param {Integer} opts.limit The maximum number of results to return.
     * @param {String} opts.where JSON formatted string.
     * @param {String} opts.sort Attribute used to sort results.
     * @param {module:api/ResponseApi~responseGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Response>}
     */
    this.responseGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit'],
        'where': opts['where'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Response];

      return this.apiClient.callApi(
        '/response', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responsePost operation.
     * @callback module:api/ResponseApi~responsePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Response
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {module:model/ResponseCreation} body Request body
     * @param {module:api/ResponseApi~responsePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response}
     */
    this.responsePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling responsePost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/response', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responseResponseIdDelete operation.
     * @callback module:api/ResponseApi~responseResponseIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Response
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✗ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Integer} responseId ID of Response to update.
     * @param {module:api/ResponseApi~responseResponseIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.responseResponseIdDelete = function(responseId, callback) {
      var postBody = null;

      // verify the required parameter 'responseId' is set
      if (responseId == undefined || responseId == null) {
        throw "Missing the required parameter 'responseId' when calling responseResponseIdDelete";
      }


      var pathParams = {
        'response_id': responseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/response/{response_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responseResponseIdGet operation.
     * @callback module:api/ResponseApi~responseResponseIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a Response
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Integer} responseId ID of the Response
     * @param {module:api/ResponseApi~responseResponseIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response}
     */
    this.responseResponseIdGet = function(responseId, callback) {
      var postBody = null;

      // verify the required parameter 'responseId' is set
      if (responseId == undefined || responseId == null) {
        throw "Missing the required parameter 'responseId' when calling responseResponseIdGet";
      }


      var pathParams = {
        'response_id': responseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/response/{response_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responseResponseIdMetadataGet operation.
     * @callback module:api/ResponseApi~responseResponseIdMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show Response Metadata
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Integer} responseId ID of the Response
     * @param {module:api/ResponseApi~responseResponseIdMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseMetadataResponse}
     */
    this.responseResponseIdMetadataGet = function(responseId, callback) {
      var postBody = null;

      // verify the required parameter 'responseId' is set
      if (responseId == undefined || responseId == null) {
        throw "Missing the required parameter 'responseId' when calling responseResponseIdMetadataGet";
      }


      var pathParams = {
        'response_id': responseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseMetadataResponse;

      return this.apiClient.callApi(
        '/response/{response_id}/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responseResponseIdMetadataPost operation.
     * @callback module:api/ResponseApi~responseResponseIdMetadataPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Response Metadata
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Integer} responseId ID of the Response.
     * @param {module:model/ResponseMetadata} body Request body
     * @param {module:api/ResponseApi~responseResponseIdMetadataPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseMetadataResponse}
     */
    this.responseResponseIdMetadataPost = function(responseId, body, callback) {
      var postBody = body;

      // verify the required parameter 'responseId' is set
      if (responseId == undefined || responseId == null) {
        throw "Missing the required parameter 'responseId' when calling responseResponseIdMetadataPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling responseResponseIdMetadataPost";
      }


      var pathParams = {
        'response_id': responseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseMetadataResponse;

      return this.apiClient.callApi(
        '/response/{response_id}/metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responseResponseIdPut operation.
     * @callback module:api/ResponseApi~responseResponseIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Response
     * &lt;p&gt;&lt;strong&gt;Permissions:&lt;/strong&gt; ✓ Respondent ✗ Customer ✓ Manager&lt;/p&gt;
     * @param {Integer} responseId ID of Response to update.
     * @param {module:model/ResponseCreation} body Request body
     * @param {module:api/ResponseApi~responseResponseIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response}
     */
    this.responseResponseIdPut = function(responseId, body, callback) {
      var postBody = body;

      // verify the required parameter 'responseId' is set
      if (responseId == undefined || responseId == null) {
        throw "Missing the required parameter 'responseId' when calling responseResponseIdPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling responseResponseIdPut";
      }


      var pathParams = {
        'response_id': responseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/response/{response_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
