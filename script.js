
'use strict';
 console.log("hi");
//define react page component with vanilla JS
function TaskList(props) {
  //console.log("working");
  //return output for component use JSX
  return <div className="contain">
    <h1>{props.text1}</h1>
    <br />
    <ol>
      {
        //using map() to loop through array passed in props.plan, creating new element for each array value
        props.list.map(
          //copy current array valur into item and pass to func 
          (item, index) => (
            <li key={index}>
             <a href={item.link}>{item.title}</a>
              <br />
              {item.detail}
              <br />
              <img src={item.image_trail} alt={item.title} />
              <br />
            </li>
          )
        )
      }
    </ol>
  </div>;
}

// define dataset as array in an external Json file 
jQuery.getJSON(
  //2 args 1. path to json file, 2. an anon function to run with data
  'https://nodepractice.calisara.repl.co/Portfolio',
  function (jsonFromJquery) {
    //inside func code can be run that accesses the json data
    //put it onto the page with render
        ReactDOM.render(
          <TaskList list={jsonFromJquery} text1="A Compilation of 50C Intro to Javascript Projects" />,
          document.getElementById('myProject')
        );
    //use hammer.js to detect pan gesture
    const action = new Hammer( document.getElementById('myProject'));
     action.get("pan").set({ direction: Hammer.DIRECTION_HORIZONTAL });
    action.on("pan",
       function(ev){
        console.log(ev.direction);
        if(ev.direction ==2){
          $('.contain ol').this('left','+=300px');
        }else if(ev.direction ==4){
          $('.contain ol').this('left', '-=300px')
        }
      }
    );
    
  }
);




