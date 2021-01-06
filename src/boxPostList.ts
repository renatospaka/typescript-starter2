import EventManager from './eventManager';
import BoxPostForm from './boxPostForm';

export default class BoxPostList {
  static boxId = 'box-post-list';
  static EVENT_CLICK_HIDE_BOX_LIST = 'box-post-list-click-hide';
  private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`;

  constructor(private eventManager: EventManager) {
    this.init();
  }

  private init() {
    const buttonList = document.querySelector(this.buttonListSelector);
    buttonList.addEventListener('click', () => {
      this.hideBox();
    
      this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDE_BOX_LIST);
      // const boxForm = document.getElementById(BoxPostForm.boxId);
      // boxForm.removeAttribute('style');
    });

    this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDE_BOX_FORM, () => {
      this.showBox();
    });
  }

  showBox() {
    const boxList = document.getElementById(BoxPostList.boxId);
    boxList.removeAttribute('style');
  }
  
  hideBox() {
    const boxList = document.getElementById(BoxPostList.boxId);
    boxList.style.display = 'none';
  }
}