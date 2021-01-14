export default abstract class Table {
  constructor(private selector, private data: Array<any>, private columns: Array<string>) {

  }

  protected createRow() {
    for (let row of this.data) {
      const tr = document.createElement('tr');
      for (let column of this.columns) {
        this.getElement().appendChild(tr);
        this.createCol(tr, row[column]);
      }
    }
  };
  
  protected createCol(row, data:any) {
    let td = document.createElement('td');
    td.innerHTML = data;
    row.appendChild(td);
  };

  protected getElement() {
    return document.querySelector(this.selector);
  };

  make() {
    this.createRow();
  }
} 