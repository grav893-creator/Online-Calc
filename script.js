let deleteDispaly=document.querySelector('.button_c-item delete')
let display=document.querySelector('.display-flex__input') 
let deleteLast=document.querySelector('.ClearLastToDisplay')


let a = '' //one
let b = '' //two 
let d=''   //три
let c= ''  //operator
let c2=''  //operator 2
//Дисплей 
function addToDisplay(value){
   if(['+', '-', '*', '/'].includes(value)){
        if(value==='-' && a === ''){
            a='-'
        }else if(a!='' && b!='' && c!=''){
            ravno()
    }   else{
            c=value
    }
       
   }
   
   else{    
    if(c=='')
        {
            a+=value
        }
        else{
            b+=value
        }
    }
    display.value = a + c + b 
    
}
//Очистка дисплея
function ClearDisplay(){
    display.value = '';
    a=''
    b=''
    c=''
}
//Удаление последнего элемента
function ClearLastToDisplay(){
    display.value=display.value.slice(0, -1)
    if(b!=''){
        b=b.slice(0,-1)
    }
      else if(c!=''){
        c=''
    }
    else if(a!=''){
        a=a.slice(0,-1)
    }
    
}
//равно
function ravno(){
    if(a && b && c){
        const numOne=parseFloat(a)
        const numTwo=parseFloat(b)
        let result

        switch (c){
            case '+':result=numOne+numTwo;break
            case '-':result=numOne-numTwo;break
            case '*':result=numOne*numTwo;break
            case '/':
                if(numTwo==0){
                    alert('Ошибка:деление на 0 ')
                    result=''
                    a = '';
                    b=''
                    c=''
                }
                else{
                    result=numOne/numTwo;
                }
                break;
        }
        display.value=result
        a = result.toString()
        b=''
        c=''
    }
}






//Мега супер дизайн
function NikitaKormilin(){
    document.body.classList.toggle('dark')
    document.body.classList.toggle('colored-li');
    document.body.classList.toggle('coloredes');
    document.body.classList.toggle('colorDisp');

}

