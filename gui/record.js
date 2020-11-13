
var context;
var AudioContext = window.AudioContext || window.webkitAudioContext;

var record = document.getElementById("rec_button")

record.addEventListener("click", start_rec);

function start_rec() {
    console.log("rec start setup");

    var constraints = {audio:true, video:false}



    navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
        console.log("rec start user media called");

        context = new AudioContext();

        input = context.createMediaStreamSource(stream);

        encodingType = "wav"; //default

        console.log("start of issue")
        recorder = new WebAudioRecorder(input, {
            workerDir: "/", // must end with slash
		        encoding: encodingType,
            numChannels:2,
            onEncoderLoading: function(recorder, encoding) {
              console.log("loading encoder");
            },
        });

        console.log("end of issue")

        recorder.onEncoderLoaded = function() {
          console.log("loaded encoder");
        }

        //recorder.onComplete = function(recorder, )

        recorder.setOptions({
          encodeAfterRecord:encodeAfterRecord, //additional options
        });

        recorder.startRecording();
        console.log("rec start!")


    }).catch(function(err) {
        console.log("failed to start recording")
        console.log(err)
    });

}

function end_rec() {

}
