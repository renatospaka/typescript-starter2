export default abstract class Table {
  constructor(private selector: string, private columns: Array<string>, private _data?: Array<any>) {

  }

  protected createRow() {
    for (let row of this._data) {
      const tr = document.createElement('tr');
      for (let column of this.columns) {
        this.createCol(tr, row[column]);
        this.getElement().appendChild(tr);
      }
    }
  };
  
  protected createCol(row, columnData:any) {
    let td = document.createElement('td');
    td.innerHTML = columnData;
    row.appendChild(td);
  };

  protected getElement() {
    return document.querySelector(this.selector);
  };

  make() {
    this.createRow();
  };

  set data(value) {
    this._data = value
  };
} 