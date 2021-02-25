import React,{useState,useEffect,useRef} from 'react';
import {View,Text,TouchableOpacity,FlatList,Button, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const QuestionScreen =  () => {


  const [hour1,setHour] =  useState("00");
  const [min1,setMin] = useState("00");
  const [sec1,setSec] = useState("00");
  const [time,setTime] = useState(5);
  
  const [isActive,setIsActive]  = useState(true);

  


  const [options,setOptions] =  useState([
    {id:'12',selected:false,name:'mithu'},
    {id:'13',selected:false,name:'pankaj'},
    {id:'14',selected:false,name:'shrweya'},
    {id:'15',selected:false,name:'manu'}
  ],{
    question:'Who is you'
  });



  const optionRef  =  useRef();

  const changeHandler =  (id) => {
      console.log('inside func');
      console.log(id);
      const data =  options.map((element) => {
        if(element.id === id){
          element.selected = true;
          
        
      
        }else{
          element.selected = false;
         
        }
        return element;
      });

      console.log(data)

      setOptions(data);

  }


  // const onHandlePress =  () => {

  //   return bgc === '#fff' ? setBgc('yellow') : setBgc('#fff')
  // }

useEffect(() => {
  let intervalId;
  if(isActive){
    intervalId = setInterval(() => {
      let time1 = time;
      let hour = Math.floor(time1 / 3600);
      let min = Math.floor(time1 / 60);
      let sec = Math.floor(time1 % 60);


      if(time === 0){
        clearInterval(intervalId);
        setIsActive(false)

        // TODO: function call should be here
        console.log('Times up');
      }

      if(hour < 1) setHour("00");
      else if(hour < 10) setHour(`0${hour}`);
      else setHour(`${hour}`);

      if(min < 1) setMin("00");
      else if(min < 10) setMin(`0${min}`);
      else setMin(`${min}`);

      if (sec < 10) setSec(`0${sec}`);
      else setSec(`${sec}`);

      setTime(time1 - 1);

        console.log(time1);
      
    },1000);
  }
  return () => {
    clearInterval(intervalId);
  };
}, [time, isActive]);





  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      {/* <View style={{flexDirection:'row',justifyContent:'space-between',height:60,alignItems:'center',backgroundColor:'grey'}}>
      <Text style={{marginLeft:10}}>sdfsd</Text>
    <Text style={{marginRight:10,fontSize:22,color:'#fff',fontWeight:'bold'}}>{`${hour1} ${min1} ${sec1}`}</Text>
      </View> */}

      <LinearGradient style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}} colors={['#FF9F4A', '#FF3C83']}>
        <Text style={{marginLeft:10,color:'#fff',fontStyle:'normal',fontWeight:'bold',fontSize:20,letterSpacing:2}}>Quiz 1</Text>
        <Text style={{marginRight:10}}>{`${hour1} ${min1} ${sec1}`}</Text>
      </LinearGradient>


    
    <View ref={optionRef}  style={{height:250,padding:10}}>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontFamily:'arial',fontWeight:'100',letterSpacing:0.6,padding:5}}>Q1. What is your Name ? </Text>
        </View>



        <FlatList data={options} keyExtractor={item => item.id} renderItem={(item) => (
          
              <TouchableOpacity onPress={() => {changeHandler(item.item.id)}} style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginLeft:5,borderWidth:1,borderRadius:50,borderColor:'grey',backgroundColor:item.item.selected===true ? 'red' : 'transparent' }}>

              <View style={{padding:5,height:30,width:30,borderRadius:30/2,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{alignSelf:'center',fontSize:15,color:item.item.selected === true ? '#fff':'black'}}>{item.item.id}</Text>
              </View>
              <View style={{height:30,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                  <Text style={{fontSize:16,fontFamily:'sans',color:item.item.selected === true ? '#fff':'black'}}>{item.item.name}</Text>
              </View>
            </TouchableOpacity>

        )} />

        

    </View>

    
{/* submit Button  */}
<TouchableOpacity  activeOpacity={0.6} onPress={() => {
  Alert.alert('Are you sure to submit this')
}} style={{backgroundColor:'#BF3312',justifyContent:'center',alignSelf:'center',height:40,width:200,alignItems:'center',borderRadius:100}}>
  
  <Text style={{color:'#fff',fontSize:18,letterSpacing:1}}>Submit</Text>
    
</TouchableOpacity>
    


    </View>
   
  )
};



export default QuestionScreen;