const title = document.querySelector("#title")
const host =  document.querySelector("#host")
const place = document.querySelector("#place")
const grade =  document.querySelector("#grade")
const date = document.querySelector("#date");
const memberInput = document.querySelector("#member");
const des = document.querySelector("#des");

const serverAddress = "http://10.80.162.177:5500";

function postData(){
    return axios.post(serverAddress+'/lecture',{
        title:title.value,
        host:host.value,
        place:place.value,
        grade:grade.value,
        date:date.value,
        member:memberInput.value,
        des:des.value
    }).then(()=>{
        console.log("hi")
    }).catch((e)=>{
        console.log("error"+e)
    })
}


const compare = ()=>{
    console.log(title.value)
    if(title.value==''){
        swal("특강명을 입력해주세요.")
    }else if(host.value===""){
        swal("주최자를 입력해주세요.")
    }else if(place.value===''){
        swal("장소를 입력해주세요.")
    }else if(grade.value==0){
        swal("학년을 선택해주세요.")
    }else if(memberInput.value==''){
        swal("인원을 입력해주세요.")
    }else if(date.value==''){
        swal("날짜를 입력해주세요.")
    }
    else{
        swal("특강 생성 성공","버튼을 눌러주세요.","success");
        postData();
    }
}