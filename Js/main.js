


// ينقل الى بدايه الصفحه 
// TO UP
let span = document.querySelector(".up");
window.onscroll = function (){
    // TO UP
    // ظهور زر UP
    if(this.scrollY >= 1000){
        span.classList.add("show");
    } 
    else{
        span.classList.remove("show");
    }
    // this.scrollY >= 1000? span.classList.add("show") : span.classList.remove("show");

 
    // Sticky Navbar ON Scroll
    var nav = document.getElementById('topMenu');
    if(scrollY > 680){
        nav.classList.add("sticky")
    } 
    else{
        nav.classList.remove("sticky")
    }   
}
// عند النقر على زر UP ينقلك الى اعلى الصفحه
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}; 

// Action Menuo ON scroll
//  من اجل ينضاف كلاس اكتف مع كل قسم توصل  له
const li = document.querySelectorAll(".nav-link");
const sec = document.getElementsByClassName('section')

function actionvMenuo(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx =>  ltx.classList.remove("active"));
    li[len].classList.add("active")
}
actionvMenuo();
window.addEventListener("scroll", actionvMenuo)



// ******************************************************

const tab1 = document.getElementById('tab-1'),
    tab2 = document.getElementById('tab-2'),
    tab3 = document.getElementById('tab-3'),
    tab4 = document.getElementById('tab-4')


    // الطريقه الاولى
// const tabsBody = document.getElementById('tabs-body')

// ابجكت
// const data = [
//     { id: 1, title: 'First Training Class', img: 'Imges/training-image-01.jpg', desc: 'Phasellus convallis maurisF sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam' },
//     { id: 2, title: 'Second Training Class', img: 'Imges/training-image-02.jpg', desc: 'Phasellus convallis maurisF sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam' },
//     { id: 3, title: 'Thrid Training Class', img: 'Imges/training-image-03.jpg', desc: 'Phasellus convallis maurisF sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam' },
//     { id: 4, title: 'Fourth Training Class', img: 'Imges/training-image-04.jpg', desc: 'Phasellus convallis maurisF sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam' },
// ]

// داله لانشى المحتوى
// function swipeTabs(id) {
//     const body = data.find(t => t.id == id)
//     tabsBody.innerHTML = `<div class="tab-1" id="class-body-1"><img src="${body.img}" alt=""><h2>${body.title}</h2><p>${body.desc}</p><a href="" class="btn main-btn ">View Schedule</a></div>`
// }
// let oldId = 'tab-1'
// swipeTabs(1)

// tab1.addEventListener('click', () => {
//     swipeTabs(1)

       //  نجيب الزر
//     const tab = document.getElementById(oldId)  
//     console.log(oldId)
        //   نحذف الى كلاس متعلق فيه
//     tab.setAttribute('class', '')  
//     oldId = 'tab-1'
        //    نضيف كلاس اكتف
//     tab1.setAttribute('class', 'activ')
// })
// tab2.addEventListener('click', () => {
//     swipeTabs(2)
//     const tab = document.getElementById(oldId)
//     console.log(oldId)
//     tab.setAttribute('class', '')
//     oldId = 'tab-2'
//     tab2.setAttribute('class', 'activ')
// })
// tab3.addEventListener('click', () => {
//     swipeTabs(3)
//     const tab = document.getElementById(oldId)
//     tab.setAttribute('class', '')
//     oldId = 'tab-3'
//     tab3.setAttribute('class', 'activ')
// })
// tab4.addEventListener('click', () => {
//     swipeTabs(4)
//     const tab = document.getElementById(oldId)
//     tab.setAttribute('class', '')
//     oldId = 'tab-4'
//     tab4.setAttribute('class', 'activ')
// })


// -----------------------------------------------------------------------------------

// الطريقه الثانيه
const  tabBody1 = document.getElementById('class-body-1'),
    tabBody2 = document.getElementById('class-body-2'),
    tabBody3 = document.getElementById('class-body-3'),
    tabBody4 = document.getElementById('class-body-4')

    // id == class-body (المحتوى)
    // oldId == class-body (المحتوى)
    // oldIdTab == الزر
function swipeTab(id, oldId, oldIdTab) {
    const oldTabBody = document.getElementById(oldId)
    oldTabBody.setAttribute('class', 'none')
    const newTabBody = document.getElementById(id)
    newTabBody.setAttribute('class', 'block')

    // يجب الزر ويحذف الكلاس منه
    const oldTab = document.getElementById(oldIdTab)
    oldTab.setAttribute('class', '')
}

let oldId = 'class-body-1'
let oldIdTab = 'tab-1'

