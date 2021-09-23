var meetingtoken = INPUT_ARGUMENTS.meetingtoken
 
 //center style meeting token is empty
    
 if (INPUT_ARGUMENTS.callframestyle == 'center' && window.innerWidth > 600 && meetingtoken == null){
        
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
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    
// center style meeting token is not empty
    
    
     if (INPUT_ARGUMENTS.callframestyle == 'center' && window.innerWidth > 600 && meetingtoken !== null){
        
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
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl , token: INPUT_ARGUMENTS.meetingtoken })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
     //bottom right style meetingtoken is  empty
    
      if (INPUT_ARGUMENTS.callframestyle == 'bottom right'&& window.innerWidth > 600 && meetingtoken == null){
        
   callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    zIndex: 10,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    bottom: '1em'
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl })
    callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    //bottom right style meetingtoken is not empty
    
  if (INPUT_ARGUMENTS.callframestyle == 'bottom right'&& window.innerWidth > 600 && meetingtoken !== null){
        
   callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    zIndex: 10,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    bottom: '1em'
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl, token: INPUT_ARGUMENTS.meetingtoken })
    callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    
  //top right style meetingtoken is  empty  
    
     if (INPUT_ARGUMENTS.callframestyle == 'top right' && window.innerWidth > 600 && meetingtoken == null){
        
   callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    zIndex: 1000,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    top: '0em'
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl })
    callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });    
     
 }
    
//top right style meetingtoken is not empty
    
      if (INPUT_ARGUMENTS.callframestyle == 'top right' && window.innerWidth > 600 && meetingtoken !== null){
        
   callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    zIndex: 1000,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    top: '0em'
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl, token: INPUT_ARGUMENTS.meetingtoken })
    callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });    
     
 }
    
    
     //small screen meetingtoken is empty
    
  if (window.innerWidth <= 600 && meetingtoken == null){
        
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
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }


    //small screen meetingtoken is not empty
    
 if (window.innerWidth <= 600 && meetingtoken !== null){
        
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
    callFrame.join({ url: INPUT_ARGUMENTS.callframeurl, token: INPUT_ARGUMENTS.meetingtoken })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
