
import './App.css';
import React from 'react';
import './Components/Style/Style1.css';
import Card from './Components/Card';
import Data from '../src/Components/Data/data.json';
import Unique from './Components/Unique';
import NestedMapping from './Components/NestedMapping';
import ClassMethod from './Components/ClassMethod';
import React_icons from './Components/Sub_Components/React_icons';
import  React_Boot from './Components/Sub_Components/ReactBoot';
import SetState from './Components/Sub_Components/SetState.js';
import  ConditionalIndex from './Components/Sub_Components/CONDITIONAL_RENDERING/ConditionIndex.js';
import HandlerButton from './Components/Sub_Components/EvenHandler_COM/HandlerButton.js';
import BindingEvent from './Components/Sub_Components/EvenHandler_COM/BindingEvent.js';
import USEState from './Components/Sub_Components/EvenHandler_COM/USEState.js';
import USEState_1 from './Components/Sub_Components/EvenHandler_COM/USEState_1.js'
import FormControl1 from './Components/Sub_Components/FormControl/FormControl1.js';
import FormControl2 from './Components/Sub_Components/FormControl/FormControl2.js'
import DynamicStyle from './Components/Sub_Components/FormControl/DynamicStyle'
import DynamicStyle2 from './Components/Sub_Components/EvenHandler_COM/DynamicStyle2.js';
import USEState2 from './Components/Sub_Components/EvenHandler_COM/USEState2';
import BottomToTop from './Components/Sub_Components/FormControl/BottomToTop.js';
import BottomTop4 from './Components/Sub_Components/FormControl/BottomToTop4'
import BottomTop5 from './Components/Sub_Components/FormControl/BottomToTop5'
import Home from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/Home.js'
import Toggle from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/Toggle';
import FAQ from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/FAQ';
import USE_EFFECT_1 from './Components/Sub_Components/FormControl/USEEFFECT_Folder/USE_EFFECT_1';
import CUSTOM_HOOCKS from './Components/Sub_Components/FormControl/USEEFFECT_Folder/CUSTOM_HOOCKS';
import FRAGMENT from './Components/Sub_Components/FormControl/FRAGMENT';
import LiFECycleMethod from './Components/Sub_Components/FormControl/LiFECycleMethod';
import REF from './Components/Sub_Components/FormControl/USEREF_Folder/REF';
import USEREF from './Components/Sub_Components/FormControl/USEREF_Folder/USEREF';
import Component_1 from './Components/Sub_Components/PropsDrilling/Component_1';
import Component_2 from './Components/Sub_Components/PropsDrilling/Component_2';
import Component_3 from './Components/Sub_Components/PropsDrilling/Component_3';
import Component_4 from './Components/Sub_Components/PropsDrilling/Component_4';
import USECONTEXT from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/USECONTEXT';
import CONTEXT_1 from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/USERCONTEXT_F/CONTEXT_1';
import CONTEXT_2 from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/USERCONTEXT_F/CONTEXT_2';
import CONTEXT_3 from './Components/Sub_Components/FormControl/ToDO_COMPONENTS/ToggleFolder/USERCONTEXT_F/CONTEXT_3';




 function First(){
   return(
     React.createElement("h1",{},"I am  Working as a full stack developer")
   )
 }

function SecondCom(){
  return(
    React.createElement("div",{},
     React.createElement("p",{},"This is my first Paragraph"),
     React.createElement("p",{},"This is my second Paragraph")
    )
  )
}

function App() {
   let data=[]
   data=Data.map((item,index)=>{
     return(
      <Card 
      titleText={item.title}
      descriptionIs={item.desc}
      key={item.index}
     />
     )
   })

  function handlechildData(childData){
      console.log(childData);
  }
  return (
    <div className="App">
      <h1 className='heading2Style'>
        Todo Application
        </h1>
       {data}
       <Unique/>
       <NestedMapping/>
       <ClassMethod name="Abu Al Shahriar Rifat" 
       profession="Software Enginner"/>
       <First/>
       <SecondCom/>
       <React_icons/>
       <React_Boot/>
       <SetState name="Abu Al Shahriar Rifat" 
       profession="Sharda University"/>
       <ConditionalIndex/>
       <HandlerButton/>
       <BindingEvent/>
       <USEState/>
       <USEState_1/>
       <FormControl1/>
       <FormControl2/>
       <DynamicStyle/>
       <DynamicStyle2/>
       <USEState2/>
       <BottomToTop onChildData={handlechildData}/>
       <BottomTop4/>
       <BottomTop5/>
       <Home/>
      <Toggle/>
      <FAQ/>
      <USE_EFFECT_1/>
      <CUSTOM_HOOCKS/>
      <FRAGMENT/>
      <LiFECycleMethod/>
      <REF/>
      <USEREF/>
     <Component_1/>
     <USECONTEXT/>
     <CONTEXT_1/>
     <CONTEXT_2/>
     <CONTEXT_3/>
     </div>
  );
}


export default App;