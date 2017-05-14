
var cats = [];
var Cat = function(order, name, imgSrc) {
        this.order = order;
        this.name = name;
        this.sprite = imgSrc;
        this.clickTimes = 0;
    };
var currentOrder;

var model = {
    initCats: function() {
        for(var i=0; i<7; i++) {
            var cat = new Cat(i, 'cat '+i, 'imgs/cat' + i + '.jpg');
            cats.push(cat);
        }
    }

};

var octopus = {
    initAll: function() {
        model.initCats();
        view.initView();
        view.initButton();
    }
};

var view = {
    initView: function() {
        for(var i=0; i<cats.length; i++) {
            var catLi = '<li id="' + cats[i].order + '">'+ cats[i].name + '</li>';
            $('#cat_list').append(catLi);
        }

        $('li').click(function(){
            var order = this.id;
            currentOrder = order;
            $('#cat_name').html(cats[order].name);
            $('#cat_image').attr('src', cats[order].sprite);
            $('#cat_count').html(cats[order].clickTimes);
        });

        $('img').click(function(){
            $('#cat_count').html(++cats[currentOrder].clickTimes);
        });

        $('#save').click(function(){
            var new_cat_name = $('#new_cat_name').val();
            var new_cat_url = $('#new_cat_url').val();
            var new_click_times = $('#new_click_times').val();
            if(new_cat_name !== '') {
                cats[currentOrder].name = new_cat_name;
                $('#cat_name').html(cats[currentOrder].name);
            }
            if(new_cat_url !== '') {
                cats[currentOrder].sprite = new_cat_url;
                $('#cat_image').attr('src', cats[currentOrder].sprite);
            }
            if(new_click_times !== '') {
                cats[currentOrder].clickTimes = new_click_times;
                $('#cat_count').html(cats[currentOrder].clickTimes);
            }
            view.clearAdminPanel();
            $('#adminPanel').hide(500);
        });

        $('#cancel').click(function(){
            view.clearAdminPanel();
           $('#adminPanel').hide(500);
        });
    },
    initButton: function() {
      $('#admin').click(function() {
          $('#adminPanel').show(500);
      })
    },
    clearAdminPanel: function() {
        $('#new_cat_name')[0].value = '';
        $('#new_click_times')[0].value = '';
        $('#new_cat_url')[0].value = '';
    }

};

octopus.initAll();