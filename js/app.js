var ViewModel = function() {
    var self = this;
    self.cats = ko.observableArray([
        new Cat({ name: 'Kitty', clickCounter: 0, imgSrc: 'imgs/cat0.jpg' }),
        new Cat({ name: 'Bob', clickCounter: 0, imgSrc: 'imgs/cat1.jpg' }),
        new Cat({ name: 'Sarry', clickCounter: 0, imgSrc: 'imgs/cat2.jpg'})
    ]);
    self.currentCat = ko.observable(self.cats()[0]);

    self.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
    self.incrementCounter = function() {
        self.currentCat().clickCounter(self.currentCat().clickCounter() + 1);
    };
    self.clickAdminButton = function() {
        $('#adminPanel').show(500);
    };
    self.clearAdminPanel = function() {
        $('#new_cat_name')[0].value = '';
        $('#new_click_times')[0].value = '';
        $('#new_cat_url')[0].value = '';
    };
    self.clickSaveButton = function() {
        var new_cat_name = $('#new_cat_name').val();
        var new_cat_url = $('#new_cat_url').val();
        var new_click_times = $('#new_click_times').val();
        if(new_cat_name !== '') {
            self.currentCat().name(new_cat_name);
        }
        if(new_cat_url !== '') {
            self.currentCat().imgSrc(new_cat_url);
        }
        if(new_click_times !== '') {
            self.currentCat().clickCounter(new_click_times);
        }
        self.clearAdminPanel();
        $('#adminPanel').hide(500);
    };
    self.clickCancelButton = function() {
        self.clearAdminPanel();
        $('#adminPanel').hide(500);
    };
};

var Cat = function(data) {
    this.clickCounter = ko.observable(data.clickCounter);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.level = ko.computed(function() {
        if(this.clickCounter() < 10) {
            return 0;
        }else if(this.clickCounter() >= 10 && this.clickCounter() < 30) {
            return 1;
        }else if(this.clickCounter() >= 30) {
            return 2;
        }
    }, this);
};

ko.applyBindings(new ViewModel());