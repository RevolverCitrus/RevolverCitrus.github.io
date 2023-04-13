import {getUUID} from './tools'
window.onload=()=>{
    const btnReg=document.querySelector('.btn')
    btnReg.addEventListener('onclick',()=>{
        getUUID();
        console.log('注册成功');
    })
}