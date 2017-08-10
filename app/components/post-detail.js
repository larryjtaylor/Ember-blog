import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },

    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    update(post, params) {
      this.sendAction('update', post, params);
    }
  }
});
