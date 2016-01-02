import * as PD from './PD.es6';

var app = angular.module('app', []);

app.controller('ctrl', function($scope) {
    /**
     * 状态。1为展示，2为编辑
     * @type {number}
     */
    $scope.status = 1;

    $scope.wordTree = new PD.WordTree();

    $scope.data = {
        input: '',
        word: null,
        wordList: []
    };

    $scope.method = {
        find: function(spelling) {
            $scope.data.wordList = $scope.wordTree.find(spelling);
        },
        show: function(index) {
            $scope.data.word = $scope.data.wordList[index];
            $scope.data.wordList = [];
        },
        init: function() {
            $scope.$watch('data.input', function() {
                $scope.method.find($scope.data.input);
            });
        },
        edit: function() {
            $scope.status = 2;
        },
        addRow: function(index) {
            $scope.data.word.getPOS()[index].addMeaning(new PD.Meaning(null, null));
        },
        delRow: function(index, meaningIndex) {
            $scope.data.word.getPOS()[index].getMeaning().splice(meaningIndex, 1);
        }
    };

    $scope.method.init();

});