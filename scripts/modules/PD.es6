class Word {
	constructor(spelling, meaning) {
		this.spelling = spelling;
		this.meaning = meaning;
	}

	/**
	* setter and getter
	*/

	//搜索匹配，含部分匹配
	match(str) {

	}

	//验证是否已经存在了此词
	validateUnique() {

	}
}

class CursorNode extends Word{
	constructor(spelling, meaning, position, nextP) {
		super(spelling, meaning);
		this.position = position;
		this.nextP = nextP;
	}
}

export class CursorSpace {
	constructor(n) {
		//生成该游标空间时，自动初始化
		this.createCursor(n);
	}

	createCursor(n) {
		this.arr = [];
		for (var i = 0; i < n; i++) {
			var cursorNode = new CursorNode();
			cursorNode.next = i + 1;
			if(n - 1 == i) {
				cursorNode.next = 0;
			}
            this.arr.push(cursorNode);
		}
	}

	malloc() {
        var p = this.arr[0].next;
        this.arr[0].next = this.arr[p].next;
        return p;
    }

	free(p) {
        this.arr[p].next = this.arr[0].next;
        this.arr[0].next = p;
	}
}

export {CursorSpace};
