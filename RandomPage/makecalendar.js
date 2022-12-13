console.log(new Date());
console.log(new Date(2022, 11, 09)); // 0~11임 Month가
console.log(new Date('2022-12-09T03:24:00'));

let date = new Date();
let utcDate = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
let kstGap = 9 * 60 * 60 * 1000; //9시간 차이임
let today = new Date(utcDate + kstGap);

const nowDate = new Date(today);
console.log(nowDate);
console.log(nowDate.getFullYear());
const currentMonth = nowDate.getMonth();
const currentYear = nowDate.getFullYear();// today에서 하면 122나옴

// 이전 달의 마지막 날 
const startDate = new Date(currentYear, currentMonth, 0);
const prevDate = startDate.getDate();
const prevDay = startDate.getDay();
console.log(startDate);
console.log(prevDate);
console.log(prevDay);
// 이번 달의 마지막 날
const endDate = new Date(currentYear, currentMonth + 1, 0);
const nextDate = endDate.getDate();
const nextDay = endDate.getDay();
console.log(endDate);
console.log(nextDate);
console.log(nextDay);

//이전
function next(){

}
//다음
function previous(){
    
}

//점프
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

//달력 쇼
function showCalendar(month,year){

}

//날짜
function daysInMonth(iMonth,iYear){

}