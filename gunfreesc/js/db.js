
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAmIDOWhsGzq_nqInVBovu8oG3srRCoO7c",
    authDomain: "gunfreesodacity.firebaseapp.com",
    databaseURL: "https://gunfreesodacity.firebaseio.com",
    projectId: "gunfreesodacity",
    storageBucket: "gunfreesodacity.appspot.com",
    messagingSenderId: "696337298049"
  };
  firebase.initializeApp(config);

  const dbRefObject = firebase.database().ref();
  dbRefObject.on("child_added", function(snapshot){
      codeAddress(snapshot.val().name, snapshot.val().address, snapshot.val().reason)
  })


  function addLocation(name, address, reason) {
    if (!(name === "" || address === "" || reason === "")) {
    dbRefObject.push().set({
      name: document.getElementById('nameBox').value,
      address: document.getElementById('addressBox').value,
      reason: document.getElementById('reasonBox').value
    }).then(function(result){
      console.log("Successfully wrote data")
    }).catch(function(error){
      alert("Database error: " + error)
    })
    } else {
        alert("Must enter a name, address, and reason.");
    }
  }

  // Get elecments 
  

  // realtime info
  //dbRefObject.on('value', snap => console.log(snap.val())); 