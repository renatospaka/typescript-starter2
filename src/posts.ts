interface ListenerInterface {
  (): void
}

class EventManager {
  private listeners: { [eventName:string]: Array<ListenerInterface> } = {};

  addListener(eventName: string, callable: ListenerInterface) {
    if (!(this.listeners[eventName] instanceof Array)) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callable);
  }

  runEvent(eventName: string) {
    for (let callable of this.listeners[eventName]) {
      callable();
    }
  }
}

class BoxPostList {
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


class BoxPostForm {
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

class PostPage {
  constructor(private eventManager: EventManager) {
    this.init();
  }

  private init() {
    new BoxPostList(this.eventManager);
    new BoxPostForm(this.eventManager);
  }
}

new PostPage(new EventManager());

