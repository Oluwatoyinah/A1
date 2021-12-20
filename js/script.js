
 // at maxwidth of 989px content will change when on mobile
  const media = () =>{
    let q = matchMedia("(max-width:989px)");
    if (q.matches) {
      document.getElementById('lastname').style.display = "none";
      document.getElementById('mock-test').innerHTML = "Online/Offline Mock Test(CBT)";
      document.getElementById('Instructional-videos').innerHTML = "Online/Offline Interactive Instructional Videos";
      document.getElementById('lesson-note').innerHTML = "Concise Lesson Note";
      document.getElementById('tutor').innerHTML = "Ask a Tutor";
      document.getElementById('firstname').placeholder = "Full Name";
      

    }
    else {
      document.getElementById('lastname').style.display = "block";

    }
  }
  onload = media;
  onresize = media;