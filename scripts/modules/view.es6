import * as PD from './PD.es6';

var app = {
    cfg: {
        input: 'input',
        panel: 'panel',
        dropDown: 'dropDown'
    },

    tmp: {
        value: []
    },

    init: function(wordTree) {
        this.wordTree = wordTree;
        var that = this;
        //绑定输入事件
        document.getElementById(this.cfg.input).addEventListener('input', function() {
            var result = wordTree.find(this.value);
            if(result.length > 0) {
                that.putDataIntoDrop(result);
                that.setDropDownVisible(true);
            } else {
                that.setDropDownVisible(false);
            }
            that.tmp.value = result;
        });

        //绑定item点击事件
        document.getElementById(this.cfg.dropDown).addEventListener('click', function(e) {
            var classList = e.target.classList;
            for (let i in classList) {
                if (classList[i] == 'wordItem') {
                    var index = parseInt(e.target.getAttribute("index"));
                    that.setContentIntoPanel(that.tmp.value[index]);
                    return;
                }
            }
        })
    },

    setDropDownVisible: function(bool) {
        var dropDown = document.getElementById(this.cfg.dropDown);
        if (!dropDown) {
            return;
        }

        if(bool) {
            dropDown.setAttribute('show', '1');
        } else {
            dropDown.setAttribute('show', '0');
        }
    },

    putDataIntoDrop: function(data) {
        var str = '';
        for (let i in data) {
            str += '<li><a href="#" class="wordItem" index="' + i + '">';
            str += data[i].getSpelling();
            str += '</a></li>'
        }
        document.getElementById(this.cfg.dropDown).innerHTML = str;
    },

    setContentIntoPanel: function(word) {
        console.log(word);

        var html = '<h1>' + word.getSpelling() + '</h1>';
        var POS = word.getPOS();
        for (let i in POS) {
            console.log(POS[i]);
            html = html + '<div><p>'+ POS[i].getPOS() +'.</p><ul>';
            for (let j in POS[i]) {
                html = html + '<li>' + POS[i][j].getMeaning() + '<p>' + POS[i][j].getSentence() + '</p></li>';
            }
            html = html + '</ul></div>';
        }

        document.getElementById(this.cfg.panel).innerHTML = html;
    },

    del: function(spelling) {

    }
};

export {app};