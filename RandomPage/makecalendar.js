// console.log(new Date());
// console.log(new Date(2022, 11, 09)); // 0~11임 Month가
// console.log(new Date('2022-12-09T03:24:00'));

// let date = new Date();
// let utcDate = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
// let kstGap = 9 * 60 * 60 * 1000; //9시간 차이임
// let today = new Date(utcDate + kstGap);

// const nowDate = new Date(today);
// console.log(nowDate);
// console.log(nowDate.getFullYear());
// const currentMonth = nowDate.getMonth();
// const currentYear = nowDate.getFullYear();// today에서 하면 122나옴

// // 이전 달의 마지막 날 
// const startDate = new Date(currentYear, currentMonth, 0);
// const prevDate = startDate.getDate();
// const prevDay = startDate.getDay();
// console.log(startDate);
// console.log(prevDate);
// console.log(prevDay);
// // 이번 달의 마지막 날
// const endDate = new Date(currentYear, currentMonth + 1, 0);
// const nextDate = endDate.getDate();
// const nextDay = endDate.getDay();
// console.log(endDate);
// console.log(nextDate);
// console.log(nextDay);

// 달력 년도 범위 (셀렉트옵션들)
function generate_year_range(start, end) {
    let years = "";
    for (let year = start; year <= end; year++) {
        years += "<option value=" + year + ">" + year + "</option>";
    }
    return years;
}

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

const createYear = generate_year_range(1970, 2050);

//년도 셀렉트 옵션에 추가
document.getElementById("year").innerHTML = createYear;


let calendar = document.getElementById("calendar");
let lang = calendar.getAttribute('data-lang');

let month = "";
let days = "";

const monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "kor") {
    months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    days = ["일", "월", "화", "수", "목", "금", "토"];
} else {
    months = monthDefault;
    days = dayDefault;
}

// https://velog.io/@parkseonup/JS-%EB%B3%80%EC%88%98%EB%AA%85%EC%97%90-%EC%82%AC%EC%9A%A9%EB%90%9C-%EB%8B%AC%EB%9F%AC-%EA%B8%B0%ED%98%B8%EC%9D%98-%EC%9D%98%EB%AF%B8


let $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days=" + days[dhead] + ">" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

//이전
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12; //12월이면 0으로 가야 1월임
    showCalendar(currentMonth, currentYear);
}
//다음
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

//점프
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

//달력 쇼
function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;

    selectYear.value = year;
    selectMonth.value = month;
    let date = 1;
    for(let i = 0 ; i < 6 ; i++){
        //줄구분 n 주차
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        for(let j = 0 ; j < 7 ; j++){
            if(i===0 && j < firstDay){
                cell = document.createElement("td");
                const cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }else if(date > daysInMonth(month,year))
            {
                break;
            }else{
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }

}

// 월의 마지막 날짜 리턴
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}