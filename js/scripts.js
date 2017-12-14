function AlbumItem(band, title, release, img){
  this.band = band;
  this.title = title;
  this.release = release;
  this.img = img;
};




$(document).ready(function(){
  $(".album-submit").submit(function(event) {
    event.preventDefault();
    var bandInput = $("input#band-input").val();
    var albumInput = $("input#album-input").val();
    var releaseInput = $("input#release-input").val();
    var imgInput = $("input#img-input").val();

    var newAlbum = new AlbumItem(bandInput, albumInput, releaseInput, imgInput);

    console.log(newAlbum);
  })
});
