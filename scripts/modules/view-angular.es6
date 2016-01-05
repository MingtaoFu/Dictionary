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
        _show: function (index, byInput) {
            if(byInput) {
                $scope.data.word = $scope.data.wordList[index];
                $scope.data.wordList = [];
            }

            $scope.data.wordSpelling = $scope.data.word.getSpelling();
            $scope.status = 1;
        },
        show: function(index) {
            if($scope.status > 1) {
                if(!confirm("确定放弃当前编辑?")) {
                    return;
                }
            }
            this._show(index, true);
        },
        init: function() {
            $scope.$watch('data.input', function() {
                $scope.method.find($scope.data.input);
            });
        },
        addToTmp: function() {
            if($scope.status > 1) {
                if(!confirm("确定放弃当前编辑?")) {
                    return;
                }
            }
            $scope.status = 3;
            //$scope.data.word = new PD.Word('spelling',[new PD.POS('n', [new PD.Meaning('meaning', 'sentence')])]);
            $scope.data.word = new PD.Word('',[new PD.POS('n', [new PD.Meaning('', '')])]);
        },
        del: function() {
            if(confirm("确认删除吗?")) {
                $scope.wordTree.del($scope.data.word.getSpelling());
                $scope.data.word = null;
                alert("删除成功");
            }
        },
        edit: function() {
            if($scope.status > 1) {
                if(!confirm("确定放弃当前编辑?")) {
                    return;
                }
            }
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
                    $scope.method._show(null, false);
                    break;
                case 3:
                    if($scope.wordTree.insert($scope.data.word)) {
                        alert("新增成功");
                        $scope.method._show(null, false);
                    } else {
                        alert("单词已存在");
                    }
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