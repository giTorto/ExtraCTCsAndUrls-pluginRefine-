function AboutDialog() {}

AboutDialog.prototype = {
  init: function () {
    this.dialogElement = $(DOM.loadHTML("extraction-extension", "dialogs/about.html"));
    var controls = DOM.bind(this.dialogElement);
    controls.close.click(this.bound("hide"));
  },
  
  show: function () {
    this.init();
    this.dialogLevel = DialogSystem.showDialog(this.dialogElement);
  },
  
  hide: function () {
    DialogSystem.dismissUntil(this.dialogLevel - 1);
  },
};
