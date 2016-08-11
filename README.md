# crowdemotion-api-client-js

CrowdemotionApiClientJs - JavaScript client for crowdemotion-api-client-js
CrowdEmotion API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.1.0
- Package version: 1.1.0
- Build date: 2016-08-11T15:53:22.718+01:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install crowdemotion-api-client-js --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CrowdemotionApiClientJs = require('crowdemotion-api-client-js');

var defaultClient = CrowdemotionApiClientJs.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['Authorization'] = "Token"

var api = new CrowdemotionApiClientJs.FaceVideoApi()

var facevideoId = 56; // {Integer} ID of FaceVideo to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.facevideoFacevideoIdDelete(facevideoId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.crowdemotion.co.uk/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CrowdemotionApiClientJs.FaceVideoApi* | [**facevideoFacevideoIdDelete**](docs/FaceVideoApi.md#facevideoFacevideoIdDelete) | **DELETE** /facevideo/{facevideo_id} | Delete a FaceVideo
*CrowdemotionApiClientJs.FaceVideoApi* | [**facevideoGet**](docs/FaceVideoApi.md#facevideoGet) | **GET** /facevideo | Find a FaceVideo
*CrowdemotionApiClientJs.FaceVideoApi* | [**facevideoPost**](docs/FaceVideoApi.md#facevideoPost) | **POST** /facevideo | Analyse FaceVideo
*CrowdemotionApiClientJs.FaceVideoApi* | [**facevideoPut**](docs/FaceVideoApi.md#facevideoPut) | **PUT** /facevideo | Analyse FaceVideo
*CrowdemotionApiClientJs.MediaApi* | [**mediaGet**](docs/MediaApi.md#mediaGet) | **GET** /media | Find all registered Media
*CrowdemotionApiClientJs.MediaApi* | [**mediaMediaIdDelete**](docs/MediaApi.md#mediaMediaIdDelete) | **DELETE** /media/{media_id} | Delete Media
*CrowdemotionApiClientJs.MediaApi* | [**mediaMediaIdGet**](docs/MediaApi.md#mediaMediaIdGet) | **GET** /media/{media_id} | Find a Media
*CrowdemotionApiClientJs.MediaApi* | [**mediaMediaIdPut**](docs/MediaApi.md#mediaMediaIdPut) | **PUT** /media/{media_id} | Update a Media
*CrowdemotionApiClientJs.MediaApi* | [**mediaPost**](docs/MediaApi.md#mediaPost) | **POST** /media | Create new Media
*CrowdemotionApiClientJs.MetricApi* | [**metricGet**](docs/MetricApi.md#metricGet) | **GET** /metric | List all registered metrics
*CrowdemotionApiClientJs.MetricApi* | [**metricMetricIdDelete**](docs/MetricApi.md#metricMetricIdDelete) | **DELETE** /metric/{metric_id} | Delete a Metric
*CrowdemotionApiClientJs.MetricApi* | [**metricMetricIdGet**](docs/MetricApi.md#metricMetricIdGet) | **GET** /metric/{metric_id} | Find a Metric
*CrowdemotionApiClientJs.MetricApi* | [**metricPost**](docs/MetricApi.md#metricPost) | **POST** /metric | Create Metric
*CrowdemotionApiClientJs.ResearchApi* | [**researchGet**](docs/ResearchApi.md#researchGet) | **GET** /research | Find all Research
*CrowdemotionApiClientJs.ResearchApi* | [**researchPost**](docs/ResearchApi.md#researchPost) | **POST** /research | Create a Research Project
*CrowdemotionApiClientJs.ResearchApi* | [**researchResearchIdDelete**](docs/ResearchApi.md#researchResearchIdDelete) | **DELETE** /research/{research_id} | Delete Research Project
*CrowdemotionApiClientJs.ResearchApi* | [**researchResearchIdGet**](docs/ResearchApi.md#researchResearchIdGet) | **GET** /research/{research_id} | Find a Research Project
*CrowdemotionApiClientJs.ResearchApi* | [**researchResearchIdPut**](docs/ResearchApi.md#researchResearchIdPut) | **PUT** /research/{research_id} | Edit Research Project details
*CrowdemotionApiClientJs.RespondentApi* | [**respondentGet**](docs/RespondentApi.md#respondentGet) | **GET** /respondent | Find all Respondents of a Research
*CrowdemotionApiClientJs.RespondentApi* | [**respondentPost**](docs/RespondentApi.md#respondentPost) | **POST** /respondent | Create a Respondent
*CrowdemotionApiClientJs.RespondentApi* | [**respondentRespondentIdDelete**](docs/RespondentApi.md#respondentRespondentIdDelete) | **DELETE** /respondent/{respondent_id} | Delete a Respondent
*CrowdemotionApiClientJs.RespondentApi* | [**respondentRespondentIdGet**](docs/RespondentApi.md#respondentRespondentIdGet) | **GET** /respondent/{respondent_id} | Find a Respondent
*CrowdemotionApiClientJs.RespondentApi* | [**respondentRespondentIdMetadataGet**](docs/RespondentApi.md#respondentRespondentIdMetadataGet) | **GET** /respondent/{respondent_id}/metadata | Find Respondent Metadata
*CrowdemotionApiClientJs.RespondentApi* | [**respondentRespondentIdMetadataPost**](docs/RespondentApi.md#respondentRespondentIdMetadataPost) | **POST** /respondent/{respondent_id}/metadata | Add Respondent Metadata
*CrowdemotionApiClientJs.RespondentApi* | [**respondentRespondentIdPut**](docs/RespondentApi.md#respondentRespondentIdPut) | **PUT** /respondent/{respondent_id} | Update a Respondent
*CrowdemotionApiClientJs.ResponseApi* | [**responseGet**](docs/ResponseApi.md#responseGet) | **GET** /response | Find all Responses
*CrowdemotionApiClientJs.ResponseApi* | [**responsePost**](docs/ResponseApi.md#responsePost) | **POST** /response | Create a Response
*CrowdemotionApiClientJs.ResponseApi* | [**responseResponseIdDelete**](docs/ResponseApi.md#responseResponseIdDelete) | **DELETE** /response/{response_id} | Delete a Response
*CrowdemotionApiClientJs.ResponseApi* | [**responseResponseIdGet**](docs/ResponseApi.md#responseResponseIdGet) | **GET** /response/{response_id} | Find a Response
*CrowdemotionApiClientJs.ResponseApi* | [**responseResponseIdMetadataGet**](docs/ResponseApi.md#responseResponseIdMetadataGet) | **GET** /response/{response_id}/metadata | Show Response Metadata
*CrowdemotionApiClientJs.ResponseApi* | [**responseResponseIdMetadataPost**](docs/ResponseApi.md#responseResponseIdMetadataPost) | **POST** /response/{response_id}/metadata | Add Response Metadata
*CrowdemotionApiClientJs.ResponseApi* | [**responseResponseIdPut**](docs/ResponseApi.md#responseResponseIdPut) | **PUT** /response/{response_id} | Update a Response
*CrowdemotionApiClientJs.TimeseriesApi* | [**timeseriesDelete**](docs/TimeseriesApi.md#timeseriesDelete) | **DELETE** /timeseries | Delete a Timeseries
*CrowdemotionApiClientJs.TimeseriesApi* | [**timeseriesGet**](docs/TimeseriesApi.md#timeseriesGet) | **GET** /timeseries | Get all recorded timeseries for a Response
*CrowdemotionApiClientJs.UserApi* | [**userIdGet**](docs/UserApi.md#userIdGet) | **GET** /user/{id} | Get User information
*CrowdemotionApiClientJs.UserApi* | [**userIdPut**](docs/UserApi.md#userIdPut) | **PUT** /user/{id} | Edit User information
*CrowdemotionApiClientJs.UserApi* | [**userLoginPost**](docs/UserApi.md#userLoginPost) | **POST** /user/login | User Login
*CrowdemotionApiClientJs.UserApi* | [**userUserIdMetadataGet**](docs/UserApi.md#userUserIdMetadataGet) | **GET** /user/{user_id}/metadata | Find User metadata
*CrowdemotionApiClientJs.UserApi* | [**userUserIdMetadataPost**](docs/UserApi.md#userUserIdMetadataPost) | **POST** /user/{user_id}/metadata | Add user metadata


## Documentation for Models

 - [CrowdemotionApiClientJs.ContentDetails](docs/ContentDetails.md)
 - [CrowdemotionApiClientJs.Data](docs/Data.md)
 - [CrowdemotionApiClientJs.FaceVideo](docs/FaceVideo.md)
 - [CrowdemotionApiClientJs.FaceVideoUpload](docs/FaceVideoUpload.md)
 - [CrowdemotionApiClientJs.Login](docs/Login.md)
 - [CrowdemotionApiClientJs.LoginResponse](docs/LoginResponse.md)
 - [CrowdemotionApiClientJs.Media](docs/Media.md)
 - [CrowdemotionApiClientJs.MediaCreation](docs/MediaCreation.md)
 - [CrowdemotionApiClientJs.Metric](docs/Metric.md)
 - [CrowdemotionApiClientJs.MetricCreation](docs/MetricCreation.md)
 - [CrowdemotionApiClientJs.Research](docs/Research.md)
 - [CrowdemotionApiClientJs.ResearchCreation](docs/ResearchCreation.md)
 - [CrowdemotionApiClientJs.Respondent](docs/Respondent.md)
 - [CrowdemotionApiClientJs.RespondentMetadata](docs/RespondentMetadata.md)
 - [CrowdemotionApiClientJs.RespondentMetadataResponse](docs/RespondentMetadataResponse.md)
 - [CrowdemotionApiClientJs.Response](docs/Response.md)
 - [CrowdemotionApiClientJs.ResponseCreation](docs/ResponseCreation.md)
 - [CrowdemotionApiClientJs.ResponseMetadata](docs/ResponseMetadata.md)
 - [CrowdemotionApiClientJs.ResponseMetadataResponse](docs/ResponseMetadataResponse.md)
 - [CrowdemotionApiClientJs.Statistics](docs/Statistics.md)
 - [CrowdemotionApiClientJs.Stats](docs/Stats.md)
 - [CrowdemotionApiClientJs.Status](docs/Status.md)
 - [CrowdemotionApiClientJs.Tags](docs/Tags.md)
 - [CrowdemotionApiClientJs.Timeseries](docs/Timeseries.md)
 - [CrowdemotionApiClientJs.User](docs/User.md)
 - [CrowdemotionApiClientJs.UserMetadata](docs/UserMetadata.md)
 - [CrowdemotionApiClientJs.UserMetadataResponse](docs/UserMetadataResponse.md)
 - [CrowdemotionApiClientJs.UserUpdateBody](docs/UserUpdateBody.md)
 - [CrowdemotionApiClientJs.Videodetails](docs/Videodetails.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

