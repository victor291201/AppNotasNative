import React,{createContext, useState, useEffect} from "react";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider =(props)=>{
    const [data,setData] = useState({});
    const [user,setUser] = useState(null);
    const getMyStringValue = async () => {
      try {
         await AsyncStorage.getItem('user').then((res)=>{}).catch((e)=>alert(e))
      } catch(e) {
        alert(e)// read error
      }
    }
    const setStringValue = async (value) => {
        try {
          await AsyncStorage.setItem('user', value).catch((e)=>alert(e))
        } catch(e) {
          alert(e)
        }
    }
    const datos= async (id)=>{
          if(user != id){
            setUser(id)
          }
          await axios.get("http://localhost:3000/notas/"+id).then((response)=>{
		  	  setData(response.data)
          })
        
    }
    const login = async (correo,contraseña)=>{
        await axios.post("http://localhost:3000/iniciarSesion",{correo,contraseña}).then((response)=>{
         setStringValue(response.data.id.toString())
          props.setUs(correo)
        })
        .catch((error)=>{
          alert(error)
        });
      }
    const logout= async()=>{
      try {
        await AsyncStorage.removeItem('user').then((res)=>{
        setUser(null)
        props.setUs(null)
        })
      } catch(e) {
        alert(e)
      }
    }
    const update= async (titulo,descripcion,encargado,prioridad,date,id)=>{
        await axios.put("http://localhost:3000/nota/"+id,{"titulo":titulo,
        "decripcion":descripcion,
        "encargado":encargado,
        "prioridad":prioridad,
        "fEntrega":date
      }).then((response)=>{
        datos(user)
        })
        .catch((error)=>{
          alert(error)
        })
    }
    const addNota = async (titulo,descripcion,encargado,prioridad,date)=>{
        await axios.post("http://localhost:3000/nota/"+user,{"titulo":titulo,
        "decripcion":descripcion,
        "encargado":encargado,
        "prioridad":prioridad,
        "fEntrega":date
      }).then((response)=>{
        datos(user)
        })
        .catch((error)=>{
          alert(error)
        })
    }
    const deleteNota = async (id)=>{
        await axios.delete("http://localhost:3000/nota/"+id).then((response)=>{
          datos(user)
        })
        .catch((error)=>{
          alert(error)
        })
    }
    return(
        <DataContext.Provider value ={{data,setData,user,datos,logout,login,update,addNota,deleteNota,getMyStringValue}}>
            {props.children}
        </DataContext.Provider>
    )
}