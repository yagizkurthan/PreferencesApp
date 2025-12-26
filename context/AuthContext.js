import { createContext,useContext,useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext=createContext(undefined);
const STORAGE_KEY='user';
export function AuthProvider({ children }) {
const [user,setUser]=useState(null);
const [isLoading,setIsLoading]=useState(true);
useEffect(()=>{
AsyncStorage.getItem(STORAGE_KEY).then(stored=>{
if(!stored) return;
try{setUser(JSON.parse(stored));}
catch{setUser(null);AsyncStorage.removeItem(STORAGE_KEY).catch(()=>{});}
}).catch(()=>{setUser(null);}).finally(()=>setIsLoading(false));
},[]);
useEffect(()=>{
if(isLoading) return;
if(user){AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(user)).catch(()=>{});}
else{AsyncStorage.removeItem(STORAGE_KEY).catch(()=>{});}
},[user,isLoading]);
const login=(username)=>setUser({ username });
const logout=()=>setUser(null);
return <AuthContext.Provider value={{ user,isLoading,login,logout }}>{children}</AuthContext.Provider>;
}
export function useAuth(){
const context=useContext(AuthContext);
if(!context) throw new Error('useAuth must be used inside AuthProvider');
return context;
}