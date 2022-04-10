const btnDel=document.querySelectorAll(".btn-delete");
const list=document.querySelector("ul");


//yeni bir li eklememizi sagliyor
  function newElement(e){
      const inputValue=document.querySelector("#task").value;
       const newValue=inputValue.trim();    
      
      if(inputValue==="" || newValue===""){
          //alert("Lütfen bir isim giriniz");
          let error=document.querySelector(".error");
         error.style.display="block";
      }else{
         
         list.innerHTML+=`<li>
          ${inputValue}<button
            class="btn btn-delete position-absolute top-1 end-0"
          >
            ❌
          </button>
        </li>`
        let basarili=document.querySelector(".success");
        basarili.style.display="block";
                    
      }
      document.querySelector("#task").value = "";
      
      const btnDel=document.querySelectorAll(".btn-delete");
      btnDel.forEach(item => {
    item.addEventListener("click",(e)=>{
        e.target.closest("li").remove();
    });
  });
        
  };

  //li yi silmeyi gerceklestiriyoruz
  btnDel.forEach(item => {
    item.addEventListener("click",(e)=>{
        e.target.closest("li").remove();
    });
  }); 


  //li lere check yapildi isareti koyuyoruz
  list.addEventListener("click", e=>{
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
  }
  },false);


  let close=document.querySelectorAll(".close");

  close.forEach(item=>{
    item.addEventListener("click",(e)=>{
    e.target.closest("div").style.display="none";
  });
  
});