import * as PD from './PD.es6';

var app = {
    cfg: {
        input: 'input',
        panel: 'panel',
        dropDown: 'dropDown'
    },

    init: function(wordTree) {
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
        });
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
            str += '<li><a href="#">';
            str += data[i].getSpelling();
            str += '</a></li>'
        }
        document.getElementById(this.cfg.dropDown).innerHTML = str;
    }
};

export {app};