import * as PD from './PD.es6';

var app = {
    cfg: {
        input: 'input',
        panel: 'panel',
        dropDown: 'dropDown'
    },

    init: function(wordTree) {
        //绑定输入事件
        document.getElementById(this.cfg.input).addEventListener('input', function() {
            var result = wordTree.find(this.value);
            console.log(result)
        });
    },

    setDropDown: function(bool) {
        var dropDown = document.getElementById(this.cfg.dropDown);
        if (!dropDown) {
            return;
        }

        if(bool) {
            dropDown.setAttribute('show', '0');
        } else {
            dropDown.setAttribute('show', '1');
        }
    }
};

export {app};