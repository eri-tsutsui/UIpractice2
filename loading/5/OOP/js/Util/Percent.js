export default class Percent extends EventTarget{

	constructor () {
		super ();
		// DOM
		this.txt = document.querySelector('.loading-percent');
		this.imgs = document.querySelectorAll('img');
		this.len = this.imgs.length;
		// variable
		this.target = 0;
		this.loadIndex = 0;
	}

	updateProgress() {

		//カウンター
		this.loadIndex ++;

		// 進捗率（%）
		this.target = this.loadIndex / this.len * 100;
		this.txt.textContent = Math.floor(this.target); 

		// 終了処理
		if(this.target >= 100) {
			this.dispatchEvent(new Event('reachedMax'));
		}
			
	}

}