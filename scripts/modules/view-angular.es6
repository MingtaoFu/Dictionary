import * as PD from './PD.es6';

var app = angular.module('app', []);

app.controller('ctrl', function($scope) {
    /**
     * 状态。1为展示，2为编辑，3为新增
     * @type {number}
     */
    $scope.status = 1;

    $scope.wordTree = new PD.WordTree();

    $scope.data = {
        input: '',
        word: null,
        wordSpelling: null,
        wordList: []
    };

    $scope.method = {
        find: function(spelling) {
            $scope.data.wordList = $scope.wordTree.find(spelling);
        },
        show: function(index) {
            $scope.data.word = $scope.data.wordList[index];
            $scope.data.wordSpelling = $scope.data.word.getSpelling();
            $scope.data.wordList = [];
            $scope.status = 1;
        },
        init: function() {
            $scope.$watch('data.input', function() {
                $scope.method.find($scope.data.input);
            });
        },
        addToTmp: function() {
            $scope.status = 3;
            $scope.data.word = new PD.Word('spelling',[new PD.POS('n', [new PD.Meaning('meaning', 'sentence')])]);
        },
        del: function() {
            if(confirm("确认删除吗?")) {
                $scope.wordTree.del($scope.data.word.getSpelling());
                alert("删除成功");
            }
        },
        edit: function() {
            $scope.status = 2;
        },
        addRow: function(index) {
            $scope.data.word.getPOS()[index].addMeaning(new PD.Meaning(null, null));
        },
        delRow: function(index, meaningIndex) {
            $scope.data.word.getPOS()[index].getMeaning().splice(meaningIndex, 1);
        },
        submit: function() {
            switch ($scope.status) {
                case 2:
                    $scope.wordTree.update($scope.data.wordSpelling, $scope.data.word);
                    alert("修改成功");
                    break;
                case 3:
                    $scope.wordTree.insert($scope.data.word);
                    alert("新增成功");
                    break;
                default:
                    alert("致命错误");
            }
        },
        addTable: function() {
            $scope.data.word.addPOS(new PD.POS('n', [new PD.Meaning(null, null)]));
        },
        delTable: function(index) {
            $scope.data.word.getPOS().splice(index, 1);
        }
    };

    $scope.method.init();

});