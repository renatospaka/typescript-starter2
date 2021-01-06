import EventManager from './eventManager';
import BoxPostForm from './boxPostForm';
import BoxPostList from './boxPostList';

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
