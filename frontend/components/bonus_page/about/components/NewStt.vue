<template>
  <div class="voice">
    <div class="icon-btn  speech-to-txt" style="padding=0px"  @click="startSpeechToTxt">
      <img src="../../../../assets/images/micON.png" alt="" width="30px" height="30px" style="padding=0;" v-if="this.status == 1">
      <img src="../../../../assets/images/micUN.png" alt="" width="30px" height="30px" style="padding=0;" v-if="this.status == 0">
      
    </div>        
    
</div>
</template>



 <script>

  export default {
   name: 'new_stt',
   data() {
     return {
       runtimeTranscription_: "",
       transcription_: [],
       lang_: "ko-KR",
       status : 0
     };
   },
   methods: {

    startSpeechToTxt() {
    // initialisation of voicereco
    this.status = 1   
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.lang = this.lang_;
    recognition.interimResults = true;

    // event current voice reco word
    recognition.addEventListener("result", event => {   
      
      var text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
      this.runtimeTranscription_ = text;
    });
    // end of transcription
    recognition.addEventListener("end", () => {
      this.transcription_.push(this.runtimeTranscription_);
      this.runtimeTranscription_ = "";
      recognition.stop();
      this.$emit('sttData', this.transcription_);
      this.status = 0
      
    });
     recognition.start();
     
   },

   }
  }
  </script>
