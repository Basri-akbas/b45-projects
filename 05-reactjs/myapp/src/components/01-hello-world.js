import Comp from "./02-comp";

const HelloWorld=()=>{

    const isim="Ali";
    const user={
        userName:"ali",
        password:"veli"
    }

    return(
        <>  {/*Fragmant etkisiz bir ana kolon koymaya yariyor*/}
        <div id="d1">Hello World
            <Comp/>
            <b>User name: {user.userName}</b>
        </div>

        <div id="d2">{isim}</div>
        </>
    );
}

export default HelloWorld;