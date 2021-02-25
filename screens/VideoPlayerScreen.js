
import React from 'react';
import {View,StyleSheet,Text, Dimensions} from 'react-native';
import Video from 'react-native-video';
import { useState } from 'react/cjs/react.development';
import VideoPlayer from 'react-native-video-controls';
import { useEffect } from 'react';


const VideoPlayerScreen =  (props) => {

    const [completedVideo,setCompletedVideo] =  useState(false)
    const [OrientationStatus,setOrientationStatus] =  useState('');
    const [HeightLayout,setHeightLayout] = useState(Dimensions.get('window').height);
    const [WidthLayout,setWidthLayout] =  useState(Dimensions.get('window').width);

    const DetectOrientation =  () => {
        if(HeightLayout > WidthLayout){
            setOrientationStatus('Landscape Mode');
            console.log('Landscape Mode');
        }else{
            setOrientationStatus('Portrait Mode')
             console.log('Portrait Mode');
        }

    }

    
    useEffect(() => {
        DetectOrientation();
    },[HeightLayout,WidthLayout,OrientationStatus])


    console.log(completedVideo);

   
       
    

return(
    <View style={{ height:200,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'}}>
       
    <VideoPlayer preventsDisplaySleepDuringVideoPlayback onBack={() => {
        props.onPressingBack()
    }}
    onEnd={() => {
        console.log('vide end here')
        setCompletedVideo(true);
    }} onPlay={() => {
        console.log('video being play here')
    }} 
        
     controls={true} resizeMode='cover' style={{
          position: 'absolute'
          ,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
    }} source={{uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'}} ref={
        (ref) => {
            console.log('ref')
        }
    } />
</View>
)
  
};


export default VideoPlayerScreen;