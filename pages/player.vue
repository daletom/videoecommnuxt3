<template>
    <div>
        <div class="video-player w-3/5">
              <vue-plyr>
                <video ref="videoStreaming" controls crossorigin playsinline poster="https://ix-www.imgix.net/press/imgixcollage.jpg?crop=focal&fit=crop&q=70&markpad=0&markalign=middle%2Ccenter&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj9mbT1wbmcmcGFnZT00&bm=normal&usm=2O&chromasub=444&blend64=OTkwQzMyNDk&w=640&h=550&dpr=2">
                  <!-- <source
                    src="https://tom.imgix.video/imgix_unwrapping.mp4?fm=hls"
                    type="application/x-mpegURL"
                  /> -->
                  <source 
                    src=""
                  />
                </video>
              </vue-plyr>
        </div>
    </div>
</template>

<script>
import Hls from "hls.js";
//import Plyr from "plyr";

export default {
    mounted() {
    this.videoStreaming();
  },
  methods: {
    videoStreaming() {
      var url = "https://tom.imgix.video/imgix_unwrapping.mp4?fm=hls";
      const video = this.$refs.videoStreaming;
      console.log("tage video", video);
      const defaultOptions = {};
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          const availableQualities = hls.levels.map(l => l.height);
          defaultOptions.quality = {
            default: availableQualities[0],
            options: availableQualities,
            forced: true,
            onChange: e => updateQuality(e)
          };
          new Plyr(video, defaultOptions);
        });

        hls.attachMedia(video);
        window.hls = hls;
      } else {
        new Plyr(video, defaultOptions);
      }
    }
}
}
</script>