tab1.addEventListener('click', () => {
    swipeTab ('class-body-1', oldId, oldIdTab)
    oldId = 'class-body-1'
    oldIdTab = 'tab-1'
    // يضيف كلاس اكتف
    const newTab = document.getElementById(oldIdTab)
    newTab.setAttribute('class', 'activ')
})
tab2.addEventListener('click', () => {
    swipeTab ('class-body-2', oldId, oldIdTab)
    oldId = 'class-body-2'
    oldIdTab = 'tab-2'

    const newTab = document.getElementById(oldIdTab)
    newTab.setAttribute('class', 'activ')
})
tab3.addEventListener('click', () => {
    swipeTab ('class-body-3', oldId, oldIdTab)
    oldId = 'class-body-3'
    oldIdTab = 'tab-3'
    const newTab = document.getElementById(oldIdTab)
    newTab.setAttribute('class', 'activ')
})
tab4.addEventListener('click', () => {
    swipeTab ('class-body-4', oldId, oldIdTab)
    oldId = 'class-body-4'
    oldIdTab = 'tab-4'
    const newTab = document.getElementById(oldIdTab)
    newTab.setAttribute('class', 'activ')  
})



// *********************************************************************

// الجدول

const day1=document.getElementById('day-1'),
    day2=document.getElementById('day-2'),
    day3=document.getElementById('day-3'),
    day4=document.getElementById('day-4'),
    day5=document.getElementById('day-5')

const day1_Cont = document.getElementById('Monday'),
    day2_Cont = document.getElementById('Tuesday'),
    day3_Cont = document.getElementById('Wednesday'),
    day4_Cont = document.getElementById('Thursday'),
    day5_Cont = document.getElementById('Friday')


// القيمه الاولى ديفولت
let oldDay_cont1 ='Monday1',
    oldDay_cont2 ='Monday2';
    
let Old_Day ='day-1'


function fun_day(id,id2, oldDay_cont1,oldDay_cont2, Old_Day) {
    // يخفي المحتولا الاول 
    const oldTab_Cont1 = document.getElementById(oldDay_cont1)
    oldTab_Cont1.setAttribute('class', 'hide')
    // يختفي المحتوى الثاني
    const oldTab_Cont2 = document.getElementById(oldDay_cont2)
    oldTab_Cont2.setAttribute('class', 'hide')

    // يظهر المحتوى الاول 
    const newTab_Cont1 = document.getElementById(id)
    newTab_Cont1.setAttribute('class', 'show')
    //  يظهر المحتوى الثاني
    const newTab_Cont2 = document.getElementById(id2)
    newTab_Cont2.setAttribute('class', 'show')

    // يحذف الي كلاس من  زر اليوم
    const old_Day = document.getElementById(Old_Day)
    old_Day.setAttribute('class', '')
}

day1.addEventListener('click', () =>{
    fun_day('Monday1','Monday2',oldDay_cont1,oldDay_cont2,Old_Day)
    oldDay_cont1 ='Monday1',
    oldDay_cont2 = 'Monday2'
    Old_Day = 'day-1'
    //  يضيف كلاس اكتف
    const newDay = document.getElementById(Old_Day)
    newDay.setAttribute('class', 'activ')  
})

day2.addEventListener('click', () =>{
    fun_day('Tuesday1','Tuesday2',oldDay_cont1,oldDay_cont2,Old_Day)
    oldDay_cont1 ='Tuesday1',
    oldDay_cont2 = 'Tuesday2'
    Old_Day = 'day-2'

    const newDay = document.getElementById(Old_Day)
    newDay.setAttribute('class', 'activ')  
})

day3.addEventListener('click', () =>{
    fun_day('Wednesday1','Wednesday2',oldDay_cont1,oldDay_cont2,Old_Day)
    oldDay_cont1 ='Wednesday1',
    oldDay_cont2 = 'Wednesday2'
    Old_Day = 'day-3'

    const newDay = document.getElementById(Old_Day)
    newDay.setAttribute('class', 'activ')  
})

day4.addEventListener('click', () =>{
    fun_day('Thursday1','Thursday2',oldDay_cont1,oldDay_cont2,Old_Day)
    oldDay_cont1 ='Thursday1',
    oldDay_cont2 = 'Thursday2'
    Old_Day = 'day-4'

    const newDay = document.getElementById(Old_Day)
    newDay.setAttribute('class', 'activ')  
})

day5.addEventListener('click', () =>{
    fun_day('Friday1','Friday2',oldDay_cont1,oldDay_cont2,Old_Day)
    oldDay_cont1 ='Friday1',
    oldDay_cont2 = 'Friday2'
    Old_Day = 'day-5'

    const newDay = document.getElementById(Old_Day)
    newDay.setAttribute('class', 'activ')  
})

