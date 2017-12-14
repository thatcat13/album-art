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
    $(".gallery").prepend(
      `<div class="gallery-object">
        <div class="album-item">
          <img class="album-img" src="`+ newAlbum.img +`" alt="">
          <div class="album-content">
            <p class="band"><span class="title">Band: </span> ` + newAlbum. band + `</p>
            <p class="album"><span class="title">Album: </span> `+ newAlbum.title +`</p>
            <p class="release-date"><span class="title">Released: </span> `+ newAlbum.release +`</p>
            <div class="rating-area">
              <p>Rate Me!</p>
              <select id="rating">
                <option value="1">Bad</option>
                <option value="2">Meh</option>
                <option value="3">Not Horrible</option>
                <option value="4">Pretty Alright</option>
                <option value="5">AWESOME!</option>
              </select>
            </div>
          </div>
        </div>
      </div>`
    );
    // $(".album-submit").trigger("reset");
    $('#rating').barrating({
      theme: 'bars-movie'
    });
    // $(".album-submit").empty();
    $(".album-submit")[0].reset();
  });
});
