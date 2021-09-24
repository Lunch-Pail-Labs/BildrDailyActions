var r = INPUT_ARGUMENTS.rtmplink
var room = INPUT_ARGUMENTS.roomurl
const rtmpUrl = INPUT_ARGUMENTS.rtmplink;
    

        
callFrame = window.DailyIframe.createFrame({
iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});

callFrame.join({ url: INPUT_ARGUMENTS.roomurl, token: INPUT_ARGUMENTS.token })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
         
            });   

callFrame.on('joined-meeting', (event) => {
callFrame.startLiveStreaming({ rtmpUrl });

 });
    
callFrame.on('left-meeting', (event) => {
callFrame.stopLiveStreaming();

 }); 