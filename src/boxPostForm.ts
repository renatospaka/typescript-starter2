import EventManager from './eventManager';
import BoxPostList from './boxPostList';

export default class BoxPostForm {
  static boxId = 'box-post-form';
  static EVENT_CLICK_HIDE_BOX_FORM = 'box-post-form-click-hide';
  private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }

  private init() {
    const buttonForm = document.querySelector(this.buttonFormSelector);
    buttonForm.addEventListener('click', () => {
      this.hideBox();
    
      this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM);
      // const boxList = document.getElementById(BoxPostList.boxId);
      // boxList.removeAttribute('style');
    });

    this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST, () => {
      this.showBox();
    });
  }

  showBox() {
    const boxForm = document.getElementById(BoxPostForm.boxId);
    boxForm.removeAttribute('style'); 
  }

  hideBox() {
    const boxForm = document.getElementById(BoxPostForm.boxId);
    boxForm.style.display = 'none';
  }
}