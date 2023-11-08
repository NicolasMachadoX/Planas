import { useEffect, useState } from "react";

function App(){
//useStates
const [data,setData] = useState([]);
const [newData, setNewData] = useState({
    x:""
});
const [selectedData,setSelectedData] = useState({});
const [activeModal,switchActiveModal] = useState(false);

useEffect(()=>{

    const getData = async () =>{
        try {
            const response = await fetch('');
            const data = await response.json();
            setData(data);
            console.log('succesful');
        } catch (error) {
            console.log('we have a trouble');
        }
    };

    getData();

},[]);


const [data1,setData1] = useState([]);
const [newD,setNew] = useState({});
useEffect(()=>{

    const getAll = async () => {
        try {
            const response = await fetch('');
            const data = await response.json();
            setData1(data);
            console.log('yeiii');
        } catch (error) {
            console.log('we have errors men');
        }
    };

    getAll();

},[]);

const postUpdateDeletee = async () => {
    try {
        const response = await fetch('',{
            method: 'POST', // PUT DELETE
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newD)
        });
        const data = await response.json();
        setData1(data);
        console.log('yeiii');
    } catch (error) {
        console.log('we have errors men');
    }
};



const postDeleteUpdateHandler = async () => {
    try {
        const response = await fetch('', {
            method: 'POST' // 'PUT' para update
            ,
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData)
        });

        if(response.ok){
            console.log('good data');
            window.location.reload();
        }else{
            console.log('we have a problem');
        }
        
    } catch (error) {
        console.log('we have a trouble');
    }
}








    return(
        <></>
    )
};

export default App;