/**
 * @ngdoc service
 * @name umbraco.resources.usersResource
 * @function
 *
 * @description
 * Used by the users section to get users and send requests to create, invite, delete, etc. users.
 */
(function () {
    'use strict';

    function usersResource($http, umbRequestHelper, $q) {

        function disableUser(userId) {
          if (!userId) {
            throw "userId not specified";
          }

          return umbRequestHelper.resourcePromise(
            $http.post(
              umbRequestHelper.getApiUrl(
                "userApiBaseUrl",
                "PostDisableUser", [{ userId: userId }])),
            'Failed to disable the user ' + userId);
        }

        function getUser() {
            var deferred = $q.defer();
            var user = {
                "name": "Tammy Contreras",
                "email": "tammy@contreras.com"
            };
            deferred.resolve(user);
            return deferred.promise;
        }

        function getUsers() {
            var deferred = $q.defer();
            var users = [
                {
                    "id": 1,
                    "name": "Tammy Contreras",
                    "userGroups": [
                        {
                            "name": "Admin"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 2,
                    "name": "Edward Flores",
                    "userGroups": [
                        {
                            "name": "Admin"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 3,
                    "name": "Benjamin Mills",
                    "userGroups": [
                        {
                            "name": "Writer"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
                    "state": "disabled",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 4,
                    "name": "Samantha Martinez",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "",
                    "state": "pending",
                    "lastLogin": ""
                },
                {
                    "id": 5,
                    "name": "Angela Stone",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 6,
                    "name": "Beverly Silva",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 7,
                    "name": "Arthur Welch",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 8,
                    "name": "Ruth Turner",
                    "userGroups": [
                        {
                            "name": "Translator"
                        },
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "",
                    "state": "pending",
                    "lastLogin": ""
                },
                {
                    "id": 9,
                    "name": "Tammy Contreras",
                    "userGroups": [
                        {
                            "name": "Translator"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 10,
                    "name": "Edward Flores",
                    "userGroups": [
                        {
                            "name": "Admin"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 11,
                    "name": "Benjamin Mills",
                    "userGroups": [
                        {
                            "name": "Writer"
                        },
                        {
                            "name": "Translator"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
                    "state": "disabled",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 12,
                    "name": "Samantha Martinez",
                    "userGroupName": "Editor",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "",
                    "state": "pending",
                    "lastLogin": ""
                },
                {
                    "id": 13,
                    "name": "Angela Stone",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 14,
                    "name": "Beverly Silva",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 15,
                    "name": "Arthur Welch",
                    "userGroups": [
                        {
                            "name": "Editor"
                        }
                    ],
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg",
                    "state": "active",
                    "lastLogin": "2014-04-25T01:32:21.196Z"
                },
                {
                    "id": 16,
                    "name": "Ruth Turner",
                    "userGroups": [
                        {
                            "name": "Translator"
                        }
                    ],
                    "avatar": "",
                    "state": "pending",
                    "lastLogin": ""
                }
            ];
            deferred.resolve(users);
            return deferred.promise;
        }

        function getUserRole() {
            var deferred = $q.defer();
            var user = {
                "name": "Admin",
                "alias": "admin",
                "id": 1,
                "icon": "icon-medal"
            };
            deferred.resolve(user);
            return deferred.promise;
        }

        function getUserGroups() {
            var deferred = $q.defer();
            var userGroups = [
                {
                    "name": "Admin",
                    "alias": "admin",
                    "id": 1,
                    "icon": "icon-medal",
                    "sections": [],
                    "startNodesContent": [],
                    "startNodesMedia": []
                },
                {
                    "name": "Writer",
                    "alias": "writer",
                    "id": 2,
                    "icon": "icon-edit",
                    "sections": [{ "id": "1", "name": "Content"}, { "id": "2", "name": "Media"}],
                    "startNodesContent": [],
                    "startNodesMedia": []
                },
                {
                    "name": "Editor",
                    "alias": "editor",
                    "id": 3,
                    "icon": "icon-tools",
                    "sections": [{ "id": "1", "name": "Content"}, { "id": "2", "name": "Media"}],
                    "startNodesContent": [{ "id": "1", "name": "Start node 1"}, { "id": "2", "name": "Start node 2"}],
                    "startNodesMedia": [{ "id": "1", "name": "Start node 1"}, { "id": "2", "name": "Start node 2"}]
                },
                {
                    "name": "Translator",
                    "alias": "translator",
                    "id": 4,
                    "icon": "icon-globe",
                    "sections": [{ "id": "1", "name": "Content"}, { "id": "2", "name": "Translations"}],
                    "startNodesContent": [{ "id": "1", "name": "Start node 1"}],
                    "startNodesMedia": [{ "id": "1", "name": "Start node 1"}]
                }
            ];
            deferred.resolve(userGroups);
            return deferred.promise;
        }

        var resource = {
            getUser: getUser,
            getUsers: getUsers,
            getUserRole: getUserRole,
            getUserGroups: getUserGroups,
            disableUser: disableUser
        };

        return resource;

    }

    angular.module('umbraco.resources').factory('usersResource', usersResource);

})();