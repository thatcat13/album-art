function AlbumItem(band, title, release, img){
  this.band = band;
  this.title = title;
  this.release = release;
  this.img = img;
};




$(document).ready(function(){
  $('#rating').barrating({
    theme: 'bars-movie'
    });
  $(".album-submit").submit(function(event) {
    event.preventDefault();
    var bandInput = $("input#band-input").val();
    var albumInput = $("input#album-input").val();
    var releaseInput = $("input#release-input").val();
    var imgInput = $("input#img-input").val();

    var newAlbum = new AlbumItem(bandInput, albumInput, releaseInput, imgInput);
    $(".gallery").prepend(
      `<div class="album-item">
        <img class="album-img" src="`+ newAlbum.img +`" alt="">
        <p class="band">` + newAlbum. band + `</p>
        <p class="album">`+ newAlbum.title +`</p>
        <p class="release-date">`+ newAlbum.release +`</p>
      </div>`
    );
    // $(".album-submit").trigger("reset");
    // $(".album-submit").empty();
    $(".album-submit")[0].reset();
  });
});
