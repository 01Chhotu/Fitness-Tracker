let dark = document.querySelector('#dark')
let card = document.querySelector('.card')
let WorkType = document.querySelector('#WorkType')
let Duration = document.querySelector('#Duration')
let AddBtn = document.querySelector('#AddBtn')
let WorkLog = document.querySelector('.WorkLog')
let warning = document.querySelector('.warning')
let flag=1, p;
dark.addEventListener('click', ()=>{
    if(flag){
        document.body.style.backgroundColor = 'black'
        card.style.backgroundColor = '#333333'
        document.body.style.color = 'white'
        flag=0;
    }
    else{
        document.body.style.backgroundColor = '#ECECEC'
        document.body.style.color = 'black'
        card.style.backgroundColor = 'white'
        flag=1;
        p.style.color = 'black'
    }
})
AddBtn.addEventListener('click', ()=>{
    let WorkoutType = WorkType.value
    let TimeTake = parseInt(Duration.value)
    p = document.createElement('p')
    let btn = document.createElement('button')
    let div = document.createElement('div')
    div.setAttribute('class', 'continer')
    div.appendChild(p)
    div.appendChild(btn)
    let res;
    if(WorkoutType === '' || isNaN(TimeTake)){
        warning.style.display = 'inline'
        warning.innerHTML = 'Please fill in both fields.'
    }
    else{ 
        WorkLog.appendChild(div);
        btn.innerHTML = 'Delete';
        res = `${WorkoutType} - ${TimeTake} minutes`
        warning.style.display = 'none'
    }
    p.textContent = res
    btn.addEventListener('click', ()=>{
        div.remove()
    })
    p.style.color='black'
})