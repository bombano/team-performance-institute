$(function () {
    initInstagramFeed();
});

function initInstagramFeed(){
    $(window).on('load', function(){
        $.instagramFeed({
            'username': 'teamperformanceinstitute',
            'container': "#instagram-feed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 1,
            'items_per_row': 1,
            'margin': 0,
            'get_data':false,
            /*'callback': function(data){
            $('#instagram-feed').html(JSON.stringify(data, null, 2)); 
            }*/
        });
    });
}